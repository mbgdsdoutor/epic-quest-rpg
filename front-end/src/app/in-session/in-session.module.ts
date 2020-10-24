import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InSessionRoutingModule } from './in-session.routing.module';
import { InSessionComponent } from './in-session.component';
import { TagInputModule } from 'ngx-chips';
import { SessionComponent } from './session/session.component';
import { CombatComponent } from './combat/combat.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotesComponent } from './components/notes/notes.component';
import { FichaStepperComponent } from './ficha-stepper/ficha-stepper.component';
import { BasicInfoComponent } from './ficha-stepper/first-step/basic-info.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    InSessionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TagInputModule,
    NgSelectModule,
  ],
  declarations: [
    InSessionComponent,
    SessionComponent,
    CombatComponent,
    AsideMenuComponent,
    ChatComponent,
    NotesComponent,
    FichaStepperComponent,
    BasicInfoComponent,
  ]
})
export class InSessionModule { }
