import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavbarComponent {

  constructor(private router: Router) { }

  isActive(menu: string) {
    const activeUrl = this.router.url
    if(activeUrl === '/home' && menu === 'home') return true
    else if(activeUrl === '/reports' && menu === 'reports') return true
    else if(activeUrl === '/settings' && menu === 'settings') return true
    return false
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url)
  }
}
