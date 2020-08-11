import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/token-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
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
    const fullname = this.formBuilder.control(null, [Validators.required]);
    const email = this.formBuilder.control(null, [Validators.required]);
    const username = this.formBuilder.control(null, [Validators.required]);
    const password = this.formBuilder.control(null, [Validators.required]);
    const confirmPassword = this.formBuilder.control(null, [Validators.required, this.matchValues('password')]);
    this.form = this.formBuilder.group({
      fullname,
      email,
      username,
      password,
      confirmPassword
    });
  }

  public matchValues(
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
}
}
