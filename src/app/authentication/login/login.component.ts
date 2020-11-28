import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.configurarForm();
    if (this.tokenStorageService.isLogged()) {
      this.router.navigateByUrl('/social/explore');
    }
  }

  configurarForm() {
    const username = this.formBuilder.control(null, [Validators.required]);
    const password = this.formBuilder.control(null, [Validators.required]);
    this.form = this.formBuilder.group({
      username,
      password
    });
  }

  login(): void {
    this.loadingService.startLoadingBar();
    const credentials = this.form.value;
    this.authService.authenticate(credentials).subscribe(
      (data) => {
        if (data && data.token) {
          this.tokenStorageService.saveToken('Bearer ' + data.token);
          this.tokenStorageService.saveUser(data.user);
          this.loadingService.stopLoadingBar();
          this.router.navigateByUrl('/social/explore');
        }
      },
      (err) => {
        this.loadingService.stopLoadingBar();
        this.alertService.error('Credenciais Invalidas.')
      });
  }
}
