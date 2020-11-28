import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/token-storage.service';
import { User } from '../../models/user';
import { UserService } from 'src/app/authentication/services/user.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  isEditing = false;
  isEditable = false;
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private userService: UserService,
    private tokenService: TokenStorageService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    const urlId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    if (this.tokenService.getLoggedUser().id === urlId) {
      this.isEditable = true;
    }
    this.loadingService.startLoadingBar();
    this.userService.findById(urlId).subscribe(response => {
      this.loadingService.stopLoadingBar();
      this.user = response;
    }, (err) => {
      this.loadingService.stopLoadingBar();
      this.alertService.error('Erro ao buscar usuário.');
    });
  }

  toggleIsEditing() {
    this.isEditing = !this.isEditing;
  }
}
