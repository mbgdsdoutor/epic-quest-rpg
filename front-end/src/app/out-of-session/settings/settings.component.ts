import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [``]
})

export class SettingsComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
  ) {}

  ngOnInit() {

  }

  logout(): void {
    this.tokenStorageService.signOut()
    this.router.navigate(['/auth/login']);
  }
}
