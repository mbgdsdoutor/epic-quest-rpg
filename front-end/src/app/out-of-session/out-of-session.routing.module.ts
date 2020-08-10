import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { OutOfSessionComponent } from './out-of-session.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../auth.guard';
import { SettingsComponent } from './settings/settings.component';
import { ReportsAndStatisticsComponent } from './reports-and-statistics/reports-and-statistics.component';

const HOME: Route = {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuard ]
};

const SETTINGS: Route = {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [ AuthGuard ]
};

const REPORTS_AND_STATISTICS: Route = {
    path: 'reports',
    component: ReportsAndStatisticsComponent,
    canActivate: [ AuthGuard ]
};

export const outOfSessionRoutes: Routes = [
    {
      path: '',
      component: OutOfSessionComponent,
      children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home'
          },
          HOME,
          SETTINGS,
          REPORTS_AND_STATISTICS
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(outOfSessionRoutes),
        HttpClientModule,
        FormsModule,
        CommonModule
    ],
    exports: [ RouterModule ]
})

export class AuthRoutingModule { }
