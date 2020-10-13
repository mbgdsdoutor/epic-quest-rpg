import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutOfSessionRoutingModule } from './out-of-session.routing.module';
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
import { BrokenAxeIcon } from '../shared/broken-axe-icon';
import { CogIcon } from '../shared/cog-icon';
import { NotificationIcon } from '../shared/notification-icon';
import { PersonIcon } from '../shared/person-icon';
import { TorchIcon } from '../shared/torch-icon';
import { ExploreComponent } from './social/explore/explore.component';
import { ProfileComponent } from './social/profile/profile.component';
import { AdventureComponent } from './adventures/adventure/adventure.component';
import { MyAdventuresComponent } from './adventures/my-adventures/my-adventures.component';
import { NewAdventureComponent } from './adventures/new-adventure/new-adventure.component';
import { TagInputModule } from 'ngx-chips';
import { MasterIcon } from '../shared/master-icon';

@NgModule({
  imports: [
    OutOfSessionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TagInputModule,
  ],
  declarations: [
    OutOfSessionComponent,
    HomeComponent,
    BottomNavbarComponent,
    TopNavbarComponent,
    SidebarComponent,
    SettingsComponent,
    ExploreComponent,
    ProfileComponent,
    AdventureComponent,
    MyAdventuresComponent,
    NewAdventureComponent,
    //icons
    AdventureIcon,
    RulesIcon,
    MapsIcon,
    ExitIcon,
    BrokenAxeIcon,
    CogIcon,
    NotificationIcon,
    PersonIcon,
    TorchIcon,
    MasterIcon
  ]
})
export class OutOfSessionModule { }
