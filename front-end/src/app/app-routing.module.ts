import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

const AUTH_ROUTE: Route = {
  path: 'auth',
  loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
};

const OUT_OF_SESSION_ROUTE: Route = {
  path: '',
  loadChildren: () => import('./out-of-session/out-of-session.module').then(m => m.OutOfSessionModule)
}

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  AUTH_ROUTE,
  OUT_OF_SESSION_ROUTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
