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
import { ExploreComponent } from './social/explore/explore.component';
import { ProfileComponent } from './social/profile/profile.component';
import { AdventureComponent } from './adventures/adventure/adventure.component';
import { NewAdventureComponent } from './adventures/new-adventure/new-adventure.component';
import { MyAdventuresComponent } from './adventures/my-adventures/my-adventures.component';

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

const SOCIAL: Route = {
    path: 'social/explore',
    component: ExploreComponent,
    canActivate: [ AuthGuard ]
};

const PROFILE: Route = {
    path: 'social/profile/:id',
    component: ProfileComponent,
    canActivate: [ AuthGuard ]
};

const ADVENTURES: Route = {
    path: 'adventures/list',
    component: AdventureComponent,
    canActivate: [ AuthGuard ]
};

const MY_ADVENTURES: Route = {
    path: 'adventures/mine',
    component: MyAdventuresComponent,
    canActivate: [ AuthGuard ]
};

const NEW_ADVENTURE: Route = {
    path: 'adventures/new',
    component: NewAdventureComponent,
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
          REPORTS_AND_STATISTICS,
          SOCIAL,
          PROFILE,
          ADVENTURES,
          MY_ADVENTURES,
          NEW_ADVENTURE
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

export class OutOfSessionRoutingModule { }
