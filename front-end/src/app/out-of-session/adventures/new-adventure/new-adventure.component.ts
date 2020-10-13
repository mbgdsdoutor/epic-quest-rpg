import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-adventure',
  templateUrl: './new-adventure.component.html',
  styleUrls: ['./new-adventure.component.scss']
})

export class NewAdventureComponent implements OnInit {

  public form: FormGroup;
  players: string[] = []
  user: User = {
    id: 2,
    name: 'Matheus Braz', 
    email: 'mbgdsdoutor@gmail.com', 
    photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg', 
    description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.',
    friendList: [
      { id: 3, name: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
      { id: 4, name: 'Kirigaya Kazuto', email: 'kiritokun@gmail.com', photoUrl: 'https://pbs.twimg.com/profile_images/838602037956837376/VRsHEeFN_400x400.jpg', description: 'olá, meu nome é Kirito, e eu sou o legitimo espadachim negro.' },
      { id: 5, name: 'Taiga Asaki', email: 'tigresadebolso@gmail.com', photoUrl: 'https://cdn.myanimelist.net/r/360x360/images/characters/10/46644.jpg?s=0e4a4d7cb074814ce4206c0822843f7b', description: 'olá meu nome é Taiga e eu só jogo de anão.' },
      { id: 6, name: 'Leonardo Tavares', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },
      { id: 7, name: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.  Esta descrição é maior para fazer um teste de layout.' },
      { id: 8, name: 'Kirigaya Kazuto', email: 'kiritokun@gmail.com', photoUrl: 'https://pbs.twimg.com/profile_images/838602037956837376/VRsHEeFN_400x400.jpg', description: 'olá, meu nome é Kirito, e eu sou o legitimo espadachim negro. Esta descrição é maior para fazer um teste de layout.' },
      { id: 9, name: 'Taiga Asaki', email: 'tigresadebolso@gmail.com', photoUrl: 'https://cdn.myanimelist.net/r/360x360/images/characters/10/46644.jpg?s=0e4a4d7cb074814ce4206c0822843f7b', description: 'olá meu nome é Taiga e eu só jogo de anão.  Esta descrição é maior para fazer um teste de layout.' },
    ]
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarForm();
  }

  configurarForm() {
    const name = this.formBuilder.control(null, [Validators.required]);
    const description = this.formBuilder.control(null, [Validators.required]);
    const date = this.formBuilder.control(null, [Validators.required]);
    this.form = this.formBuilder.group({
      name,
      description,
      date
    });
  }
}
