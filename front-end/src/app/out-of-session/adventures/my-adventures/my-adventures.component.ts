import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { Adventure } from '../../../shared/models/adventure';

@Component({
  selector: 'app-my-adventures',
  templateUrl: './my-adventures.component.html',
  styleUrls: ['./my-adventures.component.scss']
})

export class MyAdventuresComponent implements OnInit {

  user: any = {
    id: 2
  }

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
      { id: 6, name: 'Leonardo Tavares', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },],
      players: [
        {id: 1, 
        userId: 3,
        nivel: 1, 
        name: 'Eric Han Bin', 
        race: { name: 'Elfo' },
        classe: { id: 3, name: 'Barbaro' },
        lifePoints: 8, 
        totalLifePoints: 8, 
        manaPoints: 5, 
        totalManaPoints: 5, 
        caPoints: 10, 
        strength: 12,
        wisdom: 10,
        dexterity: 14,
        constitution: 9,
        intelligence: 11,
        charisma: 10, 
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS62tMAHeaksBS-NGajA7EVlgB3bUShjU_egA&usqp=CAU' },
        {id: 2, nivel: 1, userId: 3, name: 'Bandalf', race: { name: 'Humano' }, classe: { id: 1, name: 'Arcanista' }, lifePoints: 7, totalLifePoints: 12, manaPoints: 5, totalManaPoints: 5, photoUrl: 'https://i.pinimg.com/originals/81/32/9a/81329a081a18d9f3e6a90928c1496a21.jpg' },
        {id: 3, nivel: 1, userId: 3, name: 'Dora', race: { name: 'Anão' }, classe: { id: 5, name: 'Druida' }, lifePoints: 2, totalLifePoints: 8, manaPoints: 2, totalManaPoints: 5, photoUrl: 'https://ogimg.infoglobo.com.br/cultura/24073513-a35-a90/FT1086A/652/display-mesa-dora-aventureira-e-sua-turma-40cm-7unds-D_NQ_NP_888621-MLB20826355426_072016-F.jpg' }
      ]
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
      { id: 6, name: 'Matheus Braz', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },],
      players: [
        {id: 1, 
        userId: 3,
        nivel: 1,
        name: 'Erza Scarlet', 
        race: { name: 'Elfo' },
        classe: { id: 2, name: 'Guerreiro' },
        lifePoints: 8, 
        totalLifePoints: 8, 
        manaPoints: 5, 
        totalManaPoints: 5, 
        caPoints: 10, 
        strength: 12,
        wisdom: 10,
        dexterity: 14,
        constitution: 9,
        intelligence: 11,
        charisma: 10, 
        photoUrl: 'https://pm1.narvii.com/5830/6de76f2b61f33d5a1ab9a41bb47f647aca824b2f_hq.jpg' },
        {id: 2, nivel: 1, userId: 2, name: 'Oliver Hawk', race: { name: 'Humano' }, classe: { id: 4, name: 'Bardo' }, lifePoints: 7, totalLifePoints: 12, manaPoints: 5, totalManaPoints: 5, caPoints: 10, strength: 12, wisdom: 10, dexterity: 14, constitution: 9, intelligence: 11, charisma: 10,  photoUrl: 'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/af/Bardo_OriginalLoading.jpg/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/308/window-height/308?cb=20150406035643&path-prefix=pt-br' },
        {id: 3, nivel: 1, userId: 3, name: 'Dora', race: { name: 'Anão' }, classe: { id: 5, name: 'Druida' }, lifePoints: 2, totalLifePoints: 8, manaPoints: 2, totalManaPoints: 5, photoUrl: 'https://ogimg.infoglobo.com.br/cultura/24073513-a35-a90/FT1086A/652/display-mesa-dora-aventureira-e-sua-turma-40cm-7unds-D_NQ_NP_888621-MLB20826355426_072016-F.jpg' }
      ]
    }
  ]
  searchedAdventures: Adventure[] = []

  constructor(private loadingService: LoadingService) { }

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
