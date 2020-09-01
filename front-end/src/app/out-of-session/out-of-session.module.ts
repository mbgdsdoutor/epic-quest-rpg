import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './out-of-session.routing.module';
import { OutOfSessionComponent } from './out-of-session.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdventureIcon } from '../shared/adventure-icon';
import { MapsIcon } from '../shared/maps-icon';
import { RulesIcon } from '../shared/rules-icon';
import { ExitIcon } from '../shared/exit-icon';
import { HelpIcon } from '../shared/help-icon';
import { CogIcon } from '../shared/cog-icon';
import { NotificationIcon } from '../shared/notification-icon';
import { PersonIcon } from '../shared/person-icon';
import { TorchIcon } from '../shared/torch-icon';

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
    BottomNavbarComponent,
    TopNavbarComponent,
    SidebarComponent,
    SettingsComponent,
    //icons
    AdventureIcon,
    RulesIcon,
    MapsIcon,
    ExitIcon,
    HelpIcon,
    CogIcon,
    NotificationIcon,
    PersonIcon,
    TorchIcon
  ]
})
export class OutOfSessionModule { }
