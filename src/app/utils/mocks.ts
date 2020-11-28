import { User } from '../out-of-session/models/user';
import { AlignmentEnum } from '../shared/enums/alignment-enum';
import { AttributesEnum } from '../shared/enums/attributes-enum';
import { CategoryEnum } from '../shared/enums/category-enum';
import { Adventure } from '../shared/models/adventure';
import { Class, ProficienciasEnum } from '../shared/models/class';
import { Origem } from '../shared/models/origem';
import { Player } from '../shared/models/player';
import { Race } from '../shared/models/race';
import { Notification, NotificationStatus, NotificationType } from '../out-of-session/models/notification';
import { Pericia } from '../shared/models/pericia';
import { Poder } from '../shared/models/poder';
import { Note } from '../in-session/components/notes/note';

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
  itemChooseOne: false,
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
      playerMock,
      { ...playerMock, id: 2, name: 'Tobias' },
      { ...playerMock, id: 3, name: 'Tavares' },
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
      { ...playerMock, id: 2, userId: 2, name: 'Doutor' },
      { ...playerMock, id: 3, name: 'Kirito' }
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


export const fullPericiasMock: Pericia[] = [{
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

export const fullPoderesMock: Poder[] = [
  {
    id: 1,
    name: 'Acuidade com Arma',
    description: 'Quando usa uma arma leve de corpo a corpo ou uma arma de arremesso, você pode usar seu modificador de Destreza em vez de Força nos testes de ataque e rolagens de dano. Pré-requisito: Des 13. ',
    category: CategoryEnum.Combate,
    requirement: {
      dexterityPoints: 13,
    },
  }, {
    id: 2,
    name: 'Arma Secundária Grande',
    description: 'Você pode usar duas armas de uma mão com o poder Estilo de Duas Armas. Pré-requisito: Estilo de Duas Armas.',
    category: CategoryEnum.Combate,
    requirement: {
      poderes: [999]
    },
  }, {
    id: 3,
    name: 'Arremesso Potente',
    description: 'Quando usa uma arma de arremesso, você pode usar seu modificador de Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso. Pré-requisito: For 13, Estilo de Arremesso.',
    category: CategoryEnum.Combate,
    requirement: {
      strengthPoints: 13,
      poderes: [998]
    },
  }, {
    id: 4,
    name: 'Ataque Pesado',
    description: 'Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra). Pré-requisito: Estilo de Duas Mãos.',
    category: CategoryEnum.Combate,
    requirement: {
      strengthPoints: 13,
      poderes: [998]
    },
  }, {
    id: 997,
    name: 'Estilo de Duas Mãos',
    description: 'Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves. Pré-requisito: For 15, Treinado em Luta.',
    category: CategoryEnum.Combate,
    requirement: {
      strengthPoints: 15,
      pericias: fullPericiasMock.filter(p => p.name === 'Luta')
    }
  },

  {
    id: 998,
    name: 'Estilo de Arremesso',
    description: 'Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Pré-requisito: treinado em Pontaria.',
    category: CategoryEnum.Combate,
    requirement: {
      id: 1,
      pericias: fullPericiasMock.filter(p => p.name === 'Pontaria')
    }
  }, {
    id: 999,
    name: 'Estilo de Duas Armas',
    description: 'Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação ataque, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em ambos os testes de ataque. Se você possuir a habilidade Ambidestria, não sofre essa penalidade. Pré-requisito: Des 15, Treinado em Luta.',
    category: CategoryEnum.Combate,
    requirement: {
      id: 1,
      dexterityPoints: 15,
      pericias: fullPericiasMock.filter(p => p.name === 'Luta')
    },
  },
]

export const fullOrigensMock: Origem[] = [{
  id: 1,
  name: 'Acólito',
  description: 'Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.',
  itemChooseOne: false,
  items: [{
    name: 'Símbolo Sagrado',
    description: 'Um item que representa sua estadia na Igreja.',
    consumable: false,
    value: 50,
  }, {
    name: 'Traje de Sacerdote',
    description: 'Traje usado pelos sacerdotes da Igreja.',
    consumable: false,
    value: 50,
  }],
  pericias: fullPericiasMock.filter(p => p.name === 'Cura' || p.name === 'Religião' || p.name === 'Vontade'),
  poderes: [
    {
      id: 1,
      name: 'Membro da Igreja',
      category: CategoryEnum.Origem,
      description: 'Você consegue hospedagem e informação em aliados.',
      requirement: null
    }, {
      id: 2,
      name: 'Curandeiro',
      category: CategoryEnum.Destino,
      description: 'Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD (2d6 com um resultado 20, 3d6 com um resultado 25 e assim por diante). Você só pode usar este poder uma vez por dia numa mesma criatura. Pré-requisitos: Sab 13, treinado em Cura.',
      requirement: {
        strengthPoints: 0,
        wisdomPoints: 13,
        dexterityPoints: 0,
        constitutionPoints: 0,
        intelligencePoints: 0,
        charismaPoints: 0,
        poderes: [],
        pericias: [{
          id: 7,
          name: 'Cura',
          description: 'Você sabe tratar ferimentos, doenças e venenos.',
          attribute: AttributesEnum.Wisdom,
          onlyTrained: false,
          armorPenalty: false,
        }],
        deus: null
      }
    }, {
      id: 3,
      name: 'Vontade de Ferro',
      category: CategoryEnum.Destino,
      description: 'Você recebe +1 PM para cada dois níveis de personagem e +2 em Vontade. ',
      requirement: {
        strengthPoints: 0,
        wisdomPoints: 13,
        dexterityPoints: 0,
        constitutionPoints: 0,
        intelligencePoints: 0,
        charismaPoints: 0,
        poderes: [],
        pericias: [],
        deus: null
      }
    }
  ],
}, {
  id: 2,
  name: 'Amigo dos Animais',
  description: 'Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete de Namalkah ou mesmo tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial ou filhote de monstro exótico seria destinado a você.',
  itemChooseOne: true,
  items: [{
    name: 'Cão de Guarda',
    description: '',
    consumable: false,
    value: 50,
  }, {
    name: 'Cavalo',
    description: '',
    consumable: false,
    value: 50,
  }, {
    name: 'Pônei',
    description: '',
    consumable: false,
    value: 50,
  }],
  pericias: fullPericiasMock.filter(p => p.name === 'Adestramento' || p.name === 'Cavalgar'),
  poderes: [
    {
      id: 4,
      name: 'Amigo Especial',
      category: CategoryEnum.Origem,
      description: 'Animais comuns são amistosos em relação a você. Mesmo que não seja um devoto de Allihanna, pássaros e outros pequenos animais sempre se aproximam sem receio. Além disso, caso possua um aliado animal, ele pertence a uma espécie exótica e impressionante, sempre atraindo atenção. ',
      requirement: null
    }, {
      id: 5,
      name: 'Parceiro Animal',
      category: CategoryEnum.Destino,
      description: 'Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Escolha os detalhes dele, como nome, aparência e personalidade. Em termos de jogo, é um aliado iniciante de um tipo a sua escolha (veja a página XX). O parceiro obedece às suas ordens e se arrisca para ajudá-lo. Entretanto, se for maltratado, pode parar de segui-lo (de acordo com o mestre). Se perder seu parceiro, você recebe outro no início da próxima aventura.',
      requirement: {
        strengthPoints: 0,
        wisdomPoints: 0,
        dexterityPoints: 0,
        constitutionPoints: 0,
        intelligencePoints: 0,
        charismaPoints: 0,
        poderes: [],
        pericias: [{
          id: 2,
          name: 'Adestramento',
          description: 'Você sabe lidar com animais.',
          attribute: AttributesEnum.Charisma,
          onlyTrained: true,
          armorPenalty: false,
        }],
        deus: null
      }
    }
  ],
}];

export const alignmentMocks = [
  { name: AlignmentEnum.CaoticoBondoso, description: 'São espíritos livres que promovem o bem, mas preferem seguir seus próprios instintos e convicções, em vez de confiar em regras. Não acham errado mentir, trapacear e roubar para trazer bem-estar e alegria a outros. Também se preocupam em proteger a liberdade alheia, muitas vezes combatendo tiranos. Diante de uma criança roubando pão, ajuda a encobrir a fuga da criança. Pode até orientá-la a roubar de comerciantes ricos e inescrupulosos e também dividir seu roubo com outros famintos.' },
  { name: AlignmentEnum.CaoticoMaligno, description: 'Diferente de alguém que apenas não se importa com outros, estes monstros são verdadeiramente cruéis, tirando prazer do sofrimento alheio. Torturam e matam por diversão ou necessidade perversa. São brutais, violentos e imprevisíveis, capazes de qualquer coisa. Por todos estes motivos, é quase impossível que consigam viver em sociedade — você não encontra um destes andando pelas ruas com frequência. Têm dificuldade em fazer planos e só trabalham em equipe quando obrigados por força ou intimidação. Mataria a criança. E o mercador. E quem mais estivesse por perto. E comeria, com pão.' },
  { name: AlignmentEnum.CaoticoNeutro, description: 'Fazem o que bem entendem, quando bem entendem, sem se importar com o que outros pensam. Valorizam a própria liberdade, mas sem preocupação ou respeito pela liberdade dos outros. Embora não aceitem autoridade, também não lutarão contra ela, exceto quando essa autoridade tenta impedi-los de fazer algo. São impacientes e imprevisíveis, até parecem loucos, mas quase nunca decidem fazer algo que traga prejuízo ou dano para si mesmos. Diante de uma criança roubando pão, faz o que parecer mais divertido. Talvez ajude na fuga da criança ou aproveite a distração para pegar seu próprio pedaço.' },
  { name: AlignmentEnum.LealBondoso, description: 'Estas pessoas fazem o que é esperado de uma pessoa justa, respeitando a lei e sacrificando-se para ajudar os necessitados. Cumprem suas promessas e dizem a verdade. Quando não assumem a liderança, são fiéis e devotados a seus comandantes. São intolerantes com o mal; mesmo sendo capazes de perdão e compaixão, acreditam que todo crime precisa ser punido. Este é o alinhamento dos paladinos. Diante de uma criança faminta roubando um pedaço de pão, vai explicar que roubar é errado, comprar comida para ela e sua família, então levá-la até um guarda da milícia.' },
  { name: AlignmentEnum.LealMaligno, description: 'Estes vilões acreditam que ordem, tradições e códigos de conduta são mais importantes que liberdade, dignidade e a vida — especialmente de outros.Podem estar presos a tabus, códigos de honra, devoções a deuses ou temor por maldições.Seguem leis pessoais ou impostas por líderes, sentindo- se seguros e confortáveis ao fazê - lo, mesmo causando sofrimento alheio.São metódicos e organizados. Muitos respeitam regras de combate e cumprem a palavra, mesmo frente a heróis inimigos. Diante da criança faminta roubando pão, trataria de castigar o pequeno ladrão ali mesmo ou entregá - lo à milícia para receber a punição mais severa.' },
  { name: AlignmentEnum.LealNeutro, description: 'Pessoas metódicas e disciplinadas, que obedecem às leis e cumprem suas promessas a qualquer custo — pouco importando quem é beneficiado ou prejudicado. Alguns adotam uma disciplina mais pessoal, enquanto outros tentam impor suas normas a todos ao redor. Sua sinceridade pode ser dura; dizem o que pensam e não mentem, mesmo quando a verdade pode magoar ou prejudicar alguém. Diante de uma criança faminta roubando pão, vai impedir o roubo e avisar a milícia ou levar a criança às autoridades.' },
  { name: AlignmentEnum.Neutro, description: 'Indivíduos com este alinhamento costumam ser indiferentes, fracos em suas convicções, sem grandes preocupações morais ou éticas. Ou então lutam ativamente pelo equilíbrio entre bem, mal, lei e caos, já que um não existe sem o outro. Usam simples bom senso para tomar suas decisões e no geral fazem aquilo que parece ser uma boa ideia. Preferem estar com pessoas leais e bondosas; é sempre melhor viver com gente sincera e generosa, em vez de alguém que tenta tirar vantagem de você. Diante da criança que rouba pão, uma pessoa verdadeiramente neutra em geral não se envolve, a menos que tenha alguma ligação pessoal com a criança ou o mercador. Certas criaturas — incluindo os animais — não possuem nenhuma moral ou ética. Não sabem a diferença entre certo e errado. Agem seguindo seu instinto ou programação, sem a capacidade de fazer escolhas reais. Um gorlogg e um colosso da Supremacia podem ser perigosos, mas não malignos; apenas fazem aquilo que foram criados para fazer. Estas criaturas também são consideradas neutras.' },
  { name: AlignmentEnum.NeutroBondoso, description: 'São pessoas de bom coração, que sentem prazer e satisfação pessoal com a felicidade de outros. Colaboram com as autoridades, mas não se sentem obrigadas a fazê-lo — acham que ajudar o próximo é mais importante que seguir ordens ou leis. Diante de uma criança faminta roubando um pedaço de pão, ajuda tanto a criança quanto o mercador roubado. Não tentará punir a criança (talvez apenas dar-lhe um bom susto).' },
  { name: AlignmentEnum.NeutroMaligno, description: 'São egoístas e mesquinhos, colocando a si mesmos sempre em primeiro lugar. Pegam o que querem, pouco importando quem precisam roubar ou matar. Quando fazem algum tipo de aliança, é apenas para tirar vantagem do parceiro e traí-lo no momento oportuno. Adotam regras para quebrá-las em seu próprio benefício no minuto seguinte. Diante da criança roubando pão, ameaça entregá-la à milícia se não obedecer às suas ordens. Pode até chantagear seus pais, tomando tudo que possuem.' },
]

export const fullRacesMock: Race[] = [{
  id: 2,
  name: 'Elfo',
  ageMultiplier: 5,
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
}, {
  id: 1,
  name: 'Humano',
  ageMultiplier: 1,
  strengthPoints: 0,
  wisdomPoints: 0,
  dexterityPoints: 0,
  constitutionPoints: 0,
  intelligencePoints: 0,
  charismaPoints: 0,
  freePoints: 0,
  displacement: 9,
  pericias: [],
  poderes: [{
    id: 1,
    name: '+2 em Três Atributos Diferentes',
    description: 'Filhos de Valkaria, Deusa da Ambição, humanos podem se destacar em qualquer caminho que escolham.',
    category: CategoryEnum.Raca,
    requirement: null,
  }, {
    id: 2,
    name: 'Versátil',
    description: ' Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral a sua escolha.',
    category: CategoryEnum.Raca,
    requirement: null,
  }],
}, {
  id: 3,
  name: 'Anão',
  ageMultiplier: 2,
  strengthPoints: 0,
  wisdomPoints: 2,
  dexterityPoints: -2,
  constitutionPoints: 4,
  intelligencePoints: 0,
  charismaPoints: 0,
  freePoints: 0,
  displacement: 6,
  pericias: [],
  poderes: [
    {
      id: 1,
      name: 'Devagar e Sempre',
      description: 'Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.',
      category: CategoryEnum.Raca,
      requirement: null,
    }, {
      id: 2,
      name: 'Duro como Pedra',
      description: 'Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.',
      category: CategoryEnum.Raca,
      requirement: null,
    }, {
      id: 3,
      name: 'Tradição de Heredrimm',
      description: ' Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.',
      category: CategoryEnum.Raca,
      requirement: null,
    }],
}]

export const notesMock: Note[] = [{
  id: 1,
  title: 'Observações do mestre sobre a missão',
  content: 'O mestre deu muita enfâse na funcionária da taverna. Pode ser uma pista para começarmos a investigação.',
  userId: 2,
  sharedUsersIds: []
}, {
  id: 1,
  title: 'Meu Diário - Dia 01',
  content: 'O dia começou tranquilo.',
  userId: 2,
  sharedUsersIds: []
}, {
  id: 3,
  title: 'Carta do Rei Artur',
  content: '<h2><u>Carta do Rei Artur</u></h2><p><br></p><p><span class="ql-font-monospace">Olá, bravos guerreiros. Gostaria de solicitar sua ajuda, pois estou ciente de seus feitos recentes, e tenho muita fé que serão capazes de concluir o que tenho pra pedir. Segue meus pedidos:</span></p><p><br></p><ol><li><span class="ql-font-monospace">Entrem na "Dungeon da Noite"</span></li><li><span class="ql-font-monospace">Encontrem Erick, meu fiel cavaleiro que se perdeu na mesma</span></li><li><span class="ql-font-monospace">Resgatem e retornem com Erick em segurança</span></li></ol>',
  userId: 6,
  sharedUsersIds: [2, 3]
}]

export const fullClassesMock: Class[] = [{
  id: 1,
  name: 'Arcanista',
  initialLifePoints: 8,
  levelUpLifePoints: 2,
  initialManaPoints: 6,
  levelUpManaPoints: 6,
  pericias: fullPericiasMock.filter(p => p.name === 'Misticismo' || p.name === 'Vontade'),
  periciasChoose: [{ quantity: 1, pericias: fullPericiasMock.filter(p => p.name === 'Conhecimento' || p.name === 'Iniciativa' || p.name === 'Ofício' || p.name === 'Percepção') }],
  arcanistWay: null,
  barbarianWay: null,
  bardWay: null,
}, {
  id: 2,
  name: 'Bárbaro',
  initialLifePoints: 24,
  levelUpLifePoints: 6,
  initialManaPoints: 3,
  levelUpManaPoints: 3,
  pericias: fullPericiasMock.filter(p => p.name === 'Fortitude' || p.name === 'Luta'),
  periciasChoose: [{ quantity: 4, pericias: fullPericiasMock.filter(p => p.name === 'Adestramento' || p.name === 'Atletismo' || p.name === 'Cavalgar' || p.name === 'Iniciativa' || p.name === 'Intimidação' || p.name === 'Ofício' || p.name === 'Percepção' || p.name === 'Pontaria' || p.name === 'Sobrevivência' || p.name === 'Vontade') }],
  proficiencias: [ProficienciasEnum.ArmasMarciais, ProficienciasEnum.Escudos],
  arcanistWay: null,
  barbarianWay: null,
  bardWay: null,
}, {
  id: 3,
  name: 'Bardo',
  initialLifePoints: 12,
  levelUpLifePoints: 3,
  initialManaPoints: 4,
  levelUpManaPoints: 4,
  pericias: fullPericiasMock.filter(p => p.name === 'Atuação' || p.name === 'Reflexos'),
  periciasChoose: [{ quantity: 6, pericias: fullPericiasMock.filter(p => p.name === 'Acrobacia' || p.name === 'Cavalgar' || p.name === 'Conhecimento' || p.name === 'Diplomacia' || p.name === 'Enganação' || p.name === 'Furtividade' || p.name === 'Iniciativa' || p.name === 'Intuição' || p.name === 'Investigação' || p.name === 'Jogatina' || p.name === 'Ladinagem' || p.name === 'Luta' || p.name === 'Misticismo' || p.name === 'Nobreza' || p.name === 'Percepção' || p.name === 'Pontaria' || p.name === 'Religião' || p.name === 'Vontade') }],
  proficiencias: [ProficienciasEnum.ArmasMarciais],
  arcanistWay: null,
  barbarianWay: null,
  bardWay: null,
}, {
  id: 4,
  name: 'Druida',
  initialLifePoints: 16,
  levelUpLifePoints: 4,
  initialManaPoints: 4,
  levelUpManaPoints: 4,
  pericias: fullPericiasMock.filter(p => p.name === 'Sobrevivência' || p.name === 'Vontade'),
  periciasChoose: [{ quantity: 4, pericias: fullPericiasMock.filter(p => p.name === 'Adestramento' || p.name === 'Atletismo' || p.name === 'Cavalgar' || p.name === 'Conhecimento' || p.name === 'Cura' || p.name === 'Fortitude' || p.name === 'Iniciativa' || p.name === 'Intuição' || p.name === 'Luta' || p.name === 'Misticismo' || p.name === 'Ofício' || p.name === 'Percepção' || p.name === 'Religião') }],
  proficiencias: [ProficienciasEnum.Escudos],
  arcanistWay: null,
  barbarianWay: null,
  bardWay: null,
}, {
  id: 5,
  name: 'Guerreiro',
  initialLifePoints: 20,
  levelUpLifePoints: 5,
  initialManaPoints: 3,
  levelUpManaPoints: 3,
  pericias: fullPericiasMock.filter(p => p.name === 'Fortitude'),
  periciasChoose: [{ quantity: 1, pericias: fullPericiasMock.filter(p => p.name === 'Luta' || p.name === 'Pontaria') }, { quantity: 2, pericias: fullPericiasMock.filter(p => p.name === 'Adestramento' || p.name === 'Atletismo' || p.name === 'Cavalgar' || p.name === 'Guerra' || p.name === 'Iniciativa' || p.name === 'Intimidação' || p.name === 'Luta' || p.name === 'Ofício' || p.name === 'Percepção' || p.name === 'Pontaria' || p.name === 'Reflexos') }],
  arcanistWay: null,
  barbarianWay: null,
  bardWay: null,
}]