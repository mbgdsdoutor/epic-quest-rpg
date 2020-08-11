import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/token-storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {

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
    const email = this.formBuilder.control(null, [Validators.required]);
    this.form = this.formBuilder.group({
      email,
    });
  }
}
