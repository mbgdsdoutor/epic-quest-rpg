import { Component } from '@angular/core';

@Component({
  selector: 'app-in-session',
  templateUrl: './in-session.component.html',
  styleUrls: ['./in-session.component.scss']
})
export class InSessionComponent {

  isMainOptionsClosed: boolean = false;
  isMicrophoneOn: boolean = false;

  constructor() { }

  toggleMainOptions(): void {
    this.isMainOptionsClosed = !this.isMainOptionsClosed
  }

  toggleMicrophone(): void {
    this.isMicrophoneOn = !this.isMicrophoneOn
  }

  showChat(): void {
    document.querySelector('.chat').classList.add('chat--open')
  }

  showNotes(): void {
    document.querySelector('.notes').classList.add('notes--open')
  }
}
