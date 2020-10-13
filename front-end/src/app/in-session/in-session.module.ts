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

@NgModule({
  imports: [
    InSessionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TagInputModule,
  ],
  declarations: [
    InSessionComponent,
    SessionComponent,
    CombatComponent,
    AsideMenuComponent,
    ChatComponent,
    NotesComponent,
  ]
})
export class InSessionModule { }
