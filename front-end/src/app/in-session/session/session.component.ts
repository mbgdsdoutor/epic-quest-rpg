import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  constructor() { }

  ngAfterViewInit(): void {
    this.canvas.nativeElement.height = window.innerHeight;
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvasContext = this.canvas.nativeElement.getContext('2d');
    this.canvasContext.lineCap = 'round';
  }

  changeBackground(event) {
    this.setBackground(event.target.files[0]);
  }

  setBackground(file: File) {
    this.imageWard = file;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(img, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    }
    img.src = url;
    setTimeout(() => {

      this.redrawAll(false);
    }, 100)
  }

  startPosition(event: MouseEvent): void {
    this.isPainting = true;
    this.draw(event);

    this.drawHistory.push({
      x: event.clientX,
      y: event.clientY,
      size: this.pencilWidth,
      color: this.pencilColor,
      mode: "begin"
    });
  }

  finishedPosition(event): void {
    this.isPainting = false;
    this.canvasContext.beginPath();

    this.drawHistory.push({
      x: event.clientX,
      y: event.clientY,
      size: this.pencilWidth,
      color: this.pencilColor,
      mode: "end"
    });
  }

  draw(event: MouseEvent): void {
    if (!this.isPainting) return;

    this.canvasContext.lineWidth = this.pencilWidth;
    this.canvasContext.strokeStyle = this.pencilColor;
    this.canvasContext.lineTo(event.clientX, event.clientY);
    this.canvasContext.stroke();
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(event.clientX, event.clientY);

    this.drawHistory.push({
      x: event.clientX,
      y: event.clientY,
      size: this.pencilWidth,
      color: this.pencilColor,
      mode: "draw"
    });
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

  undoDraw() {
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
    }, 1)
  }

  resetDraw() {
    this.canvasContext.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.drawHistory = [];
  }
}
