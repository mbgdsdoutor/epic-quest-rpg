import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { InSessionComponent } from './in-session.component';
import { AuthGuard } from '../auth.guard';
import { SessionComponent } from './session/session.component';
import { CombatComponent } from './combat/combat.component';

const SESSION: Route = {
    path: 'session',
    component: SessionComponent,
    canActivate: [ AuthGuard ]
};

const COMBAT: Route = {
    path: 'combat',
    component: CombatComponent,
    canActivate: [ AuthGuard ]
};

export const inSessionRoutes: Routes = [
    {
      path: '',
      component: InSessionComponent,
      children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'session'
          },
          SESSION,
          COMBAT
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(inSessionRoutes),
        HttpClientModule,
        FormsModule,
        CommonModule
    ],
    exports: [ RouterModule ]
})

export class InSessionRoutingModule { }
