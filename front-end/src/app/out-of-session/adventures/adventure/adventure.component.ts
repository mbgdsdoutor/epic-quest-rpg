import { Component, OnInit } from '@angular/core';
import { Adventure } from '../../../shared/models/adventure';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})

export class AdventureComponent implements OnInit {

  adventures: Adventure[] = [
    { id: 1, name: 'Trinity Wonder', photoUrl: 'https://pm1.narvii.com/6374/f49224bea7937903db1166396c554224b3361b8c_hq.jpg', description: 'Nós três que nos conhecemos através do tempo e espaço, inevitavelmente nunca pensamos sobre a existência um do outro... Um artista marcial, uma maga e uma cientista genial. Os ventos do destino une três personalidades, e trazem grandes mudanças ao mundo conhecido atualmente.',
      master: {
        id: 2,
        name: 'Matheus Braz', 
        email: 'mbgdsdoutor@gmail.com', 
        photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg', 
        description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.',
      },
      users: [{ id: 3, name: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
      { id: 4, name: 'Kirigaya Kazuto', email: 'kiritokun@gmail.com', photoUrl: 'https://pbs.twimg.com/profile_images/838602037956837376/VRsHEeFN_400x400.jpg', description: 'olá, meu nome é Kirito, e eu sou o legitimo espadachim negro.' },
      { id: 5, name: 'Taiga Asaki', email: 'tigresadebolso@gmail.com', photoUrl: 'https://cdn.myanimelist.net/r/360x360/images/characters/10/46644.jpg?s=0e4a4d7cb074814ce4206c0822843f7b', description: 'olá meu nome é Taiga e eu só jogo de anão.' },
      { id: 6, name: 'Leonardo Tavares', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },]
    },
    {id: 2, name: 'O Retorno do Mago', photoUrl: 'https://img.supermangas.site/img/animes/47504-large.jpg', description: 'O pior aluno da Academia Westroad e a vergonha da Família Blake. Uma nova alma entra no corpo sem vida de Fray Blake, o garoto que não conseguiu aguentar sua dolorosa vida e optou pela morte. O Grande Mago Lucas Trawman ganhou a chance de se vingar ao reencarnar no corpo do menino! Esse é o começo da nova aventura do Grande Mago que retornou após 4000 anos!',
      master: {
        id: 6,
        name: 'Leonardo Tavares ', 
        email: 'mbgdsdoutor@gmail.com', 
        photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg', 
        description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.',
      },
      users: [{ id: 3, name: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
      { id: 4, name: 'Kirigaya Kazuto', email: 'kiritokun@gmail.com', photoUrl: 'https://pbs.twimg.com/profile_images/838602037956837376/VRsHEeFN_400x400.jpg', description: 'olá, meu nome é Kirito, e eu sou o legitimo espadachim negro.' },
      { id: 5, name: 'Taiga Asaki', email: 'tigresadebolso@gmail.com', photoUrl: 'https://cdn.myanimelist.net/r/360x360/images/characters/10/46644.jpg?s=0e4a4d7cb074814ce4206c0822843f7b', description: 'olá meu nome é Taiga e eu só jogo de anão.' },
      { id: 6, name: 'Matheus Braz', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },]
    }
  ]
  searchedAdventures: Adventure[] = []

  constructor() { }

  ngOnInit() {
    this.searchedAdventures = this.adventures;
  }

  handleSearchUser(event): void {
    const searchText = event.currentTarget.value
    if(searchText.length > 0) {
      this.searchedAdventures = this.adventures.filter(adventure => {
        return adventure.name.toLowerCase().includes(searchText.toLowerCase()) || adventure.master.name.toLowerCase().includes(searchText.toLowerCase())
      })
    } else {
      this.searchedAdventures = this.adventures;
    }
  }
}
