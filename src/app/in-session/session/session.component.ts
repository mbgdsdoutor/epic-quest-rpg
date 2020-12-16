import { Component, ElementRef, ViewChild } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})

export class SessionComponent {

  @ViewChild('canvas') canvas: ElementRef;
  canvasContext: CanvasRenderingContext2D;
  isPainting: boolean = false;
  pencilColor: string = '#000000';
  pencilWidth: number = 5;
  drawHistory = [];
  imageWard: File;
  connection: Promise<any>;
  socketUserId: number;

  constructor(private tokenService: TokenStorageService) {
    this.socketUserId = this.tokenService.getLoggedUser().id;
    console.log('madoka', this.socketUserId);
  }

  ngAfterViewInit(): void {
    this.canvas.nativeElement.height = window.innerHeight;
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvasContext = this.canvas.nativeElement.getContext('2d');
    this.canvasContext.lineCap = 'round';

    this.initWebSocket();
  }

  changeBackground(event) {
    this.setBackground(event.target.files[0]);
  }

  async setBackground(file: File) {
    this.imageWard = file;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(img, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    }
    img.src = url;

    const imgb64 = await toBase64(file);
    this.enviarBg(imgb64 as string)

    setTimeout(() => {
      this.redrawAll(false);
    }, 100)
  }

