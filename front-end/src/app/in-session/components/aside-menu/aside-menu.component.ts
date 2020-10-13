import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent {

  @ViewChild('aside', { static: false }) aside: ElementRef;
  
  constructor() { }

  toggleAside() {
    this.aside.nativeElement.classList.toggle('aside--open')
  }
}
