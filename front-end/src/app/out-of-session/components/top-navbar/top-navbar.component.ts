import { Component } from '@angular/core';

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {

  constructor() { }

  help() {
    const bodyClasses = document.querySelector('body').classList
    if (bodyClasses.contains('light-theme')) {
      bodyClasses.remove('light-theme')
      bodyClasses.add('dark-theme')
    } else {
      bodyClasses.remove('dark-theme')
      bodyClasses.add('light-theme')
    }
  }
}
