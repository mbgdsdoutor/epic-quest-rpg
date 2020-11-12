import { User } from '../out-of-session/models/user';
import { AlignmentEnum } from '../shared/enums/alignment-enum';
import { AttributesEnum } from '../shared/enums/attributes-enum';
import { CategoryEnum } from '../shared/enums/category-enum';
import { Adventure } from '../shared/models/adventure';
import { Class } from '../shared/models/class';
import { Origem } from '../shared/models/origem';
import { Player } from '../shared/models/player';
import { Race } from '../shared/models/race';
import { Notification, NotificationStatus, NotificationType } from '../out-of-session/models/notification';
import { Pericia } from '../shared/models/pericia';

export const usersMock: User[] = [
  {
    id: 2,
    userName: 'Matheus Braz',
    email: 'mbgdsdoutor@gmail.com',
    photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg',
    description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.'
  },
  { id: 3, userName: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
  { id: 4, userName: 'Kirigaya Kazuto', email: 'kiritokun@gmail.com', photoUrl: 'https://pbs.twimg.com/profile_images/838602037956837376/VRsHEeFN_400x400.jpg', description: 'olá, meu nome é Kirito, e eu sou o legitimo espadachim negro.' },
  { id: 5, userName: 'Taiga Asaki', email: 'tigresadebolso@gmail.com', photoUrl: 'https://cdn.myanimelist.net/r/360x360/images/characters/10/46644.jpg?s=0e4a4d7cb074814ce4206c0822843f7b', description: 'olá meu nome é Taiga e eu só jogo de anão.' },
  { id: 6, userName: 'Leonardo Tavares', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },
  { id: 7, userName: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.  Esta descrição é maior para fazer um teste de layout.' },
  { id: 8, userName: 'Kirigaya Kazuto', email: 'kiritokun@gmail.com', photoUrl: 'https://pbs.twimg.com/profile_images/838602037956837376/VRsHEeFN_400x400.jpg', description: 'olá, meu nome é Kirito, e eu sou o legitimo espadachim negro. Esta descrição é maior para fazer um teste de layout.' },
  { id: 9, userName: 'Taiga Asaki', email: 'tigresadebolso@gmail.com', photoUrl: 'https://cdn.myanimelist.net/r/360x360/images/characters/10/46644.jpg?s=0e4a4d7cb074814ce4206c0822843f7b', description: 'olá meu nome é Taiga e eu só jogo de anão.  Esta descrição é maior para fazer um teste de layout.' },
];

export const adventuresMock: Adventure[] = [
  {
    id: 1, name: 'Trinity Wonder', photoUrl: 'https://pm1.narvii.com/6374/f49224bea7937903db1166396c554224b3361b8c_hq.jpg', description: 'Nós três que nos conhecemos através do tempo e espaço, inevitavelmente nunca pensamos sobre a existência um do outro... Um artista marcial, uma maga e uma cientista genial. Os ventos do destino une três personalidades, e trazem grandes mudanças ao mundo conhecido atualmente.',
    master: {
      id: 2,
      userName: 'Matheus Braz',
      email: 'mbgdsdoutor@gmail.com',
      photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg',
      description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.',
    },
    users: [{ id: 3, userName: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
    { id: 4, userName: 'Kirigaya Kazuto', email: 'kiritokun@gmail.com', photoUrl: 'https://pbs.twimg.com/profile_images/838602037956837376/VRsHEeFN_400x400.jpg', description: 'olá, meu nome é Kirito, e eu sou o legitimo espadachim negro.' },
    { id: 5, userName: 'Taiga Asaki', email: 'tigresadebolso@gmail.com', photoUrl: 'https://cdn.myanimelist.net/r/360x360/images/characters/10/46644.jpg?s=0e4a4d7cb074814ce4206c0822843f7b', description: 'olá meu nome é Taiga e eu só jogo de anão.' },
    { id: 6, userName: 'Leonardo Tavares', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },]
  },
  {
    id: 2, name: 'O Retorno do Mago', photoUrl: 'https://img.supermangas.site/img/animes/47504-large.jpg', description: 'O pior aluno da Academia Westroad e a vergonha da Família Blake. Uma nova alma entra no corpo sem vida de Fray Blake, o garoto que não conseguiu aguentar sua dolorosa vida e optou pela morte. O Grande Mago Lucas Trawman ganhou a chance de se vingar ao reencarnar no corpo do menino! Esse é o começo da nova aventura do Grande Mago que retornou após 4000 anos!',
    master: {
      id: 6,
      userName: 'Leonardo Tavares ',
      email: 'mbgdsdoutor@gmail.com',
      photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg',
      description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.',
    },
    users: [{ id: 3, userName: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
    { id: 4, userName: 'Kirigaya Kazuto', email: 'kiritokun@gmail.com', photoUrl: 'https://pbs.twimg.com/profile_images/838602037956837376/VRsHEeFN_400x400.jpg', description: 'olá, meu nome é Kirito, e eu sou o legitimo espadachim negro.' },
    { id: 5, userName: 'Taiga Asaki', email: 'tigresadebolso@gmail.com', photoUrl: 'https://cdn.myanimelist.net/r/360x360/images/characters/10/46644.jpg?s=0e4a4d7cb074814ce4206c0822843f7b', description: 'olá meu nome é Taiga e eu só jogo de anão.' },
    { id: 6, userName: 'Matheus Braz', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },]
  }
]

export const raceMock: Race = {
  id: 1,
  name: 'Elfo',
  strengthPoints: 0,
  wisdomPoints: 0,
  dexterityPoints: 2,
  constitutionPoints: -2,
  intelligencePoints: 4,
  charismaPoints: 0,
  freePoints: 0,
  displacement: 12,
  pericias: [{
    id: 1,
    name: 'Misticismo',
    description: 'mistico demais hehe',
    attribute: AttributesEnum.Charisma,
    onlyTrained: false,
    armorPenalty: false,
  }, {
    id: 2,
    name: 'Percepção',
    description: 'perceptivo demais hehe',
    attribute: AttributesEnum.Charisma,
    onlyTrained: false,
    armorPenalty: false,
  }],
  poderes: [
    {
      id: 1,
      name: 'Graça de Glórienn',
      description: 'Seu deslocamento é 12m (em vez de 9m).',
      category: CategoryEnum.Raca,
      requirement: null,
    }, {
      id: 2,
      name: 'Herança Feérica',
      description: 'Você recebe + 1 ponto de mana por nível.',
      category: CategoryEnum.Raca,
      requirement: null,
    }, {
      id: 3,
      name: 'Sentidos Élficos',
      description: 'Você recebe visão na penumbra e +2 em Misticismo e Percepção.',
      category: CategoryEnum.Raca,
      requirement: null,
    }],
}

export const classeMock: Class = {
  id: 1,
  name: 'Arcanista',
  initialLifePoints: 8,
  levelUpLifePoints: 2,
  initialManaPoints: 5,
  levelUpManaPoints: 2,
  pericias: [],
  arcanistWay: null,
  barbarianWay: null,
  bardWay: null,
}

export const origemMock: Origem = {
  id: 1,
  name: 'Cozinheiro',
  description: 'antes de se aventurar, cozinhava',
  items: [],
  pericias: [],
  poderes: [],
}

export const playerMock: Player = {
  id: 1,
  adventureId: 1,
  alignment: AlignmentEnum.Neutro,
  age: 20,
  origem: origemMock,
  displacement: 8,
  items: [],
  poderes: [],
  pericias: [],
  deus: null,
  tibar: 0,
  userId: 3,
  nivel: 1,
  name: 'Eric Han Bin',
  race: raceMock,
  class: classeMock,
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
  photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS62tMAHeaksBS-NGajA7EVlgB3bUShjU_egA&usqp=CAU'
}

export const fullAdventuresMock: Adventure[] = [
  {
    id: 1, name: 'Trinity Wonder', photoUrl: 'https://pm1.narvii.com/6374/f49224bea7937903db1166396c554224b3361b8c_hq.jpg', description: 'Nós três que nos conhecemos através do tempo e espaço, inevitavelmente nunca pensamos sobre a existência um do outro... Um artista marcial, uma maga e uma cientista genial. Os ventos do destino une três personalidades, e trazem grandes mudanças ao mundo conhecido atualmente.',
    master: {
      id: 2,
      userName: 'Matheus Braz',
      email: 'mbgdsdoutor@gmail.com',
      photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg',
      description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.',
    },
    users: [{ id: 3, userName: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
    { id: 6, userName: 'Leonardo Tavares', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },],
    players: [
      playerMock, playerMock, playerMock
    ]
  },
  {
    id: 2, name: 'O Retorno do Mago', photoUrl: 'https://img.supermangas.site/img/animes/47504-large.jpg', description: 'O pior aluno da Academia Westroad e a vergonha da Família Blake. Uma nova alma entra no corpo sem vida de Fray Blake, o garoto que não conseguiu aguentar sua dolorosa vida e optou pela morte. O Grande Mago Lucas Trawman ganhou a chance de se vingar ao reencarnar no corpo do menino! Esse é o começo da nova aventura do Grande Mago que retornou após 4000 anos!',
    master: {
      id: 6,
      userName: 'Leonardo Tavares ',
      email: 'mbgdsdoutor@gmail.com',
      photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg',
      description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.',
    },
    users: [{ id: 3, userName: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
    { id: 2, userName: 'Matheus Braz', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },],
    players: [
      playerMock,
      { ...playerMock, id: 2, userId: 2 },
      { ...playerMock, id: 3 }
    ]
  }
]

export const notificationsMock: Notification[] = [
  {
    id: 1,
    from: usersMock[0],
    to: usersMock[1],
    type: NotificationType.FriendList,
    status: NotificationStatus.Created
  },
  {
    id: 2,
    from: usersMock[2],
    to: usersMock[1],
    type: NotificationType.Adventure,
    status: NotificationStatus.Created,
    adventureName: 'Trinity Wonder',
  },
]

// export const fullAlignmentsMock = [];

export const FullPericiasMock: Pericia[] = [{
  id: 1,
  name: 'Acrobacia',
  description: 'Você consegue fazer proezas acrobáticas.',
  attribute: AttributesEnum.Dexterity,
  onlyTrained: false,
  armorPenalty: true,
}, {
  id: 2,
  name: 'Adestramento',
  description: 'Você sabe lidar com animais.',
  attribute: AttributesEnum.Charisma,
  onlyTrained: true,
  armorPenalty: false,
}, {
  id: 3,
  name: 'Atletismo',
  description: 'Esta perícia é utilizada para realizar façanhas atléticas, como escalar montanhas, cruzar rios e saltar sobre desfiladeiros.',
  attribute: AttributesEnum.Strength,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 4,
  name: 'Atuação',
  description: 'Você sabe fazer apresentações artísticas, incluindo música, dança e dramaturgia.',
  attribute: AttributesEnum.Charisma,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 5,
  name: 'Cavalgar',
  description: 'Você sabe conduzir animais de montaria, como cavalos, trobos e grifos. Ações simples não exigem testes — você pode encilhar, montar, cavalgar em terreno plano e desmontar automaticamente. Ações perigosas, entretanto, exigem testes da perícia.',
  attribute: AttributesEnum.Dexterity,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 6,
  name: 'Conhecimento',
  description: 'Você é um estudioso de assuntos gerais, como história e geografia.',
  attribute: AttributesEnum.Intelligence,
  onlyTrained: true,
  armorPenalty: false,
}, {
  id: 7,
  name: 'Cura',
  description: 'Você sabe tratar ferimentos, doenças e venenos.',
  attribute: AttributesEnum.Wisdom,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 8,
  name: 'Diplomacia',
  description: 'Você usa lábia e argumentação para convencer outras pessoas.',
  attribute: AttributesEnum.Charisma,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 9,
  name: 'Enganação',
  description: 'Você engana pessoas com mentiras, falsificações e disfarces.',
  attribute: AttributesEnum.Charisma,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 10,
  name: 'Fortitude',
  description: 'Esta perícia mede seu vigor e resistência física.',
  attribute: AttributesEnum.Constitution,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 11,
  name: 'Furtividade',
  description: 'Você pode se esconder nas sombras, andar sem fazer barulho, seguir alguém sem ser notado etc.',
  attribute: AttributesEnum.Dexterity,
  onlyTrained: false,
  armorPenalty: true,
}, {
  id: 12,
  name: 'Guerra',
  description: 'Você foi educado em tática, estratégia e logística.',
  attribute: AttributesEnum.Intelligence,
  onlyTrained: true,
  armorPenalty: false,
}, {
  id: 13,
  name: 'Iniciativa',
  description: 'Esta perícia determina sua velocidade de reação em situações de perigo.',
  attribute: AttributesEnum.Dexterity,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 14,
  name: 'Intimidação',
  description: 'Você pode assustar ou coagir outras pessoas.',
  attribute: AttributesEnum.Charisma,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 15,
  name: 'Intuição',
  description: 'Esta perícia mede seu “sexto sentido”.',
  attribute: AttributesEnum.Wisdom,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 16,
  name: 'Investigação',
  description: 'Você sabe como descobrir pistas e informações.',
  attribute: AttributesEnum.Intelligence,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 17,
  name: 'Jogatina',
  description: 'Você sabe ganhar dinheiro com jogos de azar.',
  attribute: AttributesEnum.Charisma,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 18,
  name: 'Ladinagem',
  description: 'Com mãos leves e mente suja, você sabe exercer as tarefas de um ladrão.',
  attribute: AttributesEnum.Dexterity,
  onlyTrained: true,
  armorPenalty: true,
}, {
  id: 19,
  name: 'Luta',
  description: 'Esta perícia mede sua capacidade de luta corpo a corpo, seja com armas brancas, seja desarmado.',
  attribute: AttributesEnum.Strength,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 20,
  name: 'Misticismo',
  description: 'Esta perícia envolve o conhecimento de magias, itens mágicos e fenômenos sobrenaturais.',
  attribute: AttributesEnum.Intelligence,
  onlyTrained: true,
  armorPenalty: false,
}, {
  id: 21,
  name: 'Nobreza',
  description: 'Você recebeu a educação de um nobre. Sabe desde supervisionar uma colheita a se portar em um baile.',
  attribute: AttributesEnum.Intelligence,
  onlyTrained: true,
  armorPenalty: false,
}, {
  id: 22,
  name: 'Ofício',
  description: 'Ofício na verdade são várias perícias diferentes. Cada uma permite fabricar itens de uma categoria: Armeiro (Armas, armaduras e escudos), Artesanato (Itens gerais), Alquimia (Itens da categoria Alquimia), Alfaiate (Itens da categoria Vestuário), Culinária (Itens da categoria Alimentação). Você pode inventar outros tipos de Ofício, como alvenaria, carpintaria, joalheria... Isso inclui profissões (fazendeiro, pescador, estalajadeiro, escriba...) e artes (escultura, pintura...). Nesses casos, converse com o mestre para determinar que usos a perícia terá. ',
  attribute: AttributesEnum.Intelligence,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 23,
  name: 'Percepção',
  description: 'Esta perícia é utilizada para perceber coisas através dos sentidos.',
  attribute: AttributesEnum.Wisdom,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 24,
  name: 'Pilotagem',
  description: 'Você sabe operar veículos como carroças, barcose balões.',
  attribute: AttributesEnum.Dexterity,
  onlyTrained: true,
  armorPenalty: false,
}, {
  id: 25,
  name: 'Pontaria',
  description: 'Esta perícia mede sua capacidade de mira, seja com armas de arremesso, seja com armas de disparo.',
  attribute: AttributesEnum.Dexterity,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 26,
  name: 'Reflexos',
  description: 'Esta perícia mede sua capacidade de evitar ameaças que exigem reação rápida.',
  attribute: AttributesEnum.Dexterity,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 27,
  name: 'Religião',
  description: 'Você possui conhecimento sobre os deuses e as religiões de Arton.',
  attribute: AttributesEnum.Wisdom,
  onlyTrained: true,
  armorPenalty: false,
}, {
  id: 28,
  name: 'Sobrevivência',
  description: 'Você pode se guiar nos ermos e reconhecer e evitar perigos da natureza.',
  attribute: AttributesEnum.Wisdom,
  onlyTrained: false,
  armorPenalty: false,
}, {
  id: 29,
  name: 'Vontade',
  description: 'Esta perícia envolve sua concentração e força de vontade.',
  attribute: AttributesEnum.Wisdom,
  onlyTrained: false,
  armorPenalty: false,
}];

export const FullOrigensMock: Origem[] = [{
  id: 1,
  name: 'Acólito',
  description: 'Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.',
  items: [{
    name: 'Símbolo Sagrado',
    description: '',
    consumable: false,
    value: 50,
  }, {
    name: 'Traje de Sacerdote',
    description: '',
    consumable: false,
    value: 50,
  }],
  pericias: [],
  poderes: [],
}];


export const fullRacesMock: Race = {
  id: 1,
  name: 'Elfo',
  strengthPoints: 0,
  wisdomPoints: 0,
  dexterityPoints: 2,
  constitutionPoints: -2,
  intelligencePoints: 4,
  charismaPoints: 0,
  freePoints: 0,
  displacement: 12,
  pericias: [{
    id: 1,
    name: 'Misticismo',
    description: 'mistico demais hehe',
    attribute: AttributesEnum.Charisma,
    onlyTrained: false,
    armorPenalty: false,
  }, {
    id: 2,
    name: 'Percepção',
    description: 'perceptivo demais hehe',
    attribute: AttributesEnum.Charisma,
    onlyTrained: false,
    armorPenalty: false,
  }],
  poderes: [
    {
      id: 1,
      name: 'Graça de Glórienn',
      description: 'Seu deslocamento é 12m (em vez de 9m).',
      category: CategoryEnum.Raca,
      requirement: null,
    }, {
      id: 2,
      name: 'Herança Feérica',
      description: 'Você recebe + 1 ponto de mana por nível.',
      category: CategoryEnum.Raca,
      requirement: null,
    }, {
      id: 3,
      name: 'Sentidos Élficos',
      description: 'Você recebe visão na penumbra e +2 em Misticismo e Percepção.',
      category: CategoryEnum.Raca,
      requirement: null,
    }],
}


export const fullClassesMock: Class = {
  id: 1,
  name: 'Arcanista',
  initialLifePoints: 8,
  levelUpLifePoints: 2,
  initialManaPoints: 5,
  levelUpManaPoints: 2,
  pericias: [],
  arcanistWay: null,
  barbarianWay: null,
  bardWay: null,
}