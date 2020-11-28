import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/token-storage.service';
import { EpicValidators } from 'src/app/utils/validators';
import { UserService } from '../services/user.service';
import { User } from 'src/app/out-of-session/models/user';
import { AlertService } from 'src/app/shared/alert.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
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
    private loadingService: LoadingService,
    private messageService: AlertService,
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
    const fullName = this.formBuilder.control(null, [Validators.required]);
    const email = this.formBuilder.control(null, [Validators.required, EpicValidators.EMAIL]);
    const userName = this.formBuilder.control(null, [Validators.required]);
    const description = this.formBuilder.control(null, [Validators.required]);
    const password = this.formBuilder.control(null, [Validators.required]);
    const confirmPassword = this.formBuilder.control(null, [Validators.required, this.matchValues('password')]);
    const photoUrl = this.formBuilder.control(null, []);
    this.form = this.formBuilder.group({
      fullName,
      email,
      userName,
      description,
      password,
      confirmPassword,
      photoUrl
    });
  }

  salvarUsuario() {
    const user = this.form.value as User;
    this.loadingService.startLoadingBar();
    this.authService.saveUser(user).subscribe(response => {
      this.loadingService.stopLoadingBar();
      this.messageService.success('Usuário registrado.');
      console.log('USUARIO SALVO COM SUCESSO!', response);
      this.router.navigateByUrl('/auth/login');
    }, (err) => {
      this.loadingService.stopLoadingBar();
      this.messageService.error('Erro ao salvar usuário.');
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
        : { isMatching: true };
    };
  }
}
