import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InSessionRoutingModule } from './in-session.routing.module';
import { InSessionComponent } from './in-session.component';
import { TagInputModule } from 'ngx-chips';
import { SessionComponent } from './session/session.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotesComponent } from './components/notes/notes.component';
import { FichaStepperComponent } from './ficha-stepper/ficha-stepper.component';
import { BasicInfoComponent } from './ficha-stepper/first-step/basic-info.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AttributesComponent } from './ficha-stepper/attributes-step/attributes.component';
import { ExpertiseComponent } from './ficha-stepper/third-step/expertise.component';
import { RaceStepComponent } from './ficha-stepper/race-step/race-step.component';
import { ClassStepComponent } from './ficha-stepper/class-step/class-step.component';
import { OriginAndAlignmentStepComponent } from './ficha-stepper/origin-and-alignment-step/origin-and-alignment-step.component';
import { AdventureService } from '../out-of-session/services/adventure.service';
import { NotesService } from './services/notes.service';
import { QuillModule } from 'ngx-quill'
import { DicesComponent } from './components/dices/dices.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { FichaViewerComponent } from './ficha-viewer/ficha-viewer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from '../interceptor';
import { StatusComponent } from './ficha-viewer/status/status.component';
import { ItensComponent } from './ficha-viewer/itens/itens.component';
import { PericiasComponent } from './ficha-viewer/pericias/pericias.component';
import { HabilidadesComponent } from './ficha-viewer/habilidades/habilidades.component';
import { XPManagerComponent } from './components/xp-manager/xp-manager.component';
import { FichaService } from '../out-of-session/services/ficha.service';
import { LevelUpComponent } from './components/level-up/level-up.component';

@NgModule({
  imports: [
    InSessionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TagInputModule,
    NgSelectModule,
    ColorPickerModule,
    QuillModule.forRoot()
  ],
  declarations: [
    InSessionComponent,
    SessionComponent,
    AsideMenuComponent,
    ChatComponent,
    NotesComponent,
    DicesComponent,
    FichaStepperComponent,
    BasicInfoComponent,
    AttributesComponent,
    ExpertiseComponent,
    RaceStepComponent,
    ClassStepComponent,
    OriginAndAlignmentStepComponent,
    FichaViewerComponent,
    HabilidadesComponent,
    StatusComponent,
    ItensComponent,
    PericiasComponent,
    XPManagerComponent,
    LevelUpComponent,
  ],
  providers: [
    AdventureService,
    NotesService,
    FichaService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ]
})
export class InSessionModule { }
