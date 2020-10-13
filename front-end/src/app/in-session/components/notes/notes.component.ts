import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  @ViewChild('notes', { static: false }) notes: ElementRef;
  
  messages = [{
    photo: 'https://ogimg.infoglobo.com.br/cultura/24073513-a35-a90/FT1086A/652/display-mesa-dora-aventureira-e-sua-turma-40cm-7unds-D_NQ_NP_888621-MLB20826355426_072016-F.jpg',
    message: 'Oi oi teste chat'
  },{
    photo: 'https://ogimg.infoglobo.com.br/cultura/24073513-a35-a90/FT1086A/652/display-mesa-dora-aventureira-e-sua-turma-40cm-7unds-D_NQ_NP_888621-MLB20826355426_072016-F.jpg',
    message: 'só tem eu no chat??'
  },
  {
    photo: 'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/af/Bardo_OriginalLoading.jpg/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/308/window-height/308?cb=20150406035643&path-prefix=pt-br',
    message: 'tem eu tbm!!'
  },]

  constructor() { }

  hideNotes() {
    this.notes.nativeElement.classList.remove('notes--open')
  }
}
