import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './out-of-session.routing.module';
import { OutOfSessionComponent } from './out-of-session.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    OutOfSessionComponent,
    HomeComponent,
    SettingsComponent,
  ]
})
export class OutOfSessionModule { }
