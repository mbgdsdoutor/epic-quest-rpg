import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  userId: number

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
    this.userId = this.tokenStorageService.getLoggedUser().id
  }

  logout(): void {
    this.tokenStorageService.signOut()
    this.router.navigate(['/auth/login']);
  }
}
