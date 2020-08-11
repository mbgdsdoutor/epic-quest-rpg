import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';

const LOGIN: Route = {
  path: 'login',
  component: LoginComponent
};

const REGISTER: Route = {
  path: 'register',
  component: RegisterComponent
};

const FORGOT_PASSWORD: Route = {
  path: 'password',
  component: ForgotPasswordComponent
};

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      LOGIN,
      REGISTER,
      FORGOT_PASSWORD
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
