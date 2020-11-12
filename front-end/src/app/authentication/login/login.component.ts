import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.configurarForm();
    if (this.tokenStorageService.isLogged()) {
      this.router.navigateByUrl('/home');
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
    const credentials = this.form.value;
    this.authService.authenticate(credentials).subscribe(
      (data) => {
        console.log('MADOKAAAAAAAAAAAAAAA NELES', data)
        if (data && data.access_token) {
          this.tokenStorageService.saveToken(data.access_token);
          this.tokenStorageService.saveUser(credentials);
          this.router.navigateByUrl('/home');
        }
      },
      (err) => {
        alert('erro doido!')
      });
  }
}