  setBackgroundFromB64(file: string) {
    const image = new Image();
    image.onload = () => {
      this.canvasContext.drawImage(image, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    };
    image.src = file;
  }

  startPosition(event: MouseEvent, propagate?: boolean): void {
    this.isPainting = true;
    this.draw(event, true);

    this.drawHistory.push({
      x: event.clientX,
      y: event.clientY,
      size: this.pencilWidth,
      color: this.pencilColor,
      mode: "begin"
    });

    if (propagate) {
      this.enviarStart(JSON.stringify(event));
    }
  }

  finishedPosition(event, propagate?: boolean): void {
    this.isPainting = false;
    this.canvasContext.beginPath();

    this.drawHistory.push({
      x: event.clientX,
      y: event.clientY,
      size: this.pencilWidth,
      color: this.pencilColor,
      mode: "end"
    });

    if (propagate) {
      this.enviarEnd(JSON.stringify(event));
    }
  }

  draw(event: MouseEvent, propagate: boolean): void {
    if (!this.isPainting) return;

    const draw = {
      x: event.clientX,
      y: event.clientY,
      size: this.pencilWidth,
      color: this.pencilColor,
      mode: "draw"
    };

    this.madokaDraw(draw);

    if (propagate) {
      this.enviarDraw(draw)
    }
  }

  madokaDraw(draw) {
    this.canvasContext.lineWidth = this.pencilWidth;
    this.canvasContext.strokeStyle = this.pencilColor;
    this.canvasContext.lineTo(draw.x, draw.y);
    this.canvasContext.stroke();
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(draw.x, draw.y);

    this.drawHistory.push(draw);
  }

  redrawAll(clearBeforeDraw: boolean) {
    if (this.drawHistory.length == 0 && clearBeforeDraw) {
      this.canvasContext.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      return;
    }

    if (clearBeforeDraw) {
      this.canvasContext.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      if (this.imageWard) this.setBackground(this.imageWard)
    }

    for (var i = 0; i < this.drawHistory.length; i++) {

      var pt = this.drawHistory[i];

      var begin = false;

      if (this.canvasContext.lineWidth != pt.size) {
        this.canvasContext.lineWidth = pt.size;
        begin = true;
      }
      if (this.canvasContext.strokeStyle != pt.color) {
        this.canvasContext.strokeStyle = pt.color;
        begin = true;
      }
      if (pt.mode == "begin" || begin) {
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(pt.x, pt.y);
      }
      if (pt.mode == "draw") { // eu
        this.canvasContext.lineTo(pt.x, pt.y);
      } // eu

      if (pt.mode == "end" || (i == this.drawHistory.length - 1)) {
        this.canvasContext.stroke();
        this.canvasContext.beginPath(); // eu
      }
    }
    // this.canvasContext.stroke();
  }

  undoDraw(propagate?: boolean) {
    let reverseDrawHistory = [...this.drawHistory].reverse()
    for (const draw of reverseDrawHistory) {
      if (draw.mode === 'end' || draw.mode === 'draw') {
        this.drawHistory.pop();
      } else {
        this.drawHistory.pop();
        break;
      }
    }
    setTimeout(() => {
      if (this.drawHistory.length === 1) this.drawHistory.pop()
      // if (this.drawHistory.length > 1) this.drawHistory.shift()
      this.redrawAll(true);
      // this.setBackground(this.imageWard)

      if (propagate) {
        this.enviarUndo();
      }
    }, 1)
  }

  resetDraw(propagate?: boolean) {
    this.canvasContext.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.drawHistory = [];
    if (propagate) {
      this.enviarReset();
    }
  }

  propagateColor() {
    this.enviarColor(this.pencilColor);
  }

  propagateWidth() {
    this.enviarWidth('' + this.pencilWidth);
  }

  initWebSocket() {
    this.connection = this.connect(this.socketUserId);
    this.connection.then((stompClient) => this.stompSubscribe(stompClient, '/topic/newMember', (data) => {
      console.log(data);
    })).then((stompClient) => this.stompClientSendMessage(stompClient, '/app/register', this.socketUserId))
      .then((stompClient) => {
        return stompClient;
      }).then((stompClient) => this.stompSubscribe(stompClient, '/topic/disconnectedUser', (data) => { // 7
        console.log(data);
      })).then((stompClient) => {
        console.log('ME INSCREVI A MIM MESMO', this.socketUserId)
        if (this.socketUserId !== 1) {
          this.stompSubscribe(stompClient, `/user/${this.socketUserId}/draw`, (data) => {
            console.log('DRAW RECEBIDO!', data);
            // this.madokaDraw(data.?);
          })

          this.stompSubscribe(stompClient, `/user/${this.socketUserId}/bg`, (data) => {
            console.log('bg', data);
            // this.setBackgroundFromB64(data.?);
          })

          this.stompSubscribe(stompClient, `/user/${this.socketUserId}/reset`, (data) => {
            this.resetDraw(false);
          })

          this.stompSubscribe(stompClient, `/user/${this.socketUserId}/start`, (data) => {
            console.log('start', data);
            // this.startPosition(JSON.parse(data.?));
          })

          this.stompSubscribe(stompClient, `/user/${this.socketUserId}/end`, (data) => {
            console.log('end', data);
            // this.finishedPosition(JSON.parse(data.?));
          })

          this.stompSubscribe(stompClient, `/user/${this.socketUserId}/color`, (data) => {
            console.log('color', data);
            // this.pencilColor = data.?
          })

          this.stompSubscribe(stompClient, `/user/${this.socketUserId}/width`, (data) => {
            console.log('width', data);
            // this.pencilWidth = parseInt(data.?, 10)
          })

          this.stompSubscribe(stompClient, `/user/${this.socketUserId}/undo`, (data) => {
            this.undoDraw(false);
          })
        }

      })
  }

  enviarBg(bg: string) {
    this.connection.then((stompClient) => this.stompClientSendMessage(stompClient, `/app/photo`, bg))
  }

  enviarStart(event: string) {
    this.connection.then((stompClient) => this.stompClientSendMessage(stompClient, `/app/start`, 'start'))
  }

  enviarEnd(event: string) {
    this.connection.then((stompClient) => this.stompClientSendMessage(stompClient, `/app/end`, 'end'))
  }

  enviarReset() {
    this.connection.then((stompClient) => this.stompClientSendMessage(stompClient, `/app/reset`, 'reset'))
  }

  enviarUndo() {
    this.connection.then((stompClient) => this.stompClientSendMessage(stompClient, `/app/undo`, 'undo'))
  }

  enviarColor(color: string) {
    this.connection.then((stompClient) => this.stompClientSendMessage(stompClient, `/app/color`, 'color'))
  }

  enviarWidth(width: string) {
    this.connection.then((stompClient) => this.stompClientSendMessage(stompClient, `/app/width`, 'width'))
  }

  enviarDraw(pincel) {
    const pincelString = JSON.stringify(pincel);
    this.connection.then((stompClient) => this.stompClientSendMessage(stompClient, `/app/pincel`, pincelString))
  }

  connect(username) {
    return new Promise((resolve, reject) => {
      let stompClient = Stomp.over(new SockJS('http://localhost:8086/websocket'))
      stompClient.connect({}, (frame) => resolve(stompClient))
    })
  }

  stompSubscribe(stompClient, endpoint, callback) {
    stompClient.subscribe(endpoint, callback)
    return stompClient
  }

  stompClientSendMessage(stompClient, endpoint, message) {
    stompClient.send(endpoint, {}, message)
    return stompClient
  }

  disconnect(stompClient, username, connectBtn, disconnectBtn, clicked = false) {
    connectBtn.disabled = false
    disconnectBtn.disabled = true
    if (clicked) {
      this.stompClientSendMessage(stompClient, '/app/unregister', username)
    }
    stompClient.disconnect() //6-1
  }
}

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});