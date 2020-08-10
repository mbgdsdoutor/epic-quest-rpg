import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/token-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit {
  public form: FormGroup;
  public remember: string;

  constructor(
    private formBuilder: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.remember = this.tokenStorageService.getRememberMe();
    this.configurarForm();
    if (this.tokenStorageService.isLogged()) {
      this.router.navigateByUrl('/home');
    }
  }

  configurarForm() {
    const username = this.formBuilder.control(this.remember ? this.remember : null, [Validators.required]);
    const password = this.formBuilder.control(null, [Validators.required]);
    const rememberMe = this.formBuilder.control(this.remember, []);
    this.form = this.formBuilder.group({
      username,
      password,
      rememberMe
    });
  }

  login() {
    const credentials = this.form.value;
    this.authService.authenticate(credentials).subscribe(
      (data) => {
        if (data && data.access_token) {
          this.tokenStorageService.saveToken(data.access_token);
          if (credentials.rememberMe) {
            this.tokenStorageService.saveRememberMe(credentials.username);
          } else {
            this.tokenStorageService.saveRememberMe('');
          }
        }
      },
      (err) => {
        alert('erro doido!')
      });
  }
}
