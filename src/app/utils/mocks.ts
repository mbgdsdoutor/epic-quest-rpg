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
import { Magic, MagicExecution, MagicRange, MagicSchools } from '../shared/models/magic';

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
    mestre: {
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
    mestre: {
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

export const origemMock: Origem = {
  id: 1,
  itemChooseOne: false,
  name: 'Cozinheiro',
  description: 'antes de se aventurar, cozinhava',
  items: [],
  pericias: [],
  poderes: [],
}

export const experienceMock = {
  level1: 1000,
  level2: 3000,
  level3: 6000,
  level4: 10000,
  level5: 15000,
  level6: 21000,
  level7: 28000,
  level8: 36000,
  level9: 45000,
  level10: 55000,
  level11: 66000,
  level12: 78000,
  level13: 91000,
  level14: 105000,
  level15: 120000,
  level16: 136000,
  level17: 153000,
  level18: 171000,
  level19: 190000,
  level20: '-'
}

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
      poderes: [42]
    },
  }, {
    id: 3,
    name: 'Arremesso Potente',
    description: 'Quando usa uma arma de arremesso, você pode usar seu modificador de Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso. Pré-requisito: For 13, Estilo de Arremesso.',
    category: CategoryEnum.Combate,
    requirement: {
      strengthPoints: 13,
      poderes: [40]
    },
  }, {
    id: 4,
    name: 'Ataque Pesado',
    description: 'Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra). Pré-requisito: Estilo de Duas Mãos.',
    category: CategoryEnum.Combate,
    requirement: {
      strengthPoints: 13,
      poderes: [40]
    },
  }, {
    id: 5,
    name: 'Ataque Poderoso',
    description: 'Declare que está usando este poder antes de fazer um ataque corpo a corpo. Você sofre –2 no teste de ataque, mas recebe +5 na rolagem de dano. Pré-requisito: For 13.',
    category: CategoryEnum.Combate,
    requirement: {
      strengthPoints: 13,
    },
  }, {
    id: 6,
    name: 'Ataque Preciso',
    description: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico. Pré-requisito: Estilo de Uma Arma.',
    category: CategoryEnum.Combate,
    requirement: {
      strengthPoints: 13,
      poderes: [38]
    },
  }, {
    id: 7,
    name: 'Bloqueio com Escudo',
    description: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico. Pré-requisito: Estilo de Uma Arma.',
    category: CategoryEnum.Combate,
    requirement: {
      poderes: [39]
    },
  }, {
    id: 8,
    name: 'Carga de Cavalaria',
    description: 'Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado. Pré-requisito: treinado em Cavalgar.',
    category: CategoryEnum.Combate,
    requirement: {
      poderes: [37]
    },
  }, {
    id: 9,
    name: 'Combate Defensivo',
    description: 'Quando faz uma ação ataque, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em testes de ataque, mas recebe +5 na Defesa. Pré-requisito: Int 13.',
    category: CategoryEnum.Combate,
    requirement: {
      intelligencePoints: 13,
    },
  }, {
    id: 10,
    name: 'Derrubar Aprimorado',
    description: 'Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente a sua frente, “2” à frente e à direita e assim por diante) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada). Pré-requisito: Combate Defensivo.',
    category: CategoryEnum.Combate,
    requirement: {
      poderes: [9]
    },
  }, {
    id: 11,
    name: 'Disparo Preciso',
    description: 'Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade padrão de –5 no teste de ataque. Pré-requisito: Estilo de Disparo ou Estilo de Arremesso.',
    category: CategoryEnum.Combate,
    requirement: {
      poderes: [41, 36]
    },
  }, {
    id: 12,
    name: 'Desarmar Aprimorado',
    description: 'Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura, pode gastar 1 PM para fazer um ataque extra contra ela. Pré-requisito: Combate Defensivo.',
    category: CategoryEnum.Combate,
    requirement: {
      poderes: [9]
    },
  }, {
    id: 13,
    name: 'Disparo Rápido',
    description: 'Se estiver usando uma arma de ataque à distância e gastar uma ação completa para atacar, você recebe um ataque adicional. Se fizer isso, sofre –2 em ambos os testes de ataque. Pré-requisito: Estilo de Disparo ou Estilo de Arremesso.',
    category: CategoryEnum.Combate,
    requirement: {
      poderes: [41, 36]
    },
  }, {
    id: 14,
    name: 'Empunhadora Poderosa',
    description: 'Você pode usar armas maiores, que causam um passo a mais de dano, sem sofrer penalidade de –5 nos testes de ataque (um personagem Minúsculo pode usar armas normais, um personagem Pequeno ou Médio pode usar armas aumentadas e assim por diante). Pré-requisito: For 17.',
    category: CategoryEnum.Combate,
    requirement: {
      strengthPoints: 17
    },
  }, {
    id: 15,
    name: 'Estilo Desarmado',
    description: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma. Pré-requisito: treinado em Luta.',
    category: CategoryEnum.Combate,
    requirement: {
      pericias: fullPericiasMock.filter(p => p.name === 'Luta')
    },
  }, {
    id: 16,
    name: 'Celebrar Ritual',
    description: 'Você pode lançar magias na forma de rituais. Fazer isso dobra seu limite de PM (permitindo usar mais aprimoramentos), mas aumenta sua execução para uma hora (ou para o dobro da sua execução, o que for maior) e adiciona um componente material de T$ 10 por PM na forma de incensos, óleos, oferendas etc. Quando faz um ritual, você paga apenas metade do custo da magia em PM (após aplicar quaisquer habilidades que modifiquem esse custo).',
    category: CategoryEnum.Magia,
    requirement: {
    },
  }, {
    id: 17,
    name: 'Foco em Magia',
    description: 'Escolha uma magia. Seu custo diminui em –2 PM. Você pode escolher este poder outras vezes para magias diferentes.',
    category: CategoryEnum.Magia,
    requirement: {
    },
  }, {
    id: 18,
    name: 'Magia Ilimitada',
    description: 'Você soma seu modificador do atributo-chave no limite de PM que pode gastar numa magia. Por exemplo, um mago de 5º nível com Int 18 (+4) e este poder pode gastar até 9 PM em cada magia.',
    category: CategoryEnum.Magia,
    requirement: {
    },
  }, {
    id: 19,
    name: 'Escrever Pergaminho',
    description: 'Você pode usar a perícia Ofício (escriba) para fabricar pergaminhos com magias que conheça. Veja a perícia Ofício para as regras de fabricar itens e o Capítulo 8: Recompensas para as regras de pergaminhos. O preço de um pergaminho é T$ 25 por PM (por exemplo, T$ 150 para uma magia de 6 PM). Se a magia tiver um componente material, você deve pagá-lo. A CD para fabricá-lo é 20 + custo em PM da magia. De acordo com o mestre, você pode usar outros objetos portáteis que não pergaminhos, como runas, tabuletas de argila etc. Pré-requisitos: Habilidade de classe Magias, treinado em Ofício (escriba).',
    category: CategoryEnum.Magia,
    requirement: {
    },
  }, {
    id: 20,
    name: 'Acrobático',
    description: 'Você pode usar seu modificador de Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas.',
    category: CategoryEnum.Destino,
    requirement: {
      dexterityPoints: 15
    },
  }, {
    id: 21,
    name: 'Atlético',
    description: 'Você recebe +2 em Atletismo e seu deslocamento aumenta em +3m. Pré-requisito: For 15.',
    category: CategoryEnum.Destino,
    requirement: {
      strengthPoints: 15
    },
  }, {
    id: 22,
    name: 'Atlético',
    description: 'Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você. Pré-requisito: Car 13.',
    category: CategoryEnum.Destino,
    requirement: {
      charismaPoints: 13
    },
  }, {
    id: 23,
    name: 'Comandar',
    description: 'Comandar Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena. Pré-requisito: Car 13.',
    category: CategoryEnum.Destino,
    requirement: {
      charismaPoints: 13
    },
  }, {
    id: 24,
    name: 'Curandeiro',
    description: 'Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD (2d6 com um resultado 20, 3d6 com um resultado 25 e assim por diante). Você só pode usar este poder uma vez por dia numa mesma criatura. Pré-requisitos: Sab 13, treinado em Cura.',
    category: CategoryEnum.Destino,
    requirement: {
      intelligencePoints: 13,
      pericias: fullPericiasMock.filter(p => p.name === 'Cura')
    },
  }, {
    id: 25,
    name: 'Lobo Solitário',
    description: 'Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar a perícia Cura em si mesmo.',
    category: CategoryEnum.Destino,
    requirement: {
    },
  }, {
    id: 26,
    name: 'Dentes Afiados',
    description: 'Você recebe um ataque natural de mordida (dano 1d4, crítico x2, corte). Quando usa a ação ataque, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.',
    category: CategoryEnum.Tormenta,
    requirement: {
    },
  }, {
    id: 27,
    name: 'Dentes Afiados',
    description: 'Você recebe um ataque natural de mordida (dano 1d4, crítico x2, corte). Quando usa a ação ataque, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.',
    category: CategoryEnum.Tormenta,
    requirement: {
    },
  }, {
    id: 28,
    name: 'Anatomia Insana',
    description: 'Você tem 25% de chance (resultado “1” em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. A chance aumenta em +25% para cada dois outros poderes da Tormenta que você possui.',
    category: CategoryEnum.Tormenta,
    requirement: {
    },
  }, {
    id: 29,
    name: 'Sangue Ácido',
    description: 'Quando você sofre dano por um ataque corpo a corpo, o atacante sofre 1 ponto de dano de ácido. Este dano aumenta em +1 para cada outro poder da Tormenta que você possui.',
    category: CategoryEnum.Tormenta,
    requirement: {
    },
  }, {
    id: 30,
    name: 'Articulações Flexíveis',
    description: 'Você recebe +1 em Acrobacia, Furtividade e Reflexos. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.',
    category: CategoryEnum.Tormenta,
    requirement: {
    },
  }, {
    id: 31,
    name: 'Afinidade com a Tormenta',
    description: 'Você recebe +10 em testes de resistência contra efeitos da Tormenta e de suas criaturas.',
    category: CategoryEnum.Concedido,
    requirement: {
    },
  }, {
    id: 32,
    name: 'Anfíbio',
    description: 'Você pode respirar embaixo d’água e adquire deslocamento de natação igual a seu deslocamento terrestre.',
    category: CategoryEnum.Concedido,
    requirement: {
    },
  }, {
    id: 33,
    name: 'Conjurar Arma',
    description: 'Você pode gastar 1 PM para invocar uma arma corpo a corpo ou de arremesso com a qual seja proficiente. A arma surge em sua mão, recebe um bônus de +1 em testes de ataque e rolagens de dano e dura pela cena. Você não pode criar armas de disparo, mas pode criar 10 projéteis (flechas, virotes etc.).',
    category: CategoryEnum.Concedido,
    requirement: {
    },
  }, {
    id: 34,
    name: 'Benção do Mana',
    description: 'Você recebe +3 pontos de mana.',
    category: CategoryEnum.Concedido,
    requirement: {
    },
  }, {
    id: 35,
    name: 'Espada Solar',
    description: 'Você pode gastar 1 PM para encantar sua espada (ou outra arma corpo a corpo de corte que esteja empunhando). Ela causa +1d6 de dano por fogo até o fim da cena.',
    category: CategoryEnum.Concedido,
    requirement: {
    },
  }, {
    id: 36,
    name: 'Estilo de Disparo',
    description: 'Se estiver usando uma arma de disparo, você soma o bônus de Destreza nas rolagens de dano. Pré-requisito: treinado em Pontaria.',
    category: CategoryEnum.Combate,
    requirement: {
      pericias: fullPericiasMock.filter(p => p.name === 'Pontaria')
    },
  }, {
    id: 37,
    name: 'Ginete',
    description: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma. Pré-requisito: treinado em Luta.',
    category: CategoryEnum.Combate,
    requirement: {
      pericias: fullPericiasMock.filter(p => p.name === 'Cavalgar')
    },
  }, {
    id: 38,
    name: 'Estilo de Uma Arma',
    description: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma. Pré-requisito: treinado em Luta.',
    category: CategoryEnum.Combate,
    requirement: {
      pericias: fullPericiasMock.filter(p => p.name === 'Luta')
    },
  }, {
    id: 39,
    name: 'Estilo de Arma e Escudo',
    description: 'Estilo de Arma e Escudo Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2. Pré-requisitos: Treinado em Luta, proficiência com escudos.',
    category: CategoryEnum.Combate,
    requirement: {
      pericias: fullPericiasMock.filter(p => p.name === 'Luta')
    },
  }, {
    id: 40,
    name: 'Estilo de Duas Mãos',
    description: 'Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves. Pré-requisito: For 15, Treinado em Luta.',
    category: CategoryEnum.Combate,
    requirement: {
      strengthPoints: 15,
      pericias: fullPericiasMock.filter(p => p.name === 'Luta')
    },
  }, {
    id: 41,
    name: 'Estilo de Arremesso',
    description: 'Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Pré-requisito: treinado em Pontaria.',
    category: CategoryEnum.Combate,
    requirement: {
      id: 1,
      pericias: fullPericiasMock.filter(p => p.name === 'Pontaria')
    },
  }, {
    id: 42,
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

// DELETE
// export const playerMock: Player = {
//   id: 1,
//   adventureId: 1,
//   alignment: AlignmentEnum.Neutro,
//   experience: 300,
//   age: 20,
//   origem: origemMock,
//   displacement: 8,
//   items: [{
//     id: 1,
//     name: 'Armadura de Couro Simples',
//     consumable: false,
//     description: 'Uma simples armadura.'
//   }, {
//     id: 2,
//     name: 'Espada de Aço',
//     consumable: false,
//     description: 'Uma espada iniciante, forjada por um ferreiro preguiçoso.'
//   }
//   ],
//   poderes: [...fullPoderesMock],
//   pericias: fullPericiasMock.sort(() => Math.random() - Math.random()).slice(0, 5),
//   deus: null,
//   tibar: 0,
//   userId: 3,
//   nivel: 1,
//   name: 'Eric Han Bin',
//   race: raceMock,
//   class: fullClassesMock[1],
//   lifePoints: 8,
//   totalLifePoints: 8,
//   manaPoints: 5,
//   totalManaPoints: 5,
//   caPoints: 10,
//   strength: 12,
//   wisdom: 10,
//   dexterity: 14,
//   constitution: 9,
//   intelligence: 11,
//   charisma: 10,
//   photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS62tMAHeaksBS-NGajA7EVlgB3bUShjU_egA&usqp=CAU'
// }

// DELETE
// export const fullAdventuresMock: Adventure[] = [
//   {
//     id: 1, name: 'Trinity Wonder', photoUrl: 'https://pm1.narvii.com/6374/f49224bea7937903db1166396c554224b3361b8c_hq.jpg', description: 'Nós três que nos conhecemos através do tempo e espaço, inevitavelmente nunca pensamos sobre a existência um do outro... Um artista marcial, uma maga e uma cientista genial. Os ventos do destino une três personalidades, e trazem grandes mudanças ao mundo conhecido atualmente.',
//     mestre: {
//       id: 2,
//       userName: 'Matheus Braz',
//       email: 'mbgdsdoutor@gmail.com',
//       photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg',
//       description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.',
//     },
//     users: [{ id: 3, userName: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
//     { id: 6, userName: 'Leonardo Tavares', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },],
//     players: [
//       playerMock,
//       { ...playerMock, id: 2, name: 'Tobias' },
//       { ...playerMock, id: 3, name: 'Tavares' },
//     ]
//   },
//   {
//     id: 2, name: 'O Retorno do Mago', photoUrl: 'https://img.supermangas.site/img/animes/47504-large.jpg', description: 'O pior aluno da Academia Westroad e a vergonha da Família Blake. Uma nova alma entra no corpo sem vida de Fray Blake, o garoto que não conseguiu aguentar sua dolorosa vida e optou pela morte. O Grande Mago Lucas Trawman ganhou a chance de se vingar ao reencarnar no corpo do menino! Esse é o começo da nova aventura do Grande Mago que retornou após 4000 anos!',
//     mestre: {
//       id: 6,
//       userName: 'Leonardo Tavares ',
//       email: 'mbgdsdoutor@gmail.com',
//       photoUrl: 'https://i.pinimg.com/564x/ca/5e/03/ca5e036976de26dd35bf9475baa0b022.jpg',
//       description: 'Olá! Sou o Matheus, e junto com a Nayara, desenvolvo este app como nosso Projeto de Inovação Tecnologica.',
//     },
//     users: [{ id: 3, userName: 'Atsuko Akagari', email: 'akkochan@gmail.com', photoUrl: 'https://i.redd.it/t27bpbv22imz.png', description: 'olá, meu nome é Akko, e eu só jogo de mage.' },
//     { id: 2, userName: 'Matheus Braz', email: 'tavares@cotemig.com.br', photoUrl: 'https://media-exp1.licdn.com/dms/image/C4E03AQHvLJxok2lpxw/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=PwGRK0TtqOtSNym7BvxrjzP0O8BwArS67nXgoMzRU_g', description: 'Professor dos cursos de Sistema de informação e Análise e desenvolvimento de sistemas, da Faculdade Cotemig. Coordenador do curso de pós-graduação em Data Science e Big Data. Cientista de dados do Hospital Albert Einstein.' },],
//     players: [
//       playerMock,
//       { ...playerMock, id: 2, userId: 2, name: 'Doutor' },
//       { ...playerMock, id: 3, name: 'Kirito' }
//     ]
//   }
// ]

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
      name: 'Membro da Igreja',
      category: CategoryEnum.Origem,
      description: 'Você consegue hospedagem e informação em aliados.',
      requirement: null
    }, {
      name: 'Curandeiro',
      category: CategoryEnum.Origem,
      description: 'Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD (2d6 com um resultado 20, 3d6 com um resultado 25 e assim por diante). Você só pode usar este poder uma vez por dia numa mesma criatura. Pré-requisitos: Sab 13, treinado em Cura.',
      requirement: null
    }, {
      name: 'Vontade de Ferro',
      category: CategoryEnum.Origem,
      description: 'Você recebe +1 PM para cada dois níveis de personagem e +2 em Vontade. ',
      requirement: null
    }
  ],
}, {
  id: 2,
  name: 'Amigo dos Animais',
  description: 'Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete de Namalkah ou mesmo tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial ou filhote de monstro exótico seria destinado a você.',
  itemChooseOne: true,
  items: [{
    name: 'Cão de Guarda',
    description: 'Um fiel cão de guarda.',
    consumable: false,
    value: 50,
  }, {
    name: 'Cavalo',
    description: 'um fiel cavalo.',
    consumable: false,
    value: 50,
  }, {
    name: 'Pônei',
    description: 'um fiel pônei.',
    consumable: false,
    value: 50,
  }],
  pericias: fullPericiasMock.filter(p => p.name === 'Adestramento' || p.name === 'Cavalgar'),
  poderes: [
    {
      name: 'Amigo Especial',
      category: CategoryEnum.Origem,
      description: 'Animais comuns são amistosos em relação a você. Mesmo que não seja um devoto de Allihanna, pássaros e outros pequenos animais sempre se aproximam sem receio. Além disso, caso possua um aliado animal, ele pertence a uma espécie exótica e impressionante, sempre atraindo atenção. ',
      requirement: null
    }, {
      name: 'Parceiro Animal',
      category: CategoryEnum.Destino,
      description: 'Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Escolha os detalhes dele, como nome, aparência e personalidade. Em termos de jogo, é um aliado iniciante de um tipo a sua escolha (veja a página XX). O parceiro obedece às suas ordens e se arrisca para ajudá-lo. Entretanto, se for maltratado, pode parar de segui-lo (de acordo com o mestre). Se perder seu parceiro, você recebe outro no início da próxima aventura.',
      requirement: null
    }
  ],
}, {
  id: 3,
  name: 'Aristocrata',
  description: 'Você nasceu na nobreza. Recebeu educação sofisticada em assuntos acadêmicos, política mercantil, torneios de cavalaria ou mesmo conjuração arcana, dependendo das tradições emsua linhagem e desejos deseus pais. Você ainda procura cumprir seus compromissos como nobre? Luta para conciliar as expectativas da família com a vidade aventuras? Ou cortou totalmente seus laços como passado, mantendo apenas alguns pertences valiosos econtatos úteis?',
  itemChooseOne: false,
  items: [{
    name: 'Jóia da familia',
    description: 'Um item bem valioso de uma rica família',
    consumable: false,
    value: 100,
  }],
  pericias: fullPericiasMock.filter(p => p.name === 'Diplomacia' || p.name === 'Enganação' || p.name === 'Nobreza'),
  poderes: [
    {
      name: 'Comandar',
      category: CategoryEnum.Origem,
      description: 'Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena.',
      requirement: null
    }, {
      name: 'Sangue Azul',
      category: CategoryEnum.Origem,
      description: 'Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc.',
      requirement: null
    }
  ],
}, {
  id: 4,
  name: 'Artesão',
  description: 'Você nasceu na nobreza. Recebeueducação sofisticada em assuntosacadêmicos, política mercantil,torneios de cavalaria ou mesmo conjuração arcana, dependendo das tradições emsua linhagem e desejos deseus pais. Você ainda procura cumprir seus compromissos como nobre? Lutapara conciliar as expectativasda família com a vidade aventuras? Oucortou totalmente seus laços como passado, mantendo apenas algunspertences valiosos econtatos úteis?',
  itemChooseOne: false,
  items: [{
    name: 'Kit de Ofício',
    description: 'Um item que você possa fabricar',
    consumable: false,
    value: 50,
  }],
  pericias: fullPericiasMock.filter(p => p.name === 'Ofício' || p.name === 'Vontade'),
  poderes: [
    {
      name: 'Frutos do Trabalho',
      category: CategoryEnum.Origem,
      description: 'Quando passa em um teste de Ofício para sustento, você recebe o dobro do dinheiro. ',
      requirement: null
    }, {
      name: 'Sortudo',
      category: CategoryEnum.Origem,
      description: 'Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).',
      requirement: null
    }
  ],
}, {
  id: 5,
  name: 'Artista',
  description: 'Você possui talento, nasceu com um “dom” — pelo menos é o que outras pessoas gostam de pensar. Será verdade? Ou será que você apenas sentiu atração por certa forma de arte e treinou muito, muito mesmo? Enquanto o artesão fabrica itens “mundanos”, o artista produz entretenimento, alimento para o coração e alma. Talvez você apenas saiba entoar belas canções, aprendidas na infância com pais amorosos, ou ouvindo fadas na floresta. Ou talvez  seja um ator ou dançarino formado em alguma escola de artes prestigiada.',
  itemChooseOne: true,
  items: [{
    name: 'Kit de Disfarces',
    description: 'Disfarce-se nos momentos mais inoportunos, afinal, você é um artista.',
    consumable: false,
    value: 50,
  }, {
    name: 'Instrumento Musical',
    description: 'Encante a todos com uma bela melodia.',
    consumable: false,
    value: 50,
  }
],
  pericias: fullPericiasMock.filter(p => p.name === 'Atuação' || p.name === 'Enganação'),
  poderes: [
    {
      name: 'Atraente',
      category: CategoryEnum.Origem,
      description: 'Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.',
      requirement: null
    }, {
      name: 'Dom Artístico',
      category: CategoryEnum.Origem,
      description: 'Quando usa a perícia Atuação para fazer uma apresentação e passa no teste, você ganha o dobro de tibares.',
      requirement: null
    }, {
      name: 'Sortudo',
      category: CategoryEnum.Origem,
      description: 'Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).',
      requirement: null
    }, {
      name: 'Torcida',
      category: CategoryEnum.Origem,
      description: 'Você recebe +2 em testes de perícia e Defesa quando tem a torcida a seu favor. Entenda-se por “torcida” qualquer número de criaturas inteligentes em alcance médio que não esteja realizando nenhuma ação além de torcer por você.',
      requirement: null
    }
  ],
}, {
  id: 6,
  name: 'Batedor',
  description: 'Seja conduzindo caravanas através dos reinos, rastreando inimigos nos campos de batalha ou guiando exploradores nas vastidões selvagens, você aprendeu a achar caminhos e dirigir outros com segurança. Batedores podem surgir nas tribos mais primitivas, acompanhando grupos de caça, como profissionais sofisticados nas grandes cidades e forças militares ou ainda na perigosa atividade de caça-recompensas. Pouco importando a carreira que adotou mais tarde, como aventureiro, seu antigo treino acaba se revelando útil em numerosas ocasiões.',
  itemChooseOne: true,
  items: [{
    name: 'Barraca',
    description: 'Uma barraca para se abrigar... ou não.',
    consumable: false,
    value: 50,
  }, {
    name: 'Arma Simples ou Marcial',
    description: 'Arma simples ou marcial de ataque à distância.',
    consumable: false,
    value: 50,
  }
],
  pericias: fullPericiasMock.filter(p => p.name === 'Furtividade' || p.name === 'Percepção'|| p.name === 'Sobrevivência'),
  poderes: [
    {
      name: 'À Prova de Tudo',
      category: CategoryEnum.Origem,
      description: 'Você não sofre penalidades em deslocamento e testes de Sobrevivência por clima ruim.',
      requirement: null
    }, {
      name: 'Estilo de Disparo',
      category: CategoryEnum.Origem,
      description: 'Se estiver usando uma arma de disparo, você soma o bônus de Destreza nas rolagens de dano. Pré-requisito: treinado em Pontaria.',
      requirement: null
    }, {
      name: 'Sentidos Aguçados',
      category: CategoryEnum.Origem,
      description: 'Você recebe +2 em Percepção, não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem, pode rolar mais uma vez o dado da chance de falha. Pré-requisitos: Sab 13, treinado em Percepção.',
      requirement: null
    }
  ],
},{
  id: 7,
  name: 'Charlatão',
  description: 'Você sempre teve talento para resolver problemas com conversa, sincera ou nem tanto. Talvez tenha aprendido andando com más companhias. Por ser pequeno e fraco em meio a guerreiros truculentos, talvez fosse pura questão de sobrevivência. Ou foi tocado por Hyninn, Sszzaas ou outra entidade traiçoeira. Seja como for, após um pouco de diálogo, você percebe o que as pessoas mais querem ou temem, usando palavras para vencer obstáculos e abrir caminhos tão facilmentequanto espadas e magias. Ou melhor.',
  itemChooseOne: false,
  items: [{
    name: 'Jóia Falsificada',
    description: 'Uma jóia que parece ter valor.',
    consumable: false,
    value: 100,
  }, {
    name: 'Kit de Disfarces',
    description: 'Um kit de disfarces variados.',
    consumable: false,
    value: 50,
  }
],
  pericias: fullPericiasMock.filter(p => p.name === 'Enganação' || p.name === 'Jogatina'),
  poderes: [
    {
      name: 'Alpinista Social',
      category: CategoryEnum.Origem,
      description: 'Você pode substituir testes de Diplomacia por testes de Enganação.',
      requirement: null
    }, {
      name: 'Aparência Inofensiva',
      category: CategoryEnum.Origem,
      description: 'A primeira criatura inteligente (Int 3 ou mais) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes. Pré-requisito: Car 13.',
      requirement: null
    }, {
      name: 'Sortudo',
      category: CategoryEnum.Origem,
      description: 'Você recebe +2 em Percepção, não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem, pode rolar mais uma vez o dado da chance de falha. Pré-requisitos: Sab 13, treinado em Percepção.',
      requirement: null
    }
  ],
}, {
  id: 8,
  name: 'Circense',
  description: 'Você adquiriu treinamento como acrobata, malabarista, mágico ou outra forma de arte circense que envolva destreza. Talvez tenha aprendido sozinho, durante as brincadeiras de infância. Talvez tenha sido ensinado por um ente querido, tornando essa arte uma forte ligação com seu passado. Ou ainda, é possível que tenha sido forçado a aprender um ou outro truque para sobreviver nas ruas. De qualquer forma, são aptidões que podem acabar sendo úteis em suas aventuras.',
  itemChooseOne: false,
  items: [{
    name: 'Traje de Artista',
    description: 'Trajes que lhe fazem parecer um artista.',
    consumable: false,
    value: 50,
  }, {
    name: 'Três Bolas Coloridas',
    description: 'Bolas coloridas para malabarismo.',
    consumable: false,
    value: 50,
  }, {
    name: 'Baralho',
    description: 'Um baralho de cartas para impressionar.',
    consumable: false,
    value: 50,
  }
],
  pericias: fullPericiasMock.filter(p => p.name === 'Acrobacia' || p.name === 'Atuação'|| p.name === 'Reflexos'),
  poderes: [
    {
      name: 'Truque de Mágica',
      category: CategoryEnum.Origem,
      description: 'Você pode lançar as magias Explosão de Chamas, Hipnotismo e Transmutar Objetos, mas apenas com o aprimoramento Truque.',
      requirement: null
    }, {
      name: 'Acrobático',
      category: CategoryEnum.Origem,
      description: 'Você pode usar seu modificador de Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas. Pré-requisito: Des 15.',
      requirement: null
    }, {
      name: 'Parceiro Animal',
      category: CategoryEnum.Origem,
      description: 'Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Escolha os detalhes dele, como nome, aparência e personalidade. Em termos de jogo, é um aliado iniciante de um tipo a sua escolha (veja a página XX). O parceiro obedece às suas ordens e se arrisca para ajudá-lo. Entretanto, se for maltratado, pode parar de segui-lo (de acordo com o mestre). Se perder seu parceiro, você recebe outro no início da próxima aventura. Pré-requisitos: treinado em Adestramento (parceiro animal) ou Diplomacia (parceiro humanoide), 6º nível de personagem.',
      requirement: null
    }
  ],
}, {
  id: 9,
  name: 'Criminoso',
  description: 'Fazer o bem é bonito, mas não enche barriga — pelo menos, assim você foi ensinado. Por necessidade, ambição ou apenas sem conhecer outra vida, você foi um bandido durante boa parte da juventude. Furtava bolsas, trapaceava em jogos de taverna, emboscava viajantes nas estradas ou até aceitava contratos para matar. Agia sozinho, com seu próprio bando, pertencia a uma guilda de ladrões. Tornar-se aventureiro talvez seja uma forma de expiar por seus crimes, ou apenas o passo seguinte; em vez de mercadores, roubar tesouros de dragões!',
  itemChooseOne: true,
  items: [{
    name: 'Kit de Ladrão',
    description: 'Utensílios úteis para um ladrão.',
    consumable: false,
    value: 50,
  }, {
    name: 'Kit de Disfarces',
    description: 'Um kit de disfarces variados.',
    consumable: false,
    value: 50,
  }],
  pericias: fullPericiasMock.filter(p => p.name === 'Enganação' || p.name === 'Furtividade'|| p.name === 'Ladinagem'),
  poderes: [
    {
      name: 'Pungista',
      category: CategoryEnum.Origem,
      description: 'Você pode fazer testes de Ladinagem para sustento, como a perícia Ofício.',
      requirement: null
    }, {
      name: 'Venefício',
      category: CategoryEnum.Origem,
      description: 'Quando usa um veneno, você não corre risco de se envenenar acidentalmente. Além disso, a CD para resistir aos seus venenos aumenta em +2. Pré-requisito: treinado em Ofício (alquimia).',
      requirement: null
    }
  ],
}, {
  id: 10,
  name: 'Curandeiro',
  description: 'Que bom seria se a cura milagrosa dos clérigos estivesse ao alcance de todos! Talvez você tenha sido ajudante do curandeiro da vila, testemunhando quando ele tratava doenças e lesões sem conjurar qualquer magia. Ou teve um estudo formal e sofisticado de medicina no Colégio Real de Médicos em Salistick. De qualquer modo, você é treinado em curar com remédios e tratamentos naturais — algo sempre útil em grupos de aventureiros, mesmo quando há um clérigo por perto.',
  itemChooseOne: false,
  items: [{
    name: 'Bálsamo restaurador',
    description: 'Bálsamo que faz restaurar.',
    consumable: false,
    value: 50,
  }, {
    name: 'Kit de Medicamentos',
    description: 'Um kit de medicamentos variados.',
    consumable: false,
    value: 50,
  }],
  pericias: fullPericiasMock.filter(p => p.name === 'Cura' || p.name === 'Vontade'),
  poderes: [
    {
      name: 'Curandeiro',
      category: CategoryEnum.Origem,
      description: 'Que bom seria se a cura milagrosa dos clérigos estivesse ao alcance de todos! Talvez você tenha sido ajudante do curandeiro da vila, testemunhando quando ele tratava doenças e lesões sem conjurar  qualquer magia. Ou teve um estudo formal e sofisticado  de medicina no Colégio Real de Médicos em Salistick.  De qualquer modo, você é treinado em curar com remédios e tratamentos naturais — algo sempre útil em grupos de aventureiros, mesmo quando há um clérigo por perto.',
      requirement: null
    }, {
      name: 'Venefício',
      category: CategoryEnum.Origem,
      description: 'Quando usa um veneno, você não corre risco de se envenenar acidentalmente. Além disso, a CD para resistir aos seus venenos aumenta em +2. Pré-requisito: treinado em Ofício (alquimia).',
      requirement: null
    },{
      name: 'Médico de Campo',
      category: CategoryEnum.Origem,
      description: 'Sempre que você faz um teste de Cura para primeiros socorros, o paciente também recupera 1d6 PV.',
      requirement: null
    }
  ],
  }, {
    id: 11,
    name: 'Eremita',
    description: 'Você passou parte da vida isolado, afastado da sociedade. Foi banido ainda criança, por nascer lefou ou com alguma deformidade da Tormenta. Ouviu um chamado dos deuses, buscando o isolamento para meditar sobre seu significado. Viveu enclausurado em um mosteiro, mantendo contato apenas com poucos monges silenciosos. Ou foi praticante de artes arcanas proibidas, mantendo-se longe de olhares curiosos. A vida simples o tornou forte de corpo e espírito. Mas, em algum momento, você decidiu que bastava — ou teve sua tranquilidade interrompida.',
    itemChooseOne: false,
    items: [{
      name: 'Barraca',
      description: 'Uma barraca para se abrigar... ou não.',
      consumable: false,
      value: 50,
    }, {
      name: 'Kit de Medicamentos',
      description: 'Um kit de medicamentos variados.',
      consumable: false,
      value: 50,
    }],
    pericias: fullPericiasMock.filter(p => p.name === 'Misticismo' || p.name === 'Religião' || p.name === 'Sobrevivência'),
    poderes: [
      {
        name: 'Busca Interior',
        category: CategoryEnum.Origem,
        description: 'Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre',
        requirement: null
      }, {
        name: 'Lobo Solitário',
        category: CategoryEnum.Origem,
        description: 'Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar a perícia Cura em si mesmo.',
        requirement: null
      }
    ],
    }, {
      id: 12,
      name: 'Escravo',
      description: 'Ainda que escravidão seja ilegal no Reinado, em Arton a liberdade não é para todos. De minotauros odiosos no Império de Tauron aos cruéis mestres subterrâneos de Trollkyrka, várias culturas praticam a escravidão. Você já nasceu escravo, ou fez parte de um povo derrotado na guerra, ou apenas foi capturado em alguma rua escura para depois despertar na jaula, em algum mercado clandestino? Encontrou uma chance de escapar, tornando-se agora um escravo foragido? Recebeu a liberdade como recompensa por realizar um grande favor a seu dono? Foi resgatado por aventureiros que agora se tornaram sua nova família?',
      itemChooseOne: false,
      items: [{
        name: 'Algemas',
        description: 'Algemas para prender alguém... ou algo.',
        consumable: false,
        value: 50,
      }, {
        name: 'Ferramenta Pesada',
        description: 'Uma ferramenta pesada para várias utilidades.',
        consumable: false,
        value: 50,
      }],
      pericias: fullPericiasMock.filter(p => p.name === 'Atletismo' || p.name === 'Fortitude' || p.name === 'Furtividade'),
      poderes: [
        {
          name: 'Desejo de Liberdade',
          category: CategoryEnum.Origem,
          description: 'Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra efeitos que possam aprisioná-lo, como a manobra agarrar ou a magia Imobilizar.',
          requirement: null
        }, {
          name: 'Vitalidade',
          category: CategoryEnum.Origem,
          description: 'Você recebe +1 PV por nível de personagem e +2 em Fortitude. Pré-requisito: Con 13.',
          requirement: null
        }
      ],
      }, {
        id: 13,
        name: 'Forasteiro',
        description: 'Você veio de longe. Sua cultura nativa é quase ou totalmente desconhecida no Reinado, tornando-o uma figura exótica, de hábitos estranhos. Você pertence a uma tribo perdida nas Montanhas Sanguinárias? Nasceu em uma bela cidade de cúpulas douradas no Deserto da Perdição? Navegou em navios audazes desde os Reinos de Moreania? Talvez você até tenha chegado de outro mundo, através de algum portal mágico. Será que conseguiu ajustar-se a este Reinado, agora chamando-o de lar? Ou procura até hoje o caminho de volta para casa?',
        itemChooseOne: false,
        items: [{
          name: 'Diário de Viagem',
          description: 'Um diário para anotações da viagem.',
          consumable: false,
          value: 50,
        }, {
          name: 'Traje de Viagem Estrangeiro',
          description: 'Uma traje estrangeiro para viagens.',
          consumable: false,
          value: 50,
        }, {
          name: 'Instrumento Musical Exótico',
          description: 'Instrumento musical exótico para encantar com belas melodias.',
          consumable: false,
          value: 50,
        }],
        pericias: fullPericiasMock.filter(p => p.name === 'Cavalgar' || p.name === 'Pilotar' || p.name === 'Sobrevivência'),
        poderes: [
          {
            name: 'Cultura Exótica',
            category: CategoryEnum.Origem,
            description: 'Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de perícia somente treinada, mesmo sem ser treinado na perícia.',
            requirement: null
          }, {
            name: 'Lobo Solitário',
            category: CategoryEnum.Origem,
            description: 'Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar a perícia Cura em si mesmo.',
            requirement: null
          }
        ],
        },  {
          id: 14,
          name: 'Gladiador',
          description: 'Em vários pontos do Reinado combates de arena são um entretenimento popular — a ponto de atrair muitos jovens praticantes. Podem ser combates até a morte ou apenas encenações elaboradas ou ainda corridas de cavalo, arquearia e outros esportes não tão sangrentos. Você acabou envolvido nesse mundo glamoroso por ser tradição em sua família, por admirar algum gladiador renomado ou apenas por sede de fama e fortuna. Um evento traumático, uma desilusão ou o puro tédio levou você a abandonar as arenas e aplausos, usando sua experiência em torneios para viver aventuras.',
          itemChooseOne: false,
          items: [{
            name: 'Arma Marcial ou Exótica',
            description: 'Uma Arma Marcial ou Exótica para necessidades de combate.',
            consumable: false,
            value: 50,
          }, {
            name: 'Item Sem Valor',
            description: 'um item sem valor recebido de um admirador.',
            consumable: false,
            value: 50,
          }],
          pericias: fullPericiasMock.filter(p => p.name === 'Atuação' || p.name === 'Luta'),
          poderes: [
            {
              name: 'Atraente',
              category: CategoryEnum.Origem,
              description: 'Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você. Pré-requisito: Car 13',
              requirement: null
            }, {
              name: 'Torcida',
              category: CategoryEnum.Origem,
              description: 'Você recebe +2 em testes de perícia e Defesa quando tem a torcida a seu favor. Entenda-se por “torcida” qualquer número de criaturas inteligentes em alcance médio que não esteja realizando nenhuma  ação além de torcer por você. Pré-requisito: Car 13.',
              requirement: null
            },{
              name: 'Pão e Circo',
              category: CategoryEnum.Origem,
              description: 'Por seu treino em combates de exibição, você sabe “bater sem machucar”. Pode escolher causar dano não letal sem sofrer a penalidade de –5.',
              requirement: null
            }
          ],
          }, {
            id: 15,
            name: 'Guarda',
            description: 'Você atuou como agente da lei em uma vila ou cidade. Nem de longe uma profissão tão glamorosa ou emocionante quanto parece; boa parte de seu trabalho resumia-se a guardar um portão, fazer rondas tediosas ou recolher bêbados em tavernas. Pelo menos você recebeu algum treino em investigação e combate. Também tem consigo alguma boa arma, que “esqueceu” de devolver quando abandonou a milícia para se tornar aventureiro.',
            itemChooseOne: false,
            items: [{
              name: 'Apito',
              description: 'Um apito para chamar atenção.',
              consumable: false,
              value: 50,
            }, {
              name: 'Insígnia da Milícia',
              description: 'Uma belíssima insígnia para exibir.',
              consumable: false,
              value: 50,
            }, {
              name: 'Arma Marcial',
              description: 'Uma arma marcial para combates.',
              consumable: false,
              value: 50,
            }],
            pericias: fullPericiasMock.filter(p => p.name === 'Investigação' || p.name === 'Luta' || p.name === 'Percepção'),
            poderes: [
              {
                name: 'Detetive',
                category: CategoryEnum.Origem,
                description: 'Você pode substituir testes de Percepção ou Intuição por testes de Investigação.',
                requirement: null
              }, {
                name: 'Invetigador',
                category: CategoryEnum.Origem,
                description: 'Você recebe +2 em Investigação e soma seu bônus de Inteligência em Intuição. Pré-requisito: Int 13.',
                requirement: null
              }
            ],
            }, {
              id: 16,
              name: 'Herdeiro',
              description: 'Você atuou como agente da lei em uma vila ou cidade. Nem de longe uma profissão tão glamorosa ou emocionante quanto parece; boa parte de seu trabalho resumia-se a guardar um portão, fazer rondas tediosas ou recolher bêbados em tavernas. Pelo menos você recebeu algum treino em investigação e combate. Também tem consigo alguma boa arma, que “esqueceu” de devolver quando abandonou a milícia para se tornar aventureiro.',
              itemChooseOne: false,
              items: [{
                name: 'Símbolo de Herança',
                description: 'Um símbolo de sua herança, como um anel de sinete ou manto cerimonial. Enquanto estiver com esse item, você pode ser reconhecido por sua descendência, o que pode ser bom... ou não!',
                consumable: false,
                value: 50,
              }],
              pericias: fullPericiasMock.filter(p => p.name === 'Misticismo' || p.name === 'Nobreza' || p.name === 'Ofício'),
              poderes: [
                {
                  name: 'Comandar',
                  category: CategoryEnum.Origem,
                  description: 'Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena. Pré-requisito: Car 13.',
                  requirement: null
                }, {
                  name: 'Herança',
                  category: CategoryEnum.Origem,
                  description: 'Você herdou um item mundano ou mágico de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000.',
                  requirement: null
                }
              ],
              },{
                id: 17,
                name: 'Membro da Guilda',
                description: 'Você foi, ou ainda é, membro atuante em uma grande guilda — uma associação de artesãos, mercadores, magos, criminosos ou mesmo aventureiros. A guilda forneceu o treinamento e equipamento necessários para suas atividades, esperando que você seja útil em troca. Você se manteve fiel a seus patronos, cumprindo missões e colhendo os benefícios de pertencer a uma vasta organização? Ou deixou essa vida para trás, sendo agora desprezado ou até caçado por seus antigos mestres? ',
                itemChooseOne: true,
                items: [{
                  name: 'Kit de Ladrão',
                  description: 'Itens específicos para ladrões',
                  consumable: false,
                  value: 50,
                },                {
                  name: 'Kit de Ofício',
                  description: 'Itens característicos de ofício.',
                  consumable: false,
                  value: 50,
                }],
                pericias: fullPericiasMock.filter(p => p.name === 'Diplomacia' || p.name === 'Enganação' || p.name === 'Misticismo' || p.name === 'Ofício'),
                poderes: [
                  {
                    name: 'Foco em Perícia',
                    category: CategoryEnum.Origem,
                    description: 'Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes. Este poder não pode ser aplicado em Luta e Pontaria (mas veja Foco em Arma). Pré-requisito: treinado na perícia escolhida.',
                    requirement: null
                  }, {
                    name: 'Rede de Contatos',
                    category: CategoryEnum.Origem,
                    description: 'Graças à influência de sua guilda, você pode substituir testes de Investigação por testes de Diplomacia.',
                    requirement: null
                  }
                ],
                }, {
                  id: 18,
                  name: 'Mercador',
                  description: 'Seguindo uma tradição de família, após herdar um estabelecimento ou apenas como um jovem empregado, você atuou como comerciante — pelo menos por algum tempo. Uma tenda modesta em algum grande mercado urbano? Uma caravana mercante cruzando o Reinado? Um belo bazar na prestigiada cidade voadora de Vectora? Após alguns anos de negociações e jornadas (nem tão tranquilas quanto outros imaginam), você talvez não tenha ficado rico, mas reuniu algum equipamento e dinheiro suficientes para começar carreira como aventureiro.',
                  itemChooseOne: false,
                  items: [{
                    name: 'Uma Carroça',
                    description: 'Uma simples e charmosa carroça',
                    consumable: false,
                    value: 50,
                  }, {
                    name: 'Um trobo',
                    description: 'Um eficiente trobo.',
                    consumable: false,
                    value: 50,
                  }, {
                    name: 'Mercadorias',
                    description: 'Mercadorias para vender no valor de T$ 100.',
                    consumable: false,
                    value: 100,
                  }],
                  pericias: fullPericiasMock.filter(p => p.name === 'Diplomacia' || p.name === 'Intuição' || p.name === 'Ofício'),
                  poderes: [
                    {
                      name: 'Proficiência',
                      category: CategoryEnum.Origem,
                      description: 'Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa  proficiência. Você pode escolher este poder outras  vezes para proficiências diferentes.',
                      requirement: null
                    }, {
                      name: 'Negociação',
                      category: CategoryEnum.Origem,
                      description: 'Você pode vender itens por 2/3 do seu preço, em vez de metade do preço.',
                      requirement: null
                    }, {
                      name: 'Sortudo',
                      category: CategoryEnum.Origem,
                      description: 'Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).',
                      requirement: null
                    }],
                  }, {
                    id: 19,
                    name: 'Minerador',
                    description: 'Ser aventureiro é a profissão mais perigosa de todas; ser mineiro, talvez a segunda mais perigosa. Você mergulhou nas profundezas da terra atrás de metais necessários à civilização ou riquezas em gemas preciosas. Enquanto humanos e outras raças consideram essa vida um pesadelo, quase todos os anões acreditam ser a mais feliz das carreiras. A escuridão e o sufocamento dos subterrâneos talvez tenham sido assustadores, mas trouxeram a você bens materiais valiosos, bem como informação profunda (sem trocadilhos) sobre túneis e masmorras.',
                    itemChooseOne: false,
                    items: [{
                      name: 'Gemas Preciosas',
                      description: 'Gemas preciosas com valor.',
                      consumable: false,
                      value: 100,
                    },{
                      name: 'Picareta',
                      description: 'Uma precisa picareta.',
                      consumable: false,
                      value: 50,
                    }],
                    pericias: fullPericiasMock.filter(p => p.name === 'Atleticismo' || p.name === 'Fortitude' || p.name === 'Ofício'),
                    poderes: [
                      {
                        name: 'Ataque Poderoso',
                        category: CategoryEnum.Origem,
                        description: 'Declare que está usando este poder antes de fazer um ataque corpo a corpo. Você sofre –2 no teste de ataque, mas recebe +5 na rolagem de dano. Pré-requisito: For 13.',
                        requirement: null
                      }, {
                        name: 'Escavador',
                        category: CategoryEnum.Origem,
                        description: 'Você se torna proficiente em picareta e não sofre penalidade em deslocamento por terreno difícil em masmorras e subterrâneos.',
                        requirement: null
                      }, {
                        name: 'Sentidos Aguçados',
                        category: CategoryEnum.Origem,
                        description: 'Você recebe +2 em Percepção, não fica desprevenido  contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem, pode rolar mais uma vez o dado da chance de falha. Pré- requisitos: Sab 13, treinado em Percepção.',
                        requirement: null
                      }],
                    }, {
                      id: 20,
                      name: 'Nômade',
                      description: 'Até onde se lembra, você nunca pertenceu a um só lugar. Sua família viajava constantemente, como parte de alguma grande caravana comercial, peregrinação religiosa ou algum povo primitivo que nunca praticou agricultura. Ou talvez suas razões para viajar sejam bastante diferentes e pessoais — após a quase extinção de seu povo, muitos elfos temem criar raízes, enquanto a deusa Valkaria exige que seus devotos se mantenham sempre em viagem. Para você, habituado às estradas e sem laços com nenhuma terra, bastou um pequeno passo para se tornar aventureiro.',
                      itemChooseOne: false,
                      items: [{
                        name: 'Bordão',
                        description: 'Um belo bordão.',
                        consumable: false,
                        value: 50,
                      },{
                        name: 'Bússola',
                        description: 'Uma precisa bússola.',
                        consumable: false,
                        value: 50,
                      }],
                      pericias: fullPericiasMock.filter(p => p.name === 'Cavalgar' || p.name === 'Pilotagem' || p.name === 'Sobrevivência'),
                      poderes: [
                        {
                          name: 'Lobo Solitário',
                          category: CategoryEnum.Origem,
                          description: 'Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar a perícia Cura em si mesmo.',
                          requirement: null
                        }, {
                          name: 'Mochileiro',
                          category: CategoryEnum.Origem,
                          description: 'Você não sofre penalidade de armadura e redução de deslocamento por transportar carga pesada.',
                          requirement: null
                        }, {
                          name: 'Parceiro Animal',
                          category: CategoryEnum.Origem,
                          description: 'Você recebe +2 em Percepção, não fica desprevenido  contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem, pode rolar mais uma vez o dado da chance de falha. Pré- requisitos: Sab 13, treinado em Percepção.',
                          requirement: null
                        }],
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
  pericias: fullPericiasMock.filter(p => p.name === 'Misticismo' || p.name === 'Percepção'),
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
  adventureId: 1,
  sharedUsersIds: []
}, {
  id: 1,
  title: 'Meu Diário - Dia 01',
  content: 'O dia começou tranquilo.',
  userId: 2,
  adventureId: 1,
  sharedUsersIds: []
}, {
  id: 3,
  title: 'Carta do Rei Artur',
  content: '<h2><u>Carta do Rei Artur</u></h2><p><br></p><p><span class="ql-font-monospace">Olá, bravos guerreiros. Gostaria de solicitar sua ajuda, pois estou ciente de seus feitos recentes, e tenho muita fé que serão capazes de concluir o que tenho pra pedir. Segue meus pedidos:</span></p><p><br></p><ol><li><span class="ql-font-monospace">Entrem na "Dungeon da Noite"</span></li><li><span class="ql-font-monospace">Encontrem Erick, meu fiel cavaleiro que se perdeu na mesma</span></li><li><span class="ql-font-monospace">Resgatem e retornem com Erick em segurança</span></li></ol>',
  userId: 6,
  adventureId: 1,
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
}, {
  id: 5,
  name: 'Guerreiro',
  initialLifePoints: 20,
  levelUpLifePoints: 5,
  initialManaPoints: 3,
  levelUpManaPoints: 3,
  pericias: fullPericiasMock.filter(p => p.name === 'Fortitude'),
  periciasChoose: [{ quantity: 1, pericias: fullPericiasMock.filter(p => p.name === 'Luta' || p.name === 'Pontaria') }, { quantity: 2, pericias: fullPericiasMock.filter(p => p.name === 'Adestramento' || p.name === 'Atletismo' || p.name === 'Cavalgar' || p.name === 'Guerra' || p.name === 'Iniciativa' || p.name === 'Intimidação' || p.name === 'Luta' || p.name === 'Ofício' || p.name === 'Percepção' || p.name === 'Pontaria' || p.name === 'Reflexos') }],
}]

export const fullMagicsMock: Magic[] = [
  {
    id: 1,
    name: 'Abençoar Alimentos',
    type: 'Divina',
    school: MagicSchools.Transmutacao,
    circle: 1,
    description: 'Você purifica e abençoa uma porção decomida ou dose de bebida. Isso tornaum alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final daduração, o alimento oferece 5 PV temporários ou 1 PM temporário (além dequaisquer bônus que já oferecesse).Bônus de alimentação duram um dia ecada personagem só pode receber umbônus de alimentação por dia.Truque: o alimento é purificado (não causa nenhum efeito nocivo se estavaestragado ou envenenado), mas não oferece bônus ao ser consumido.+1 PM: aumenta o número de alvo sem +1.+1 PM: muda a duração para permanente, o alvo para 1 frasco com água eadiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: 'Alimento para 1 criatura'
  }, {
    id: 2,
    name: 'Acalmar Animal',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 1,
    description: 'O animal fica prestativo em relação avocê. Ele não fica sob seu controle, maspercebe suas palavras e ações da maneira mais favorável possível. Você recebe+10 nos testes de Adestramento e Diplomacia que fizer contra o animal.Um alvo hostil ou que esteja envolvidoem um combate recebe +5 em seu testede resistência. Se você ou seus aliadostomarem qualquer ação hostil contra oalvo, a magia é anulada e ele retorna àatitude que tinha antes (ou piorada, deacordo com o mestre). Se tratar bem oalvo, a atitude pode permanecer mesmoapós o término da magia.+1 PM: muda o alcance para médio.+1 PM: muda o alvo para 1 monstro ouespírito com Inteligência 1, 2 ou nula.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 animal',
    resistence: 'Vontade Anula'
  }, {
    id: 3,
    name: 'Adaga Mental',
    type: 'Arcana',
    school: MagicSchools.Encantamento,
    circle: 1,
    description: 'Você manifesta e dispara uma adagaimaterial contra a mente do alvo, quesofre 2d6 pontos de dano mental e ficapasmo por uma rodada. Se passar noteste de resistência, sofre apenas metade do dano e não fica pasmo.+1 PM: você lança a magia sem gesticular ou pronunciar palavras e a adagase torna invisível. Se o alvo falhar noteste de resistência, não percebe quevocê lançou uma magia contra ele.+2 PM: muda a duração para 1 dia.Além do normal, você “finca” a adagana mente do alvo. Enquanto a magiadurar, você sabe a direção e localizaçãodo alvo, desde que ele esteja no mesmo mundo.+2 PM: aumenta o dano em +1d6.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Vontade Parcial'
  }, {
    id: 4,
    name: 'Alarme',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 1,
    description: 'Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida.Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. Alarme pode emitir um aviso telepático ou sonoro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até1km da área protegida. Um aviso sonoro alerta todas as criaturas em alcance longo.+2 PM: muda o alcance para pessoal.A área é emanada a partir de você.+5 PM: além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localização (“três dias de viagem ao norte”,por exemplo).+5 PM: muda a duração para 1 dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia como uma reação. Se o intruso falhar na resistência, ficará paralisado por 1d4 rodadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas ganham +10 em testes de Sobrevivência para rastrear o intruso',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    area: 'esfera de 9m de raio'
  }, {
    id: 5,
    name: 'Aliado Animal',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 2,
    description: 'Você cria um vínculo mental com umanimal prestativo em relação a você.O Aliado Animal obedece a você ao melhor de suas capacidades, mesmo queisso arrisque a vida dele. Ele funcionacomo um aliado veterano, de um tipoa sua escolha entre ajudante, combatente, fortão, guardião, montaria ouperseguidor.+1 PM: muda o alvo para 1 animal Minúsculo e a duração para 1 semana. Emvez do normal, o animal se desloca aomelhor de suas capacidades até um local designado por você — em geral, paralevar um item, carta ou similar. Quandoo animal chega ao destino, fica esperando até o fim da magia, permitindo apenas que uma ou mais criaturas escolhidas por você se aproximem e peguem oque ele estiver carregando.+7 PM: muda o aliado para mestre.Requer 3º círculo.+12 PM: muda o alvo para 2 animaisprestativos. Cada animal funcionacomo um aliado de um tipo diferente,e você pode receber a ajuda de ambos(mas ainda precisa seguir o limite dealiados de acordo com o seu nível depersonagem). Requer 4º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 animal prestativo'
  }, {
    id: 6,
    name: 'Alterar Destino',
    type: 'Arcana',
    school: MagicSchools.Adivinhacao,
    circle: 5,
    description: 'Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você automaticamente passa em um teste de resistência ou evita um ataque nesta rodada.',
    duration: 'Instantânea',
    execution: MagicExecution.Reacao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 7,
    name: 'Alterar Memória',
    type: 'Arcana',
    school: MagicSchools.Encantamento,
    circle: 4,
    description: 'Você invade a mente do alvo e altera ou apaga suas memórias da última hora.+2 PM: muda o alcance para cone de4,5m e o alvo para criaturas na área.+5 PM: você pode alterar ou apagar as memórias das últimas 24 horas.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura',
    resistence: 'Vontade Anula'
  }, {
    id: 8,
    name: 'Alterar Tamanho',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 4,
    description: 'Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo). Você também pode mudar a consistência do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV, apenas suas propriedades físicas).+1 PM: aumenta o número de alvo sem +1.+2 PM: muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo e seu equipamento aumentam de tamanho em uma categoria. O alvo também recebe Força +4. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito.+3 PM: muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo e seu equipamento diminuem de tamanho em uma categoria. O alvo também recebe Destreza +4.Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito. Requer 3º círculo.+7 PM: muda o alcance para toque, o alvo para 1 criatura, a duração para permanente e a resistência para Fortitude anula. Em vez do normal, se falhar na resistência o alvo e seu equipamento têm seu tamanho mudado para Minúsculo. O alvo também tem seu valor de Força reduzido a 1 e suas formas de deslocamento reduzidas a 3m.Requer 4º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 objeto'
  }, {
    id: 9,
    name: 'Amarras Etéreas',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 2,
    description: 'Três cordas de energia surgem do chão e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão parafazer um teste de Atletismo (CD igualà da magia). Se passar, destrói uma corda, mais uma corda adicional para cada 2 pontos pelos quais superou aCD. As cordas também podem ser atacadas e destruídas: cada uma tem Defesa 10, 10 PV, RD 5 e imunidade a dano mágico. Se todas as cordas forem destruídas, a magia é dissipada. Por serem feitas de energia, as cordas afetam criaturas incorpóreas.+2 PM: aumenta o número de alvosem +1.+2 PM: aumenta o número de cordasem um alvo a sua escolha em +1.+3 PM: em vez do normal, cada corda pode ser destruída automaticamentecom um único ataque bem-sucedido;porém, cada corda destruída libera um choque de energia que causa 1d6+1 pontos de dano de essência na criatura amarrada. Requer 3º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura'
  }, {
    id: 10,
    name: 'Amedrontar',
    type: 'Arcana',
    school: MagicSchools.Necromancia,
    circle: 1,
    description: 'Envolvido por energias sombrias, o alvo fica abalado. Se falhar na resistência, fica apavorado por 1d4 rodadas, depois abalado. Se passar, fica abalado por 1d4 rodadas.+2 PM: muda o alvo para criatura de até 4º nível.+2 PM: muda o nível do alvo para até 8º.+5 PM: afeta todos os alvos válidos a sua escolha dentro do alcance.+5 PM: muda o nível do alvo para até 12º.+9 PM: muda o nível do alvo para até 16º.+14 PM: muda o nível do alvo para qualquer.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 animal ou humanoide de até 4º nível',
    resistence: 'Vontade Parcial'
  }, {
    id: 11,
    name: 'Âncora Dimensional',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 3,
    description: 'O alvo é envolvido por um campo de força cor de esmeralda que impede qualquer movimento planar. Isso inclui todas as magias de convocação(como Salto Dimensional e Teletransporte), viagens astrais e anula a habilidade incorpóreo.+2 PM: muda o alcance para médio, a área para círculo de 3m de raio e o alvo para criaturas escolhidas.+2 PM: muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resistência a dano 30 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento da Liberdade do paladino).+4 PM: como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e resistência a dano 50.+4 PM: muda o alvo para área de cubo de 9m, a duração para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000).Em vez do normal, nenhum tipo de movimento planar pode entrar ou sair da área.+9 PM: muda o alcance para médio, a área para círculo de 3m de raio e o alvo para criaturas escolhidas. Cria um fio de energia (veja acima) que prende todos os alvos ao centro da área',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura ou objeto'
  }, {
    id: 12,
    name: 'Animar Objetos',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 4,
    description: 'Você concede vida a objetos inanimados. Cada objeto se torna um tipo de aliado sob seu controle, escolhido da lista de tamanho. Com uma ação de movimento, você pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura neste turno. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados têm valores de Força e Destreza de acordo com seu tamanho. Diferente dos aliados comuns, um objeto pode ser alvo de um ataque direto, que acerta automaticamente — os PV de cada objeto dependem de seu tamanho. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura.+5 PM: muda a duração para permanente e adiciona componente material(prataria no valor de T$ 1.000). Você pode ter um máximo de objetos animados igual à metade do seu nível. Estatísticas de objetos animados Minúsculo: For 4, Des 18, 5 PV; Assassino ou Combatente Iniciante. Pequeno: For 6, Des 14, 10 PV; Combatente ou Guardião Iniciante. Médio: For 10, Des 12, 20 PV; Combatente ou Guardião Veterano. Grande: For 14, Des 10, 40 PV; Fortão, Guardião ou Montaria Veterano. Enorme: For 18, Des 6, 60 PV; Fortão, Guardião ou Montaria Mestre.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: 'até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme'
  }, {
    id: 13,
    name: 'Anular Luz',
    type: 'Divina',
    school: MagicSchools.Necromancia,
    circle: 3,
    description: 'Esta magia cria uma onda de escuridão que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são anuladas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área são protegidos por uma aura sombria e recebem+4 na Defesa até o fim da cena. Inimigos na área ficam enjoados por 1d4 rodadas. Anular a Luz anula Dispersar as Trevas.+2 PM: aumenta o bônus na Defesa em +1.+4 PM: muda o círculo máximo de magias dissipadas para 4º.+9 PM: muda o círculo máximo de magias dissipadas para 5º.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    area: 'Esfera de 6m de raio'
  }, {
    id: 14,
    name: 'Aparência Perfeita',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 2,
    description: 'Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor, deixando-o mais atraente e confiável. Enquanto a magia estiver ativa, seu Carisma torna-se 20(ou recebe um bônus de +4, caso seja20 ou maior) e você recebe +8 nos testes de Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores percebem a mudança e tendem a suspeitar de você. Da mesma maneira, pessoas que o viram sob o efeito da magia sentirão que “algo está errado” a o vê-lo em condições normais. Quando a cena acabar, você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa.+1 PM: muda o alcance para toque e o alvo para 1 humanoide.',
    duration: 'cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 15,
    name: 'Aprisionamento',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 5,
    description: '',
    duration: 'Permanente',
    execution: MagicExecution.Completa,
    range: MagicRange.Curto,
    target: '1 criatura'
  }, {
    id: 16,
    name: 'Área Escorregadia',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 1,
    description: 'Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10).Área Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo.+1 PM: aumenta a área em +1 quadrado de 1,5m.+2 PM: muda a CD dos testes de Acrobacia para 15.+5 PM: muda a CD dos testes de Acrobacia para 20.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '4 quadrados de 1,5m ou 1 objeto'
  }, {
    id: 17,
    name: 'Arma Espiritual',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 1,
    description: 'Você invoca a arma preferida de sua divindade, que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte— no oponente que fez o ataque. Esta magia se dissipa se você morrer.+1 PM: além do normal, a arma também o protege, oferecendo +1 naDefesa.+2 PM: aumenta o bônus na Defesa em +1.+2 PM: muda a duração para sustentada. Uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo em alcance curto. Se a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2º círculo.+2 PM: muda o tipo do dano para essência. Requer 2º círculo.+5 PM: invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3º círculo.',
    duration: 'cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 18,
    name: 'Arma Mágica',
    type: 'Universal',
    school: MagicSchools.Transmutacao,
    circle: 1,
    description: 'A arma recebe um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica. Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque.+2 PM: aumenta o bônus em +1, limitado pelo círculo máximo de magia que você pode lançar.+2 PM: a arma passa a causar +1d6de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada',
    duration: 'cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 arma'
  }, {
    id: 19,
    name: 'Armadura Arcana',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 1,
    description: 'Esta magia cria uma película protetora invisível, mas tangível, fornecendo+4 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.+1 PM: muda a execução para reação. Em vez do normal, você cria um escudo mágico para se proteger de um ataque, recebendo +6 na Defesa contra esse ataque apenas.+2 PM: aumenta o bônus na Defesa em +1.+2 PM: muda a duração para 1 dia. Requer 2º círculo.',
    duration: 'cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 20,
    name: 'Armamento da natureza',
    type: 'Divina',
    school: MagicSchools.Transmutacao,
    circle: 1,
    description: 'Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape) ou natural(incluindo ataque desarmado). O dano da arma aumenta em um passo e ela é considerada mágica para propósitos de resistência a dano. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração).+1 PM: fornece +1 nos testes de ataque com a arma.+2 PM: muda a execução para ação de movimento.+3 PM: aumenta o bônus nos testes de ataque em +1.+5 PM: aumenta o dano da arma em mais um passo.',
    duration: 'cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 arma'
  }, {
    id: 21,
    name: 'Assassino Fantasmagórico',
    type: 'Arcana',
    school: MagicSchools.Necromancia,
    circle: 4,
    description: 'Usando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagórico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio. O espectro surge adjacente a você e flutua em direção ao alvo com deslocamento de voo 18m por turno. Ele é incorpóreo e imune a qualquer tipo de dano ou magia. Se o espectro terminar seu turno em alcance curto do alvo, este deve passar em um teste de Vontade ou ficar abalado. Se o espectro terminar seu turno adjacente ao alvo, este deve passar em um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com 0 PV, mas estável. O espectro persegue o alvo implacavelmente. Ele só desaparece se deixar seu alvo inconsciente, se for dissipado ou ao término da cena.',
    duration: 'Cena , até ser descarregada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    target: '1 criatura',
    resistence: 'Vontade parcial, Fortitude parcial'
  }, {
    id: 22,
    name: 'Augúrio',
    type: 'Divina',
    school: MagicSchools.Adivinhacao,
    circle: 2,
    description: 'Esta magia diz se uma ação que você tomará em breve — no máximo uma hora no futuro — trará resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 1 a 5 a magia funciona e você recebe uma das seguintes respostas: “felicidade” (a ação trará bons resultados); “miséria” (a ação trará maus resultados); “felicidade e miséria” (para ambos) ou “nada”(para ações que não trarão resultados bons ou ruins).Com um resultado 6, a magia falha e oferece o resultado “nada”. Não há como saber se esse resultado foi dado porque a magia falhou ou não. Lançar esta magia múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado. Por exemplo, se o grupo está prestes a entrar em uma câmara, o augúrio dirá “felicidade” se a câmara contém um tesouro desprotegido, “miséria” se contém um monstro, “felicidade e miséria” se houver um tesouro e um monstro ou “nada” se a câmara estiver vazia.+3 PM: muda a execução para 1 minuto. Em vez do normal, você pode consultar uma divindade, fazendo uma pergunta sobre um evento que acontecerá até um dia no futuro. O mestre rola a chance de falha; com um resultado de 1 a 5,você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso sempre oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma. Requer 3º círculo.+7 PM: muda a execução para 10 minutos e a duração para 1 minuto. Em vez do normal, você consulta uma divindade, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “não sei” (embora poderosos, os deuses não são oniscientes). O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é “não sei”. Requer 4º círculo.+7 PM: o mestre rola 1d12; a magia só falha em um resultado 12.+12 PM: o mestre rola 1d20; a magia só falha em um resultado 20.',
    duration: 'Instantânea',
    execution: MagicExecution.Completa,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 23,
    name: 'Aura Divina',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 5,
    description: 'Você se torna um condutor direto da energia de sua divindade, emanando uma aura brilhante da cor que escolher. Aliados dentro da área de efeito recebem +5 na Defesa e em testes de resistência (+10 se forem devotos da mesma divindade que você) e ficam imunes a efeitos de encantamento. Além disso, inimigos que entrem na área afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condição a sua escolha entre esmorecido, debilitado ou lento. O teste deve ser refeito cada vez que a criatura entrar novamente na área.+2 PM: aumenta os bônus na Defesa e em testes de resistência em +1.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Pessoal',
    resistence: 'Vontade Parcial'
  }, {
    id: 24,
    name: 'Aviso',
    type: 'Universal',
    school: MagicSchools.Adivinhacao,
    circle: 1,
    description: 'Você envia um alerta telepático para uma criatura, mesmo que não tenha linha de efeito. Escolha um dos efeitos. Alerta: o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena. Mensagem: o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo. Localização: o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá.+1 PM: aumenta o alcance em um fator de 10 (90m para 900m, 900m para9km e assim por diante).+1 PM: se escolher mensagem, o alvo pode enviar uma resposta de até 25 palavras para você até o fim de seu próximo turno.+2 PM: se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude deposição.+3 PM: aumenta o número de alvos em +1.',
    duration: 'Instantânea',
    execution: MagicExecution.Movimento,
    range: MagicRange.Longo,
    target: '1 criatura'
  }, {
    id: 25,
    name: 'Banimento',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 3,
    description: 'Você expulsa criaturas que não são naturais deste mundo. Um alvo nativo de outro mundo, como muitas criaturas do tipo espírito, é teletrans portado de volta para um lugar aleatório de seu mundo de origem. Já um alvo morto-vivo tem sua conexão com as energias negativas quase completamente rompida, sendo reduzido a 1d6 PV. Se passar na resistência, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas. Além disso, se você tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resistência aumenta em +2 por item. Por exemplo, se lançar a magia contra demônios do frio (vulneráveis a água benta e que odeiam luz e calor) enquanto segura um frasco de água benta e uma tocha acesa, a CD do teste de resistência aumenta em +4. O mestre decide se determinado item é forte o bastante contra a criatura para isso.+1 PM: aumenta o número de alvo sem +1. ',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Vontade parcial'
  }, {
    id: 26,
    name: 'Barragem Elemental de Vectorius',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 5,
    description: 'Criada pelo arquimago Vectorius, esta magia produz quatro esferas elementais diferentes (ácido, eletricidade, fogo e frio) que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano (cada uma do seu tipo) numa dispersão com 12m de raio. Um teste de Reflexos reduz o dano à metade. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência separado para cada uma. É possível mirar cada esfera em uma criatura ou ponto diferente. Além disso, a magia também temos seguintes efeitos:• Alvos que sofrerem dano de ácido ficam vulneráveis até o fim da cena.• Alvos que sofrerem dano elétrico ficam atordoados por 1 rodada.• Alvos que sofrerem dano de fogo ficam em chamas.• Alvos que sofrerem dano de frio ficam lentos até o final da cena. +5 PM: aumenta o dano de cada esfera em +2d6. +5 PM: muda o tipo de dano para essência. Demais efeitos continuam os mesmos.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    target: '1 criatura',
    resistence: 'Reflexos Parcial'
  }, {
    id: 27,
    name: 'Benção',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 1,
    description: 'Abençoa os alvos, que recebem +1 em testes de ataque e rolagens de dano. Bênção anula Perdição.+1 PM: muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo pela duração da magia.+2 PM: aumenta os bônus em +1.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: 'Criaturas escolhidas'
  }, {
    id: 28,
    name: 'Bola de Fogo',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 2,
    description: 'Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área.+2 PM: aumenta o dano em +2d6.+2 PM: muda a área para efeito de esfera de fogo com 3m de diâmetro e a duração para cena. Em vez do normal, cria uma esfera de fogo que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. A esfera é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada.+3 PM: muda a duração para 1 dia ou até ser descarregada. Em vez do normal, você cria uma pequena pedra flamejante, que pode detonar como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto. Uma vez detonada, causa o dano da magia numa área de esfera de 6m de raio.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: 'Esfera com 6m de raio',
    resistence: 'Refkexis reduz à metade'
  }, {
    id: 29,
    name: 'Buraco Negro',
    type: 'Universal',
    school: MagicSchools.Convocacao,
    circle: 5,
    description: 'Esta magia cria um vácuo capaz de sugar tudo nas proximidades, incluindo você. Escolha um quadrado desocupado para o buraco negro. No início de cada um de seus três turnos seguintes, todas as criaturas a até 90m do buraco negro devem fazer um teste de Fortitude; em caso de falha, ficam caídas e são puxadas 30m na direção do buraco. Objetos que não estejam presos também são puxados. Criaturas podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resistência. Criaturas e objetos que toquem o buraco negro são sugadas, desaparecendo para sempre. Não se conhece o destino das coisas sugadas pelo buraco negro, uma vez que jamais retornam. Alguns estudiosos sugerem que podem ser enviadas para outros mundos. Muitos clérigos de Tenebra acreditam que esta magia abre um portal para Sombria, o lar de sua deusa, e sonham um dia poder realizar essa jornada.+5 PM: muda o efeito para que você não seja afetado.+10 PM: muda o efeito para que criaturas escolhidas dentro do alcance não sejam afetadas.',
    duration: '3 rodadas',
    execution: MagicExecution.Completa,
    range: MagicRange.Longo,
    efect: 'Buraco Negro',
    resistence: 'Fortitude parcial'
  }, {
    id: 30,
    name: 'Caminhos da Natureza',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 1,
    description: 'Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil se estiverem em terrenos naturais. Truque: muda o alcance para pessoal e o alvo para você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar.+1 PM: além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10.+2 PM: aumenta o bônus de deslocamento em +3m. ',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: 'Criaturas escolhidas'
  }, {
    id: 31,
    name: 'Campo Antimagia',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 4,
    description: 'Você é cercado por uma barreira invisível com 3m de raio que acompanha seus movimentos. Qualquer magia ou efeito mágico que entre na área da barreira é anulado enquanto estiver lá. Criaturas convocadas que entrem em um Campo Antimagia desaparecem. Elas reaparecem na mesma posição quando a duração do Campo termina — supondo que a duração da magia que as convocou ainda não tenha terminado. Criaturas mágicas, como elementais, ou construtos imbuídos com magia durante sua criação, como golens, não são diretamente afetados pelo Campo Antimagia. Entretanto, como qualquer criatura, não poderão usar magias ou habilidades mágicas dentro dele. Dissipar Magia não anula um Campo Antimagia, e dois Campos na mesma área não se neutralizam. Artefatos e deuses maiores não são afetados por um Campo Antimagia.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 32,
    name: 'Campo de Força',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 2,
    description: 'Esta magia cria uma película protetora sobre você. Você recebe 30 PV temporários, mas apenas contra dano físico(corte, impacto ou perfuração).+1 PM: muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe resistência 30 contra o próximo dano físico que sofrer.+1 PM: aumenta os PV temporário sem +5 ou a resistência a dano em +10.+7 PM: muda o alcance para curto e o alvo para 1 criatura ou objeto Enorme ou menor. Em vez do normal, cria uma esfera imóvel e tremeluzente com 4,5m de diâmetro, centrada no alvo. Nenhum ataque ou efeito de dano é capaz de entrar ou sair da esfera, embora criaturas possam respirar normalmente. Criaturas na área podem fazer um teste de Reflexos para evitar serem aprisionadas. Requer 4º círculo.+9 PM: como o aprimoramento acima, mas também muda a duração para sustentada. Tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, você pode gastar uma ação livre para flutuar a esfera e seu conteúdo para qualquer local dentro de alcance longo. Requer 4º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 33,
    name: 'Camuflagem Ilusória',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 2,
    description: 'O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem.+3 PM: a imagem do alvo fica ainda mais distorcida, oferecendo camuflagem total.+7 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Requer 4º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 34,
    name: 'Chuva de Meteoros',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 5,
    description: 'Esta magia faz com que um meteoro caia dos céus, devastando a área de impacto e seus arredores. Criaturas na área sofrem 20d6 pontos de dano (metade impacto, metade fogo).+2 PM: criaturas que falhem no teste de resistência ficam caídas e presas sob os escombros (agarradas). Uma criatura presa pode escapar gastando uma ação padrão e passando em um teste de Atletismo. Toda a área afetada fica coberta de escombros, sendo considerada terreno difícil.+10 PM: aumenta o número de meteoros em +1. Os meteoros podem cair na mesma área, para acumular o dano (uma criatura atingida por dois meteoros, por exemplo, sofre 40d6 pontos de dano) ou em uma área diferente (mas ainda dentro do alcance) para afetar mais alvos.',
    duration: 'Instantânea',
    execution: MagicExecution.Completa,
    range: MagicRange.Longo,
    area: 'Explosão com 9m de raio',
    resistence: 'Reflexos reduz à metade'
  }, {
    id: 35,
    name: 'Círculo da Justiça',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 2,
    description: 'Também conhecida como Lágrimas de Hyninn, esta magia é usada em tribunais e para proteger áreas sensíveis. Criaturas na área sofrem –10 em testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir deliberadamente — mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omissões, por exemplo).Uma criatura que passe na resistência tem as penalidades reduzidas para –5 e pode mentir.+1 PM: muda a execução para ação padrão, o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, qualquer criatura ou objeto invisível em alcance curto se torna visível. Isso não anula o efeito mágico; se sair do seu alcance, a criatura ou objeto voltam a ficar invisíveis.+3 PM: muda a penalidade nas perícias para –10 (se passar na resistência)e –20 (se falhar). Requer 4º círculo. +7 PM: muda a duração para permanente e adiciona componente material(balança de prata no valor de T$ 5.000).',
    duration: '1 dia',
    execution: MagicExecution.Completa,
    range: MagicRange.Curto,
    target: '',
    resistence: 'Vontade parcial'
  }, {
    id: 36,
    name: 'Círuclo da Restauração',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 4,
    description: '',
    duration: '5 rodadas',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    area: 'Círculo de 3m de raio'
  }, {
    id: 37,
    name: 'Cólera de Azgher',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 4,
    description: 'Você cria uma explosão de luz dourada e intensa. Criaturas na área ficam cegas por 1d4 rodadas, pegam fogo e sofrem 10d6 pontos de dano de fogo(mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resistência não fica cega, não pega fogo e sofre metade do dano.+2 PM: aumenta o dano em +2d6(+2d8 contra mortos-vivos).+2 PM: aumenta a área em +6m de raio.+5 PM: a luz purificadora do Deus-Sola nula todas as magias de necromancia ativas na área. Requer 5º círculo.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    area: 'Esfera com 6m de raio',
    resistence: 'Reflexos parcial'
  }, {
    id: 38,
    name: 'Coluna de Chamas',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 3,
    description: 'Um pilar de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz nas criaturas e objetos livres na área.+1 PM: aumenta o dano de fogo em +1d6.+1 PM: aumenta o dano de luz em +1d6.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    area: 'Cilindro com 3m de raio',
    resistence: 'Reflexos redus à metade'
  }, {
    id: 39,
    name: 'Comandar',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 1,
    description: 'Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos. Caia: o alvo se joga no chão — ou cai, se estava pendurado em algo — e não se levanta até o próximo turno. Como esta é uma ação livre, ele ainda podef azer outras ações (exceto levantar-se).Fuja: o alvo gasta seu turno se afastando de você (usando todas as suas ações).Largue: o alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou).Pare: o alvo fica pasmo (não pode fazer ações, exceto reações).Venha: o alvo gasta seu turno se aproximando de você (usando todas as suas ações). +1 PM: muda o alvo para 1 criatura.+2 PM: aumenta a quantidade de alvos em +1.',
    duration: '1 rodada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 humanoide',
    resistence: 'Vontade anula'
  }, {
    id: 40,
    name: 'Compreensão',
    type: 'Universal',
    school: MagicSchools.Adivinhacao,
    circle: 1,
    description: 'Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos. Você também pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada (você “ouve” o que o alvo está pensando), mas um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.+1 PM: muda o alcance para curto.+2 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez.+2 PM: muda o alvo para 1 criatura. Em vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura. Requer 2º círculo.+5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma. Requer 3º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura ou texto',
    resistence: 'Vontade anula'
  }, {
    id: 41,
    name: 'Comunhão da Natureza',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 3,
    description: 'Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia em áreas naturais, você pode gastar qualquer quantidade desses d4 e adicionar o resultado rolado como bônus no teste. A magia termina se você ficar sem dados.+1 PM: muda a execução para 1 minuto e a duração para instantânea. Em vez do normal, você descobre 1d4+1 informações sobre os seguintes temas: terreno, animais, vegetais, minerais, cursos d’água e presença de criaturas antinaturais numa região natural em que você esteja. Você pode, por exemplo, descobrir a quantidade de cavernas (terreno), se uma planta rara existe (vegetais) e se há mortos-vivos(criaturas antinaturais) na região.+3 PM: aumenta o número de dados de auxílio em +2.+4 PM: muda o tipo dos dados de auxílio para d6.+8 PM: muda o tipo dos dados de auxílio para d8.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    area: 'cilindro com 3m de raio e 30m de altura',
    resistence: 'Reflexos reduz à metade'
  }, {
    id: 42,
    name: 'Conceder Milagre',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 4,
    description: 'Você transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de até 2º círculo que você conheça; o alvo pode lançar essa magia uma vez, sem pagar o custo base dela em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus próprios PM). Você sofre uma penalidade de –3 PM até que o alvo lance a magia que ganhou.+4 PM: muda o círculo da magia concedida para 3º e a penalidade de PM para –6.',
    duration: 'Permanente até ser descarregada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 43,
    name: 'Concentração de Combate',
    type: 'Arcana',
    school: MagicSchools.Adivinhacao,
    circle: 1,
    description: 'Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um ataque, você rola dois dados e usa o melhor resultado.+2 PM: muda a execução para padrão e a duração para cena.+5 PM: além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado.+9 PM: muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena. +14 PM: muda a execução para padrão e a duração para cena. Além do normal, você recebe um sexto sentido que avisa-o de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 em Defesa e Reflexos.',
    duration: '1 rodada',
    execution: MagicExecution.Livre,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 44,
    name: 'Condição',
    type: 'Divina',
    school: MagicSchools.Adivinhacao,
    circle: 2,
    description: 'Pela duração da magia, você sabe a posição e condição (PV atuais, se estão sobe feito de magia...) das criaturas escolhidas. Depois de lançada, a distância entre você e os alvos não importa — a magia só deixa de detectar um alvo se ele morrer ou viajar para outro plano.+1 PM: aumenta o número de alvo sem +1.+1 PM: aumenta a duração para 1 dia',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: 'Até 5 criaturas'
  }, {
    id: 45,
    name: 'Conjurar Elemental',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 4,
    description: 'Essa magia transforma uma porção de um elemento inerte em uma criatura elemental Grande do tipo do elemento alvo. Por exemplo, lançar esta magia numa fogueira ou tocha cria um elemental do fogo. Você pode criar elementais do ar, água, fogo e terra com essa magia. O elemental obedece a todos os seus comandos e pode funcionar como um aliado mestre do tipo destruidor (mas sem custo em PM) e mais um tipo entre os indicados na lista abaixo. Somente você pode ser auxiliado pelo elemental. Ar: assassino, perseguidor ou vigilante. Dano de eletricidade. Água: ajudante, curandeiro ou guardião. Dano de frio. Fogo: atirador, combatente ou fortão. Dano de fogo. Terra: combatente, guardião ou montaria. Dano de impacto.+5 PM: o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento. +5 PM:  muda o tempo de execução para ação completa. Você pode convocar um elemental de cada tipo e ordenar que auxiliem você ou seus aliados. Requer 5º círculo.',
    duration: 'Sustentada',
    execution: MagicExecution.Completa,
    range: MagicRange.Medio,
  }, {
    id: 46,
    name: 'Conjurar Monstro',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 1,
    description: 'Esta magia conjura um monstro Pequeno que ataca seus inimigos. Você escolhe a aparência do monstro e o tipo de dano físico que ele pode causar, entre corte, impacto e perfuração. No entanto, ele não é uma criatura real, e sim um construto feito de energia. Se for destruído, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para trás. Você só pode ter um monstro conjurado por esta magia por vez. O monstro surge em um ponto escolhido por você dentro do alcance e pode agir no começo do seu próximo turno, sempre na sua iniciativa. O monstro tem deslocamento 9m e pode fazer uma ação de movimento por rodada. Você pode usar uma ação padrão para dar uma das seguintes ordens a ele. Mover: o monstro se movimenta o dobro do deslocamento nessa rodada. Atacar: o monstro ataca um alvo em alcance corpo a corpo. O ataque acerta automaticamente e causa 2d4+2 pontos de dano. Lançar Magia: o monstro pode servir como ponto de origem para uma magia lançada por você com execução de uma ação padrão ou menor. Ele pode descarregar um Toque Chocante em um inimigo distante, ou mesmo “cuspir” uma Bola de Fogo! Você gasta PM normalmente para lançar a magia. Outros usos criativos para monstros conjurados ficam a critério do mestre. O monstro não age sem receber uma ordem. Para efeitos de jogo, o monstro conjurado tem For 14, Des 17 e todos os outros atributos nulos. Ele tem 20 pontos de vida, não tem um valor de Defesa(ataques feitos contra ele acertam automaticamente) e usa o seu bônus para teste de Reflexos. Ele é imune a efeitos que pedem um teste de Fortitude ou Vontade.+1 PM: o monstro ganha deslocamento de escalada ou natação igual ao seu deslocamento.+1 PM: aumenta o deslocamento do monstro em +3m.+1 PM: muda o tipo de dano do ataque do monstro para ácido, fogo, frio ou eletricidade.+2 PM: o monstro ganha percepção às cegas.+2 PM: aumenta os PV do monstro em +10 para cada categoria de tamanho a partir de Pequeno (+10 PV para Pequeno, +20 PV para Médio etc.).+2 PM: aumenta o tamanho do monstro para Médio. Ele tem For 18, Des16, 45 PV, deslocamento 12m e seu ataque causa 2d6+4 pontos de dano.+2 PM: o monstro ganha resistência 5contra dois tipos de dano (por exemplo, corte e frio).+4 PM: o monstro ganha uma nova ordem: Arma de Sopro. O monstro causa o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz à metade).+5 PM: aumenta o tamanho do monstro para Grande. Ele tem For 24, Des14, 75 PV, deslocamento 12m e seu ataque causa 3d6+7 pontos de dano com 3m de alcance. Requer 2º círculo.+9 PM: o monstro ganha deslocamento de voo igual ao dobro do deslocamento.+9 PM: o monstro ganha imunidade contra dois tipos de dano.+9 PM: aumenta o tamanho do monstro para Enorme. Ele tem For 32, Des12, 110 PV, deslocamento 15m e seu ataque causa 4d6+11 pontos de dano com 4,5m de alcance. Requer 4º círculo.+14 PM: aumenta o tamanho do monstro para Colossal. Ele tem For 41,Des 10, 180 PV, deslocamento 15m e seu ataque causa 6d6+15 de dano com9m de alcance. Requer 5º círculo.',
    duration: 'Sustentada',
    execution: MagicExecution.Completa,
    range: MagicRange.Curto,
  }, {
    id: 47,
    name: 'Conjurar Mortos-Vivos',
    type: 'Universal',
    school: MagicSchools.Necromancia,
    circle: 2,
    description: 'Seis esqueletos de tamanho Médio feitos de energia negativa emergem do chão em espaços desocupados escolhidos por você dentro do alcance. Você pode usar uma ação de movimento para fazer os mortos-vivos andarem (eles têm deslocamento 9m) ou uma ação padrão para fazer com que ataquem criaturas adjacentes, causando 1d6+2 pontos de dano de trevas. Os esqueletos têm For 14, Des 14 e todos os outros atributos nulos; eles têm 6 PV, não têm valor de Defesa ou testes de resistência(qualquer efeito os acerta automaticamente) e são imunes a atordoamento, dano não letal, doença, encantamento, fadiga, frio, ilusão, paralisia, sono e veneno. Eles desaparecem quando sofrem dano ou no fim da cena. Os mortos-vivos não agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a critério do mestre.+2 PM: aumenta o número de mortos vivos conjurados em +1.+3 PM: em vez de esqueletos, conjura carniçais. Requer 3º círculo.+7 PM: em vez de esqueletos, conjura sombras. Requer 4º círculo. Carniçal: como o esqueleto, mas tem For 16, Des 16, 12 PV e causa 1d8+3pontos de dano de trevas mais 1d8pontos de dano de veneno. Além disso, criaturas atingidas por um carniçal devem passar num teste de Fortitude (CD igual à da magia) ou ficam paralisadas por 1 rodada. Uma criatura que passe no teste de resistência fica imune à paralisia dos carniçais por 24 horas. Sombra: como o esqueleto, mas tem a habilidade incorpóreo, Des 18, 30 PV e causa 1d10 pontos de dano de trevas mais 1d10 pontos de dano de frio. Além disso, criaturas vivas atingidas por uma sombra devem passar num teste de Fortitude (CD igual à da magia) ou perdem 1d4 PM. Sombras perdem a habilidade incorpóreo quando expostas à luz do sol.',
    duration: 'Sustentada',
    execution: MagicExecution.Completa,
    range: MagicRange.Curto
  }, {
    id: 48,
    name: 'Consagrar',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 1,
    description: 'Esta magia enche a área com energia positiva. Magias e efeitos de luz que curam pontos de vida ou canalizam energia positiva têm seus efeitos maximizados. Por exemplo, Curar Ferimentos cura automaticamente 18 pontos devida. Esta magia não pode ser lançada em uma área contendo um símbolo dedicado a qualquer divindade, exceto a sua. Consagrar anula Profanar.+1 PM: além do normal, mortos-vivos na área sofrem –2 em testes e Defesa.+2 PM: aumenta as penalidades para mortos-vivos em –1.+9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    area: 'Esfera com 9m de raio'
  }, {
    id: 49,
    name: 'Contrato Extraplanar',
    type: 'Arcana',
    school: MagicSchools.Adivinhacao,
    circle: 3,
    description: 'Sua mente viaja até outro plano de existência, onde entra em contato com seres extraplanares como gênios, demônios ou elementais. Você firma um contrato com uma dessas entidades para que o auxilie durante o dia, em troca de se alimentar de seu mana. Quando a magia é lançada, você recebe 6d6 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia, você pode gastar qualquer quantidade desses d6 e adicionar o resultado rolado como bônus no teste. No entanto, esse auxílio tem um preço: sempre que rolar um “6” num desses d6, a entidade “suga” 1 PM de você. A magia termina quando você ficar sem dados para rolar, sem PM ou no fim do dia (o que acontecer primeiro).+2 PM: aumenta o número de dados de auxílio em +1.+8 PM: Muda os dados de auxílio para d12. Sempre que rolar um resultado 12 num desses d12, a entidade “suga” 2PM de você. Requer 4º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Completa,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 50,
    name: 'Controlar a Gravidade',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 4,
    description: 'Você controla os efeitos da gravidade dentro da área. Ao lançar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, você pode usar uma ação padrão para mudar o efeito. Aumentar: a gravidade fica mais forte. No início de seus turnos, cada criatura na área deve fazer um teste de Força. Se passar, fica fatigada. Se falhar, fica fatigada e caída. Inverter: inverte a gravidade da área,f azendo com que criaturas e objetos “caiam” para cima, atingindo o topo(12m) em uma rodada. Se um obstáculo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6pontos de dano para cada 1,5m de“queda”. Elas podem então se levantar e caminhar no obstáculo, de cabeça para baixo. Se não houver obstáculo, as criaturas e objetos ficam flutuando no topo da área afetada, sem poder sair do lugar. Criaturas voadoras podem se movimentar normalmente. Alguém adjacente a algo que possa agarrar tem direito a um teste de Reflexos para evitar a “queda”. A criatura deve permanecer presa pela duração da magia; caso contrário “cairá”. Reduzir: a gravidade fica mais leve. Criaturas ou objetos livres com até 100kg flutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na área recebem +20 de bônus em testes de Atletismo para escalar e saltar. Uma criatura levitando fica instável, sofrendo –2 de penalidade em testes de ataque.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    area: 'Cubo de 12m de lado'
  }, {
    id: 51,
    name: 'Controlar Água',
    type: 'Divina',
    school: MagicSchools.Transmutacao,
    circle: 3,
    description: 'Você pode controlar os movimentos e comportamentos da água. Ao lançar a magia, escolha um dos efeitos abaixo. Congelar: toda a água mundana na área é congelada. Criaturas nadando na área ficam presas; escapar exige gastar uma ação padrão e passar num teste de Atletismo ou Acrobacia. Derreter: todo o gelo mundano na área vira água. A critério do mestre, isso pode criar terreno difícil. Enchente: eleva o nível de toda água mundana na área em até 4,5m. A sua escolha, uma embarcação pode receber um bônus de +3m em seu deslocamento pela duração do efeito. Evaporar: toda a água e gelo mundano na área evaporam instantaneamente e a magia termina. Elementais da água, plantas monstruosas e criaturas com imunidade a frio na área sofrem 10d8 pontos de dano de fogo; outras criaturas vivas recebem metade desse dano(Fortitude reduz à metade).Partir: diminui o nível de toda água mundana na área em até 4,5m. Em um corpo d’água raso, isso abre um caminho seco, que pode ser atravessado a pé. Em um corpo d’água profundo, cria um redemoinho que pode prender barcos (um teste de Navegação com CD igual à da magia permite ao piloto escapar). Elementais da água na área ficam lentos.+2 PM: aumenta o dano em +2d8',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    target: 'Esfera com 30m de raio',
    resistence: ''
  }, {
    id: 52,
    name: 'Controlar Fogo',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 2,
    description: 'Você pode criar, moldar, mover ou extinguir chamas e emanações de calor. Ao lançar a magia, escolha um dos efeitos. Chamejar: o alvo é armas escolhidas. Elas recebem o poder mágico flamejante (causam +1d6 de dano de fogo).Também afeta armas naturais e ataques desarmados. Esquentar: o alvo é 1 objeto que começa a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer criatura que o esteja segurando ou vestindo. A critério do mestre, o objeto ou a criatura vestindo-o também podem pegar fogo. Uma criatura pode gastar uma ação completa para resfriar o objeto (jogando água ou areia, por exemplo) e cancelar o efeito da magia. Extinguir: o alvo é 1 chama, que é completamente apagada. Isso cria uma nuvem de fumaça que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fumaça, criaturas têm camuflagem. Modelar: o alvo é 1 chama. A cada rodada, você pode gastar uma ação livre para movimentá-la 9m em qualquer direção. Se atravessar o espaço ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura só pode receber dano dessa maneira uma vez por rodada.+1 PM: muda a duração para sustentada e a resistência para Reflexos reduz à metade. Em vez do normal, você deve escolher o seguinte efeito. Labaredas: a cada rodada, você pode gastar uma ação livre para projetar uma labareda, acertando um alvo em alcance curto a partir da chama. O alvo sofre 4d6 pontos de dano de fogo (Reflexos reduz à metade).+2 PM: aumenta o dano em +1d6.+3 PM: muda o alvo para 1 criatura composta principalmente por fogo, lava ou magma (como um elemental do fogo) e a resistência para Fortitude parcial. Em vez do normal, se a criatura falhar no teste de resistência, é reduzida a 0 PV. Se passar, sofre 5d6pontos de dano.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: ''
  }, {
    id: 53,
    name: 'Controlar Madeira',
    type: 'Divina',
    school: MagicSchools.Transmutacao,
    circle: 2,
    description: 'Você molda, retorce, altera ou repele madeira. Ao lançar a magia, escolha. Fortalecer: você deixa o alvo mais resistente. Armas têm seu dano aumenta do em um passo. Escudos têm seu bônus de Defesa aumentado em +2. Além disso, estes e outros itens de madeira recebem +5 na RD e dobram seus PV. Modelar: você muda a forma do alvo. Pode transformar um galho em espada, criar uma porta onde antes havia apenas uma parede, transformar um tronco em uma caixa... Mas não pode criar mecanismos complexos (como uma besta) ou itens consumíveis. Repelir: você emana uma força que impede o alvo de se aproximar. Se for uma arma, ataques feitos com ela contra você falham automaticamente. Se for uma porta ou outro objeto que possa ser aberto, ele vai se abrir quando você se aproximar, mesmo que esteja trancado. Uma carroça ou outro objeto que vá atingi-lo, como um tronco caindo ou barril, vai desviar ou simplesmente parar adjacente a você, sem lhe causar dano. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre. Retorcer: você torna o alvo imprestável. Uma porta retorcida emperra (exigindo um teste de Força contra CD25 para ser aberta). Armas e itens retorcidos impõem uma penalidade de –5 em testes de perícia. Escudos retorcidos deixam de oferecer qualquer bônus (mas ainda impõem penalidades). Um barco retorcido afunda até o final da cena. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.+1 PM: muda o alcance para pessoal, o alvo para você e a duração para 1dia. Você e seu equipamento se transformam em uma árvore de tamanho Grande. Nessa forma, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Se for atacado nessa forma, a magia é anulada. Um teste de Sobrevivência (CD 30) revela que você não é uma árvore verdadeira.+3 PM: muda o alvo para área de quadrado com 9m de lado e a duração para cena. Em vez do normal, qualquer vegetação na área fica rígida e afiada. A área é considerada terreno difícil e criaturas que andem nela sofrem 1d6pontos de dano para cada 1,5m que avancem.+7 PM: muda o alvo para objeto de madeira Enorme ou menor. Requer 3ºcírculo.+12 PM: muda o alvo para objeto de madeira Colossal ou menor. Requer 4ºcírculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: ' 1 objeto de madeira Grande ou menor'
  }, {
    id: 54,
    name: 'Controlar o Clima',
    type: 'Divina',
    school: MagicSchools.Transmutacao,
    circle: 4,
    description: 'Você muda o clima da área onde se encontra, podendo criar qualquer condição climática: chuva, neve, ventos, névoas...+1 PM (Apenas Druidas): muda o raio da área para 3km e duração para1d4 dias',
    duration: '4d12 horas',
    execution: MagicExecution.Completa,
    range: MagicRange.Doiskm,
    area: 'Círculo com 2km de raio centrado em você'
  }, {
    id: 55,
    name: 'Controlar o Tempo',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 5,
    description: 'Aquele que controla o tempo controla o mundo. Escolha um dos efeitos a seguir. Congelar o tempo: você entra em um estado atemporal que faz todas as criaturas e efeitos parecerem congelados. Você pode agir livremente por 3 rodadas de tempo aparente. Durante essas rodadas, efeitos contínuos não o afetam, mas criaturas e objetos em posse de criaturas ficam imunes a seus ataques e magias. Magias de área e com duração maior que este efeito vão agir normalmente quando a aceleração acabar. Este efeito costuma ser usado para fortalecer suas defesas e invocar criaturas. Saltar no tempo: você e até 5 criaturas voluntárias são transportadas de 1 a 24 horas para o futuro, desaparecendo com um brilho. Vocês ressurgem no mesmo lugar, com a mesma velocidade e orientação; do seu ponto de vista, nenhum tempo se passou. Se um objeto sólido agora ocupa o espaço de uma criatura, ela ressurge na área vazia mais próxima .Voltar no tempo: você revive os últimos segundos. Todas as ações da rodada anterior são desfeitas (incluindo perda de PV e PM). Tudo retorna à posição em que estava no início do seu turno na última rodada e você é o único que sabe o que acontecerá. Todos os outros personagens envolvidos na cena devem repetir as mesmas ações, mas você pode avisar seus aliados sobre o que vai acontecer.',
    duration: '',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: ''
  }, {
    id: 56,
    name: 'Controlar Plantas',
    type: 'Divina',
    school: MagicSchools.Transmutacao,
    circle: 1,
    description: 'Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam enredadas. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo (CD igual à da magia). Além disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Truque: muda a área para alvo de 1 planta e a resistência para nenhuma. Em vez do normal, você pode fazer a planta se mover como se fosse animada. Ela não pode causar dano ou atrapalhara concentração de um conjurador.+1 PM: muda a duração para instantânea. Em vez do normal, as plantas na área diminuem, como se tivessem sido podadas. Terreno difícil muda para terreno normal e não oferece camuflagem. Esse efeito anula o uso normal de Controlar Plantas.+1 PM: além do normal, criaturas que falhem na resistência também ficam presas.+2 PM: muda o alcance para pessoal, a área para alvo (você) e a resistência para nenhuma. Em vez do normal, você consegue se comunicar com plantas, que começam com atitude prestativa ao lidar com você. Além disso, você pode fazer testes de Diplomacia com plantas. Em geral, plantas têm uma percepção limitada de seus arredores e normalmente fornecem respostas simplórias.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    area: 'Quadrado com 9m de lado',
    resistence: 'Reflexos Anula'
  }, {
    id: 57,
    name: 'Controlar Terra',
    type: 'Divina',
    school: MagicSchools.Transmutacao,
    circle: 3,
    description: '',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    area: '9 cubos com 1.5m de lado',
    resistence: ''
  }, {
    id: 58,
    name: 'Convocação Instantânea',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 3,
    description: 'Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com uma runa ou marca pessoal sua (ao custo de T$ 5).A magia não funciona se o objeto estiver com outra criatura, mas você saberá onde ele está e quem o está carregando (ou sua descrição física, caso não conheça a criatura).+1 PM: além do normal, até 1 hora depois que lançou a magia, você pode gastar uma ação de movimento para enviar o objeto de volta para o local em que ele estava antes.+1 PM: muda o alvo para um baú Médio, a duração para permanente e adiciona sacrifício de 1 PM. Em vez do normal, você esconde um baú no Etéreo, com até 250kg de equipamento. A magia faz com que qualquer objeto caiba no baú, independentemente do seu tamanho. Uma vez escondido, você pode convocar o baú para um espaço livre adjacente a qualquer momento, como uma ação padrão. Componente material: baú construído com matéria-prima da melhor qualidade (T$ 1.000).Você deve ter em mãos uma miniatura do baú, no valor de T$ 100, para invocar o baú verdadeiro.+2 PM: aumenta o número de alvo sem +1.+2 PM: aumenta o peso limite do alvo em um fator de 10, até 500 kg. Um objeto muito grande ou pesado para aparecer em suas mãos é teletransportado para um espaço adjacente a sua escolha.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Ilimitado,
    target: '1 objeto de até 5kg'
  }, {
    id: 59,
    name: 'Crânio Voador de Vladislav',
    type: 'Arcana',
    school: MagicSchools.Necromancia,
    circle: 2,
    description: 'Esta magia cria um crânio humano envolto em energia negativa, que causa 4d8+4 pontos de dano de trevas quando atinge o alvo e se desfaz emitindo um som horrendo, podendo deixar abalados todos os inimigos num raio de 3m. Passar no teste de resistência diminui o dano pela metade e evita a condição abalado. Alvos que já estiverem abalados e falharem no teste ficam apavorados por 1d4 rodadas.+1 PM: aumenta o dano em +1d8+1.+2 PM: aumenta o número de alvo sem +1.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura',
    resistence: 'Fortitude reduz à metade'
  }, {
    id: 60,
    name: 'Criar Elementos',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 1,
    description: 'Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, pode se criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra. Água: enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo. Ar: cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada. Fogo: cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, pega fogo.T erra: cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra.+1 PM: aumenta a quantidade do elemento em um passo (uma categoria de tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo).+1 PM: muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher água ou terra, você arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O cubo se desfaz em seguida.+2 PM: se escolheu fogo, aumenta o dano inicial de cada chama em +1d6.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    efect: 'Elemento Escolhido'
  }, {
    id: 61,
    name: 'Criar ilusão',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 1,
    description: 'Esta magia cria uma ilusão visual ou sonora: uma criatura, uma parede, um grito de socorro, um uivo assustador...A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é anulada se você sair do alcance.+1 PM: muda a duração para sustentada. A cada rodada você pode usar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar.+1 PM: aumenta o efeito da ilusão em +1 cubo de 1,5m.+1 PM: também pode criar ilusões de imagem e sons combinados.+1 PM: também pode criar sons complexos com volume máximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma ação livre, você pode alterar o volume do som ou fazê-lo se aproximar ou se afastar dentro do alcance.+2 PM: muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10.+2 PM: também pode criar odores e sensações térmicas, que são percebidos a uma distância igual ao dobro do tamanho máximo do efeito. Por exemplo, uma miragem de uma fogueira com 4 cubos de 1,5m poderia emanar calor e cheiro de queimado a até 12m. +2 PM: também pode criar sensações táteis, como texturas; objetos ainda atravessam a ilusão, mas criaturas não conseguem atravessá-la sem passarem um teste de Vontade. A ilusão ainda é incapaz de causar ou sofrer dano. Requer 2º círculo.+5 PM: muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modificar livremente a ilusão, mas não pode acrescentar novos aprimoramentos. Requer 3º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    efect: 'Ilusão que se estende a até 4 cubos de 1,5m',
    resistence: 'Vontade Desacredita'
  }, {
    id: 62,
    name: 'Cúpula de Repulsão',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 4,
    description: 'Uma cúpula de energia invisível o cerca, impedindo a aproximação de certas criaturas. Escolha um tipo de criatura com uma limitação específica, como animais mamíferos, monstros insetoides ou mortos-vivos corpóreos; ou uma raça, como elfos, goblins ou minotauros. Criaturas com o tipo e a limitação escolhidos (ou com a raça escolhida) não podem se aproximar a até 3m de você. Isso detém ataques corpo a corpo, mas não ataques à distância ou magias. Se você tentar se aproximar além do limite de 3m, rompe a cúpula e a magia é anulada.+1 PM: você pode se aproximar sem romper a cúpula.+4 PM: você não precisa escolher uma limitação do tipo de criaturas que não pode se aproximar.+8 PM: muda a duração para sustentada. Além do normal, qualquer ataque, magia ou habilidade de uma criatura afetada é desviado pelo efeito e não o atinge. Requer 5º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 63,
    name: 'Curar Ferimentos',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 1,
    description: 'Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada. Como mortos-vivos usa energia negativa, esta magia causa dano de luz a eles. Curar Ferimentos anula Infligir Ferimentos. Truque: em vez do normal, estabiliza uma criatura. Truque: muda o alvo para 1 morto-vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade).+1 PM: aumenta a cura em +1d8+1. +2 PM: também remove uma condição de fadiga do alvo. +2 PM: muda o alcance para curto.+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 64,
    name: 'Deflagração de Mana',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 5,
    description: 'Após concentrar seu mana, você explode em dano de essência, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos(exceto artefatos) deixam de funcionar permanentemente. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem apenas metade do dano (75) e seus itens mágicos voltam a funcionar depois de um dia.+1 PM: aumenta o dano em 10.+5 PM: afeta apenas criaturas a sua escolha.',
    execution: MagicExecution.Completa,
    range: MagicRange.Pessoal,
    area: 'Explosão de 15m de raio',
    resistence: 'Fortitude Parcial'
  }, {
    id: 65,
    name: 'Desejo',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 5,
    description: 'Esta é a mais poderosa das magias arcanas, permitindo alterar a realidade a seu bel-prazer. Com um Desejo você pode:• Duplicar qualquer magia arcana de 4º círculo ou menor.• Criar um item mundano no valor de até T$ 25.000.• Conceder a uma criatura um bônus permanente de +1 em um atributo. Um mesmo atributo pode ser aumentado em até +5 com essa magia.• Desfazer os efeitos nocivos de qualquer magia de 4º círculo ou menor.• Curar todos os PV e todas as condições de até 10 criaturas.• Transportar até 10 criaturas de qualquer local para qualquer outro local, em qualquer plano, independente das condições. Um alvo não voluntário pode tentar um teste de Vontade para evitar o efeito.• Desfazer um acontecimento recente. A magia permite que um teste realizado na última rodada seja realizado novamente. Por exemplo, se um aliado morreu na última rodada devido ao ataque de um inimigo, você pode obrigar o inimigo a refazer esse ataque. Desejo pode gerar efeitos ainda mais poderosos, mas tenha cuidado! Desejar afortuna de um rei pode transportá-lo para a sala de tesouro real, onde você será preso ou morto; desejar ser imortal pode transformá-lo em morto-vivo, e assim por diante. Qualquer efeito que não encaixe na lista acima deve ser decidido pelo mestre. Caso a magia duplicada precise de um componente material para ser lançada, ainda é necessário providenciar o componente. Custo Adicional: sacrifício de 1 PM.',
    duration: '',
    execution: MagicExecution.Completa,
    target: '',
    resistence: ''
  }, {
    id: 66,
    name: 'Desespero Esmagador',
    type: 'Arcana',
    school: MagicSchools.Encantamento,
    circle: 2,
    description: 'Humanoides na área são acometidos de grande tristeza, adquirindo as condições fraco e frustrado. Se passarem na resistência, adquirem esta condição por uma rodada.+2 PM: em vez do normal, as condições adquiridas são debilitado e esmorecido.+3 PM: em vez do normal, afeta qualquer tipo de criatura.+3 PM: além do normal, criaturas que falhem na resistência ficam aos prantos (em termos de regras, adquirem a condição pasmo) por 1 rodada. Requer 3º círculo.',
    duration: 'cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Seismetro,
    area: 'Cone'
  }, {
    id: 67,
    name: 'Desintegrar',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 4,
    description: 'Você dispara um raio fino e esverdeado que causa 10d12 pontos de dano de essência. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano. Independentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele será completamente desintegrado, restando apenas pó.+4 PM: aumenta o dano total em+2d12 e o dano mínimo em +1d12',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura ou objeto',
    resistence: 'Fortitude Parcial'
  }, {
    id: 68,
    name: 'Despedaçar',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 1,
    description: 'Esta magia emite um som alto e agudo. Se o alvo é uma criatura, sofre 1d8+2 pontos de dano e fica atordoado por uma rodada (Fortitude reduz o dano à metade e evita o atordoamento). Construtos sofrem dano dobrado por essa magia. Se o alvo é um objeto, é destruído (Reflexos anula).+2 PM: aumenta o dano em +1d8+2.+2 PM: muda o alvo para objeto mundano Médio. Requer 2º círculo.+5 PM: muda o alvo para objeto mundano Grande. Requer 3º círculo.+9 PM: muda o alvo para objeto mundano Enorme. Requer 4º círculo.+14 PM: muda o alvo para objeto mundano Colossal. Requer 5º círculo.+5 PM: muda o alcance para pessoal e a área para explosão de 6m de raio. Todas as criaturas e objetos na área são afetados.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura ou objeto mundano pequeno',
    resistence: 'Fortitude parcial ou Reflexos anula'
  }, {
    id: 69,
    name: 'Despertar Consciência',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 3,
    description: 'Você desperta a consciência de um animal ou planta, que passa a ajudá-lo. O alvo se torna um aliado veterano de um tipo a sua escolha entre combatente, conselheiro, curandeiro, fortão, guardião, montaria ou perseguidor. Se usar esta magia em um aliado que já possua, seu nível de poder aumenta em um passo (iniciante para veterano para mestre). Se já for um aliado mestre, fornece um bônus adicional de outro tipo de aliado iniciante (entre as escolhas acima). O alvo ganha Inteligência 3d6, +1d4 de Carisma e pode falar os idiomas que você conhece. Se não quiser ter o alvo como aliado, você pode pedir que ele proteja um local específico, atacando invasores (nesse caso, use as estatísticas apropriadas à criatura; plantas usam as estatísticas de entes).+4 PM: muda o alvo para 1 escultura mundana inanimada. Além do normal, o alvo tem as mesmas características de um construto.+4 PM: muda a duração para permanente e adiciona sacrifício de 1 PM.',
    duration: '1 dia',
    execution: MagicExecution.Completa,
    range: MagicRange.Toque,
    target: '1 animal ou planta'
  }, {
    id: 70,
    name: 'Detectar Ameaças',
    type: 'Divina',
    school: MagicSchools.Adivinhacao,
    circle: 1,
    description: '+0 PM: em vez de criaturas, você percebe a presença e localização devenenos.+1 PM: muda a execução para ação completa. Você descobre também a raça ou espécie e o poder das criaturas (determinado pela aura). Criaturas de 1º a 6º nível geram uma aura tênue, criaturas de 7º a 12º nível geram uma aura moderada e criaturas de 13º ao 20º nível geram uma aura poderosa. Criaturas acima do 20º nível geram uma aura avassaladora.+2 PM: em vez de criaturas, você percebe a presença e localização dearmadilhas.+5 PM: muda a área para esfera de30m de raio. Requer 3º círculo.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    area: 'Esfera de 9m de raio'
  }, {
    id: 71,
    name: 'Dificultar Detecção',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 3,
    description: 'Esta magia oculta a presença do alvo contra qualquer meio mágico de detecção, inclusive detectar magia. Um conjurador que lance uma magia de adivinhação para detectar a presença ou localização do alvo deve fazer um teste de Vontade. Se falhar, a magia não funciona, mas os PM são gastos mesmo assim. Se for lançada sobre uma criatura, Dificultar Detecção protege tanto a criatura quanto seu equipamento.+4 PM: muda o alvo para área de cubo de 9m. Qualquer criatura ou objeto na área recebe o efeito da magia enquanto estiver dentro dela.+4 PM: muda a duração para 1 semana.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura ou objeto'
  }, {
    id: 72,
    name: 'Disfarce Ilusório',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 1,
    description: 'Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará suas habilidades), nem modifica o equipamento (uma espada longa disfarçada como um bordão continua funcionando e causando dano como uma espada).Truque: muda o alcance para toque, o alvo para 1 criatura e a duração para1 semana. Em vez do normal, você faz uma pequena alteração na aparência do alvo, como deixar o nariz vermelho ou fazer brotar um singelo gerânio no alto da cabeça. A mudança é inofensiva, mas persistente — se a flor for arrancada, por exemplo, uma nova flor nascerá no local.+1 PM: muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito comum teste de Vontade.+1 PM: muda o alcance para curto e o alvo para 1 objeto. Você pode, por exemplo, transformar pedaços de ferro em moedas de ouro. Você recebe +10 em testes de Enganação para falsificação.+2 PM: a ilusão também inclui odores e sensações. Isso muda o bônus em testes de Enganação para disfarce para+20.+3 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência diferente. Criaturas involuntárias podem anular o efeito com um teste de Vontade. Requer 2º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você',
    resistence: 'Vontade Desacredita'
  }, {
    id: 73,
    name: 'Dispersar as Trevas',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 3,
    description: 'Esta magia cria um forte brilho (de uma cor que remete a sua divindade) que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são anuladas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área recebem +4 em testes de resistência e resistência a trevas 10 até o fim da cena, protegidos por uma aura sutil da mesma cor. Inimigos na área ficam cegos por 1d4 rodadas. Dispersar as Trevas anula Anular a Luz.+2 PM: aumenta o bônus nas resistências em +1.+4 PM: muda a área para alvo 1 criatura e a duração para cena. O alvo fica imune a efeitos de necromancia e trevas.+4 PM: muda o círculo máximo de magias dissipadas para 4º. Requer 4ºcírculo.+9 PM: muda o círculo máximo de magias dissipadas para 5º. Requer 5ºcírculo.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    area: 'Esfera de 6m de raio'
  }, {
    id: 74,
    name: 'Dissipar Magia',
    type: 'Universal',
    school: MagicSchools.Abjuracao,
    circle: 2,
    description: 'Esta magia anula outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...). Se lançar essa magia em uma criatura ou área, faça um teste de Misticismo; você anula as magias com CD igual ou menor que o resultado do teste. Se lançada contra um item mágico, ela o transforma em um item mundano por 1d6 rodadas.+12 PM: muda a área para esfera com9m de raio. Em vez do normal, cria um efeito de disjunção. Todas as magias na área são automaticamente dissipadas e todos os itens mágicos na área, exceto aqueles que você estiver carregando, viram itens mundanos (itens mágicos têm direito a um teste de resistência para evitar esse efeito). Requer 5º círculo',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura ou 1 objeto mágico ou esfera com 3m de raio'
  }, {
    id: 75,
    name: 'Duplicata Ilusória',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 4,
    description: 'Você cria uma cópia ilusória semi real de... você mesmo! Ela é idêntica em aparência, som e cheiro, mas é intangível. A cada turno, você escolhe se vai ver e ouvir através da duplicata ou de seu corpo original. A cópia reproduz todas as suas ações, incluindo fala. Qualquer magia com alcance de toque ou maior que você lançar pode se originar da duplicata, em vez do seu corpo original. As magias afetam outros alvos normalmente, com a única diferença de se originarem da cópia, em vez de você. Se quiser que a duplicata faça algo diferente de você, deve gastar uma ação de movimento. Qualquer criatura que interagir com a cópia tem direito a um teste de Vontade para perceber que é uma ilusão. As magias que se originam dela, no entanto, são reais. A cópia desaparece se sair do alcance.+3 PM: cria uma cópia adicional.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    efect: 'Cópia Ilusória'
  }, {
    id: 76,
    name: 'Enfeitiçar',
    type: 'Arcana',
    school: MagicSchools.Encantamento,
    circle: 1,
    description: 'Esta magia torna o alvo prestativo(veja Diplomacia no Capítulo 2: Perícias). Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe um bônus de +10 em testes de Diplomacia com a vítima. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é anulada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).+2 PM: em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir ao alvo que pule de um precipício, por exemplo, anula a magia. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar.+5 PM: muda o alvo para 1 espírito ou monstro. Requer 3º círculo.+5 PM: afeta todos os alvos dentro do alcance.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 humanoide',
    resistence: 'Vontade anula'
  }, {
    id: 77,
    name: 'Engenho de Mana',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 5,
    description: 'Esta poderosa magia manifesta um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco é intangível, imune a dano e não pode ser movido. Enquanto estiver ativo, tenta absorver qualquer magia lançada em alcance médio dele, como uma ação automática de contra mágica, usando seu teste de Misticismo. Caso vença o teste, o engenho não só anula a magia como absorve os PM usados para lançá-la, acumulando PM temporários. No seu turno, você pode gastar PM guardados no disco para lançar magias.+1 PM: em vez de flutuar no ponto em que foi conjurado, o disco flutua atrás de você, mantendo-se sempre adjacente.+4 PM: muda a duração para 1 dia.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    efect: 'Disco de energia com 1,5m de diâmetro'
  }, {
    id: 78,
    name: 'Enxame de Pestes',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 2,
    description: 'Você conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, mosquitos, ratos, morcegos ou serpentes. O enxame ocupa o espaço de um alvo escolhido por você, causando 2d12 pontos de dano de veneno no fim de seus turnos. Você pode mudar o alvo para outro dentro do alcance com uma ação livre, mas apenas uma vez por rodada.+2 PM: aumenta o dano em +1d12.+3 PM: muda a resistência para Reflexos reduz à metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou mesmo kobolds! Eles passam a causar 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfuração). O resto da magia segue normal.+5 PM: aumenta o número de enxames em +1. Eles não podem se concentrar num único alvo, devendo escolher alvos diferentes. Requer 3ºcírculo.+7 PM: muda a resistência para Reflexos reduz à metade e o enxame para criaturas elementais, feitas de um tipo de energia a sua escolha entre ácido, eletricidade, fogo ou frio. Elas passam a causar 5d12 pontos do dano escolhido. O resto da magia segue normal. Requer 4º círculo.',
    duration: 'Sustentada',
    execution: MagicExecution.Completa,
    range: MagicRange.Longo,
    efect: '1 enxame',
    resistence: 'Fortitude reduz à metade'
  }, {
    id: 79,
    name: 'Enxame Rubro de Ichabod',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 3,
    description: 'Você conjura um enxame de pequenas criaturas da Tormenta. Ele surge adjacente a você e ocupa o espaço de uma criatura Média. Uma vez por rodada, você pode gastar uma ação de movimento para mover o enxame. Ele possui deslocamento 12me pode passar pelo espaço de qualquer criatura. O enxame causa 4d12 pontos de dano de ácido a qualquer criatura que tocar em seu turno. Uma criatura que comece seu turno em um espaço ocupado pelo enxame deve fazer um teste de Reflexos. Se falhar, fica agarrada (o enxame escala e cobre o corpo dela). Se você mover o enxame, a criatura se livra. A criatura pode gastar uma ação padrão e fazer um teste de Acrobacia ou Atletismo para escapar.+2 PM: aumenta o dano em +1d12.+2 PM: muda o tipo de dano paratrevas.+3 PM: o enxame passa a ocupar o espaço de uma criatura Grande.+3 PM: o enxame ganha deslocamento de voo 18m.+4 PM: o enxame inclui parasitas inchados que explodem e criam novos enxames. No início de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um já existente. Com uma ação de movimento você pode fazer todos os enxames se moverem.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    efect: '1 enxame',
    resistence: 'Reflexos Parciais'
  }, {
    id: 80,
    name: 'Erupção Glacial',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 3,
    description: 'Estacas de gelo irrompem do chão. Criaturas na área sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam caídas. Passar no teste de Reflexos evita o dano de corte e a queda. As lanças duram pela cena, o que torna a área afetada terreno difícil, e concedem cobertura para criaturas dentro da área ou atrás dela. As estacas são destruídas caso sofram qualquer quantidade de dano por fogo mágico.+3 PM: aumenta o dano de frio em +2d6 e o dano de corte em +2d6. +4 PM: muda a área para cilindro com 6m de raio e 6m de altura, e a duração para sustentada. Em vez do efeito normal, a erupção cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e mais 3d6 pontosd e dano de frio em todas as criaturas na área. A chuva de gelo bloqueia toda a visão, até mesmo visão no escuro, e deixa o piso escorregadio (terreno difícil) — qualquer criatura na área deve fazer um teste de Acrobacia para equilíbrio (veja o Capítulo 2). Requer 4ºcírculo',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    area: 'Quadrado de 6m de lado',
    resistence: 'Reflexos Parciais'
  }, {
    id: 81,
    name: 'Escudo da Fé',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 1,
    description: 'Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa. +1 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena.+1 PM: também fornece ao alvo camuflagem contra ataques à distância.+2 PM: aumenta o bônus na Defesa em +1.+2 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se a qualquer momento o alvo sair do alcance, a magia é anulada. Requer 2º círculo.+3 PM: muda a duração para 1 dia. Requer 2º círculo.',
    duration: '1 turno',
    execution: MagicExecution.Reacao,
    range: MagicRange.Curto,
    target: '1 criatura'
  }, {
    id: 82,
    name: 'Esculpir Sons',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 2,
    description: 'Esta magia altera os sons emitidos pelo alvo. Ela não é capaz de criar sons, mas pode omiti-los (como fazer uma carroça ficar silenciosa) ou transformá-los (como fazer um conjurador ficar com voz de passarinho). Você não pode criar sons que não conhece (por exemplo, não pode fazer uma criatura falar num idioma que não conheça).Uma vez que você escolha a alteração, ela não pode ser mudada. Um conjurador que tenha a voz modificada drasticamente (por exemplo, se tiver voz de passarinho) não poderá lançar magias.+2 PM: aumenta o número de alvo sem +1. Todas as criaturas e objetos devem ser afetadas da mesma forma.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura ou objeto'
  }, {
    id: 83,
    name: 'Escuridão',
    type: 'Universal',
    school: MagicSchools.Necromancia,
    circle: 1,
    description: 'O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem por escuridão. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Escuridão anula Luz.+1 PM: aumenta a área da escuridão em +1,5m de raio.+2 PM: muda o efeito para fornecer camuflagem total por escuridão.+2 PM: muda a duração para 1 dia.+2 PM: muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por uma rodada. Requer 2º círculo.+5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem por escuridão. Requer 2º círculo',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 objeto'
  }, {
    id: 84,
    name: 'Explosão Caleidoscópica',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 4,
    description: 'Esta magia cria uma forte explosão de luzes estroboscópicas e sons cacofônicos que desorienta as criaturas atingidas. O efeito que cada criatura sofre depende do nível dela.7º nível ou menor: se falhar no teste de resistência, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Entre 8º e 14º nível: se falhar no teste de resistência, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Acima de 15º nível: se falhar no teste de resistência, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    area: 'Esfera de 6m de raio',
    resistence: 'Fortitude parcial'
  }, {
    id: 85,
    name: 'Explosão de Chamas',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 1,
    description: 'Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área. Truque: muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência.+1 PM: aumenta o dano em +1d6.+2 PM: muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas (veja Condições, no Apêndice B).',
    duration: 'Instântanea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Seismetro,
    area: 'Cone',
    resistence: 'Reflexos reduz à metade'
  }, {
    id: 86,
    name: 'Ferver Sangue',
    type: 'Arcana',
    school: MagicSchools.Necromancia,
    circle: 3,
    description: 'O sangue do alvo aquece rapidamente até entrar em ebulição. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo sofre 3d6 pontos de dano de fogo (Fortitude reduz à metade). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a até 3m (Reflexos reduz à metade).Essa magia não afeta criaturas sem sangue, como construtos ou espíritos.+2 PM: aumenta o dano em +1d6.+9 PM: muda alvo para criaturas escolhidas. Requer 5º círculo.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Fortitude reduz à metade'
  }, {
    id: 87,
    name: 'Físico Divino',
    type: 'Divina',
    school: MagicSchools.Transmutacao,
    circle: 2,
    description: '',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 88,
    name: 'Flecha Ácida',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 2,
    description: 'Você dispara um projétil que causa 4d6 pontos de dano de ácido. Se falhar no teste de resistência, o alvo também fica coberto por um muco corrosivo durante duas rodadas, sofrendo mais 2d6 de dano de ácido no início de seus turnos. Se lançada contra um objeto livre, que não esteja em posse de uma criatura, a magia causa dano dobrado e ignora a RD do objeto.+1 PM: além do normal, se o alvo coberto pelo muco ácido estiver usando armadura ou escudo, o item é corroído. Isso reduz o bônus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu bônus, mas é destruído totalmente se o bônus na Defesa chegar a 0.+2 PM: aumenta a redução na Defesa em +1.+2 PM: aumenta o dano inicial e o dano por rodada em +1d6.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura ou objeto',
    resistence: 'Reflexos parcial'
  }, {
    id: 89,
    name: 'Forma Etérea',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 4,
    description: 'As criaturas e todo o equipamento que estão vestindo são transportadas para o Plano Etéreo, que existe paralelamente ao mundo físico, o plano material. Na prática, é como ser transformado em um fantasma (mas você ainda é considerado uma criatura viva). Uma criatura etérea é invisível (mas pode se tornar visível como uma ação livre), incorpórea e capaz de se mover em qualquer direção, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da visão e audição para 18m.Magias de abjuração afetam criaturas etéreas, mas outras magias, não. Da mesma forma, uma criatura etérea não pode atacar nem lançar magias contra criaturas no plano material. Duas criaturas etéreas podem se afetar normalmente. Uma criatura afetada por essa magia pode se materializar como uma ação de movimento. Uma criatura etérea que se materialize em um espaço ocupado é jogada para o espaço não ocupado mais próximo e sofre 1d6 pontos de dano para cada 1,5m de deslocamento.+5 PM: muda o alcance para toque e o alvo para até 5 criaturas voluntárias que estejam de mãos dadas. Depois que a magia é lançada, as criaturas podem soltar as mãos. Requer 5º círculo.',
    duration: 'Sustentada',
    execution: MagicExecution.Completa,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 90,
    name: 'Fúria do Panteão',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 5,
    description: 'Você cria uma nuvem de tempestade, com trovões e relâmpagos. Enquanto você sustenta a magia, ela gera os seguintes efeitos, sempre no início do seu turno.1ª rodada (quando você lança a magia): trovões ribombam. Criaturas na área sofrem 6d6 pontos de dano de impacto e ficam surdas por uma rodada.2ª rodada: relâmpagos caem. Até seis criaturas a sua escolha na área sofrem 10d8 pontos de dano de eletricidade.3º rodada em diante: chuva gélida e ventos causam 6d6 pontos de dano de frio por rodada. Além disso, reduzem a visibilidade (como a magia Névoa),transformam toda a área em terreno difícil e tornam ataques à distância impossíveis. Além disso, a área conta como condição terrível para conjuradores lançarem magias.',
    duration: 'Sustentada',
    execution: MagicExecution.Completa,
    range: MagicRange.Longo,
    efect: 'Nuvem de tempestade com 90m de lado'
  }, {
    id: 91,
    name: 'Globo da Verdade de Gwen',
    type: 'Divina',
    school: MagicSchools.Adivinhacao,
    circle: 2,
    description: 'Cria um globo flutuante, translúcido e intangível, com 50cm de diâmetro. O globo mostra uma cena vista pelo conjurador até uma semana atrás, permitindo que outras pessoas vejam o que ele viu.+3 PM: o globo mostra uma cena vista pelo conjurador até um mês atrás.+6 PM: como acima, até um ano atrás.+12 PM: muda o alcance para longo e o efeito para até 10 globos. Criaturas em alcance curto de um globo ficam fascinadas por ele por 1d4+1 rodadas (Vontade anula). Requer 5º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    efect: '1 globo'
  }, {
    id: 92,
    name: 'Globo de Invulnerabilidade',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 3,
    description: 'Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2º círculo ou menor. Nenhuma magia pode ser lançada contra um alvo dentro do globo e magias de área não o penetram. No entanto, magias ainda podem ser lançadas de dentro para fora. Dissipar Magia só anula o globo se for usada diretamente sobre você, não o afetando se usada em área. Efeitos mágicos não são anulados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua duração não tenha acabado).O globo é imóvel e não tem efeito sobre criaturas ou objetos. Após lançá-lo, você pode entrar ou sair livremente.+4 PM: muda o efeito para afetar magias de até 3º círculo. Requer 4º círculo.+9 PM: muda o efeito para afetar magias de até 4º círculo. Requer 5º círculo.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 93,
    name: 'Guardião Divino',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 4,
    description: 'A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz divina. A criatura é incorpórea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz. Uma vez por rodada, durante o seu turno, o elemental pode se movimentar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condições de quaisquer criaturas em alcance curto, à taxa de 1PV por 1 ponto de luz ou uma condição (entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulnerável) por 3 pontos de luz. A magia é encerrada quando o elemental fica sem pontos de luz.',
    duration: 'Cena ou até ser descarregado',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    efect: 'Elemental de luz invocado'
  }, {
    id: 94,
    name: 'Heroísmo',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 2,
    description: 'Esta magia imbui uma criatura com coragem e valentia. O alvo fica imune a medo e recebe +4 em testes de ataque e rolagens de dano contra inimigos que tenham mais níveis que ele.+2 PM: aumenta o bônus em +1.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 95,
    name: 'Hipnotismo',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 1,
    description: 'Suas palavras e movimentos ritmados deixam as criaturas fascinadas (veja Condições, no Apêndice B). Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, os alvos recebem +5 em seus testes de resistência. Truque: muda o alvo para 1 criatura e a duração para 1 rodada. Em vez de fascinado, o alvo fica pasmo. Uma criatura só pode ser afetada por este truque uma vez por cena.+1 PM: em vez do normal, se passarem na resistência os alvos não saberão que foram alvos de uma magia.+2 PM: muda a duração para cena.+2 PM: muda o alcance para médio.+2 PM: muda os alvos para até 8º nível. +5 PM: muda os alvos para até 12º nível. +9 PM: muda os alvos para até 16º nível.',
    duration: '1d4 rodadas',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: 'Criaturas escolhidas de até 4º nível',
    resistence: 'Vontade Anula'
  }, {
    id: 96,
    name: 'Ilusão Lacerante',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 3,
    description: 'Você cria uma ilusão realista de algum perigo mortal. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo deve fazer um teste de Vontade; se falhar, acredita que a ilusão é real e sofre 3d6 pontos de dano. O tipo de dano depende da ilusão — uma ilusão de que o alvo está em chamas causa dano de fogo, enquanto uma ilusão de que o teto desabou sobre ele causa dano de impacto. Somente o alvo pode ver a ilusão, e racionaliza o efeito sempre que falha no teste(por exemplo, acredita que o mesmo teto pode cair sobre ele várias vezes).Se o alvo passar em dois testes de Vontade seguidos, anula o efeito.+2 PM: aumenta o dano em +2d6. O aumento pode ser de um novo tipo de dano, desde que explicado pela ilusão.+3 PM: aumenta o número de alvo sem +1.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Vontade parcial'
  }, {
    id: 97,
    name: 'Imagem Espelhada',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 1,
    description: 'Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que uma taque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar).+2 PM: aumenta o número de cópia sem +1.+5 PM: além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia faz um teste de Fortitude; se falhar, fica cega por uma rodada. Requer3º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 98,
    name: 'Imobilizar',
    type: 'Universal',
    school: MagicSchools.Encantamento,
    circle: 3,
    description: 'Você restringe os movimentos do alvo com sua pressão espiritual. Se o alvo falhar na resistência, fica paralisado; se passar, fica lento. A cada rodada, a criatura pode gastar uma ação completa para fazer um novo teste de Vontade e tentar anular o efeito.+1 PM: muda o alvo para 1 espírito.+2 PM: aumenta o número de alvo sem +1.+3 PM: muda o alvo para 1 criatura. Requer 4º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 humanoide ou animal',
    resistence: 'Vontade parcial'
  }, {
    id: 99,
    name: 'Intervenção Divina',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 5,
    description: 'Você pede a sua divindade para interceder diretamente. Você pode:• Duplicar qualquer magia divina de 4º círculo ou menor.• Duplicar qualquer magia arcana de 3º círculo ou menor.• Criar um item mundano no valor de até T$ 25.000.• Desfazer os efeitos nocivos de qualquer magia de 4º círculo ou menor.• Produzir qualquer outro efeito de poder similar aos efeitos acima. Normalmente, Intervenção Divina não tem custo em PM — mas você pode implorar por algo mais poderoso. Nesse caso, a magia requer o sacrifício de 2PM e pode fazer coisas como:• Mudar o destino de uma batalha quase perdida, ressuscitando todos os seus aliados caídos.• Proteger uma cidade de um desastre, como uma erupção vulcânica, enchente ou terremoto.• Qualquer outra coisa que o mestre autorize, conforme os desejos e objetivos da divindade do conjurador.',
    execution: MagicExecution.Completa,
  }, {
    id: 100,
    name: 'Invisibilidade',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 2,
    description: 'O alvo fica invisível, incluindo seu equipamento. Ele recebe camuflagem total, +20 em testes de Furtividade e pode se esconder mesmo que alguém o esteja observando diretamente. Além disso, criaturas que não possam vê-lo ficam desprevenidas contra seus ataques. A magia termina se o alvo faz um ataque ou lança uma magia ofensiva. Ações contra objetos livres não anulam a Invisibilidade (você pode tocar ou apanhar objetos que não estejam sendo seguros por outras criaturas). Causar dano indiretamente — por exemplo, acendendo o pavio de um barril de pólvora que vai detonar mais tarde —não é considerado um ataque. Objetos soltos pelo alvo voltam a ser visíveis e objetos apanhados por ele ficam invisíveis. Uma luz transportada pelo alvo nunca fica invisível (mesmo que sua fonte seja). Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível.+1 PM: muda a execução para ação padrão, o alcance para toque e o alvo para1 criatura ou 1 objeto.+3 PM: muda a duração para cena. Requer 3º círculo.+3 PM: muda a duração para sustentada e o efeito para esfera de 3m de raio. Em vez do normal, todas as criaturas a até 3m do alvo (incluindo ele próprio)se tornam invisíveis, como no efeito normal da magia. O efeito se move juntamente com o alvo e se mantém a até3m dele; qualquer coisa que se estenda além fica visível. Requer 3º círculo.+7 PM: muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura. A magia não é anulada caso o alvo faça um ataque ou lance uma magia ofensiva. Requer 4º círculo',
    duration: '1 rodada',
    execution: MagicExecution.Livre,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 101,
    name: 'Invulnerabilidade',
    type: 'Universal',
    school: MagicSchools.Abjuracao,
    circle: 5,
    description: 'Esta magia cria uma barreira mágica impenetrável que protege você contra efeitos nocivos mentais ou físicos, a sua escolha. Proteção mental: você fica imune às condições abalado, alquebrado, apavorado, atordoado, confuso, esmorecido, fascinado, frustrado e pasmo, além de efeitos de encantamento e ilusão. Proteção física: você fica imune às condições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado, além de acertos críticos, ataques furtivos e doenças.+5 PM: muda o alcance para curto e o alvo para 1 criatura.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 102,
    name: 'Lágrimas de Wynna',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 5,
    description: 'Se falhar no teste de resistência, o alvo perde a habilidade de lançar magias arcanas até o fim da cena. Se passar, perde a habilidade por uma rodada.+2 PM: muda a área para círculo de 6m de raio e o alvo para criaturas escolhidas.+5 PM: muda a execução para 1 dia e adiciona custo adicional (sacrifício de 1PM). O alvo da magia precisa ser mantido em alcance curto do conjurador durante toda a execução. Ao término, faz um teste de Vontade. Se falhar, perde a habilidade de lançar magias arcanas permanentemente. Se passar, resiste, mas ainda pode ser alvo da magia no dia seguinte. Nenhum poder mortal é capaz de reverter essa perda. Os clérigos de Wynna dizem que sua deusa chora cada vez que este ritual é realizado.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Vontade Parcial'
  }, {
    id: 103,
    name: 'Lança Ígnea de Aleph',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 3,
    description: 'Esta magia foi desenvolvida pelo mago imortal Aleph Olhos Vermelhos, um entusiasta dos estudos vulcânicos. Ela dispara um projétil de magma superaquecido contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfuração e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resistência, o alvo sofre metade do dano e não fica em chamas. Respingos de rocha incandescente se espalham com a explosão, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos. Se falharem, ficam em chamas, como descrito acima.+3 PM: aumenta o dano inicial em+2d6 e o dano do efeito em chama sem +1d6.+4 PM: muda a duração para cena ou até ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma ação livre, você pode disparar um dos dardo sem uma criatura, causando o efeito normal da magia. Requer 4º Círculo',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura',
    resistence: 'Reflexos Parcial'
  }, {
    id: 104,
    name: 'Legião',
    type: 'Arcana',
    school: MagicSchools.Encantamento,
    circle: 5,
    description: '',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: 'Até 10 criaturas na área',
    resistence: 'Vontade Parcial'
  }, {
    id: 105,
    name: 'Lendas e Histórias',
    type: 'Universal',
    school: MagicSchools.Adivinhacao,
    circle: 3,
    description: 'Você descobre informações sobre uma criatura, objeto ou local que esteja tocando. O que exatamente você descobre depende do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação. A cada rodada que mantiver a magia, você descobre:• Todas as informações sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal.• Todas as habilidades do alvo. Se for uma criatura, você sabe suas estatísticas de jogo como raça, classe, nível, atributos, magias, resistências e fraquezas. Se for um item mágico, aprende seu efeito e funcionamento.• Se o alvo está sob influência de alguma magia e todas as informações sobreas magias ativas, se houver alguma.+4 PM: muda a execução para 1 dia, o alcance para ilimitado e adiciona componente material (cuba de ouro cheia d’água e ingredientes mágicos, no valor de T$ 1.000). Você ainda precisa ter alguma informação sobre o alvo, como um nome, descrição ou localização.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura, objeto ou local'
  }, {
    id: 106,
    name: 'Leque Cromático',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 1,
    description: 'Um cone de luzes brilhantes surge a partir das suas mãos, deixando as criaturas na área ofuscadas pela cena. Caso falhem na resistência, ficam atordoadas por 1 rodada. Esta magia afeta apenas criaturas de até 4º nível e não afeta criaturas cegas.+2 PM: aumenta a duração do efeito em +1 rodada.+2 PM: afeta alvos de até 8º nível. Requer 2º círculo.+5 PM: afeta alvos de até 12º nível. Requer 3º círculo.+9 PM: afeta alvos de até 16º nível. Requer 4º círculo.+14 PM: afeta alvos de qualquer nível. Requer 5º círculo.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.QuatroEmeio,
    area: 'Cone',
    resistence: 'Vontade parcial'
  }, {
    id: 107,
    name: 'Libertação',
    type: 'Universal',
    school: MagicSchools.Transmutacao,
    circle: 4,
    description: 'O alvo fica imune a condições de paralisia e ignora qualquer efeito que impeça ou restrinja seu deslocamento. Por fim, pode usar habilidades que exigem liberdade de movimentos mesmo se estiver usando armadura ou escudo.+2 PM: além do normal, o alvo pode caminhar sobre a água ou outros líquidos com seu deslocamento normal. Entretanto, isso não protege contra qualquer efeito que o líquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano).+2 PM: além do normal, o alvo pode escolher 20 em todos os testes deAtletismo.+2 PM: além do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta perícia mesmo sem treinamento.+5 PM: muda o alcance para curto e o alvo para até 5 criaturas.+5 PM: pode dissipar Aprisionamento',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura'
  }, {
    id: 108,
    name: 'Ligação Sombria',
    type: 'Divina',
    school: MagicSchools.Necromancia,
    circle: 4,
    description: 'Esse ritual cria uma conexão entre seu corpo e o da criatura alvo, deixando uma marca idêntica na pele de ambos. Enquanto a magia durar, sempre que você sofrer qualquer dano ou condição, o alvo dessa magia deve fazer um teste de Fortitude; se falhar, sofre a mesma quantidade e tipo de dano que você ou adquire a mesma condição. A magia termina se o alvo chegara 0 pontos de vida.+5 PM: além do normal, o alvo também pode morrer por perda de PV ou se você morrer (um teste de Fortitude anula a morte).',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    target: '1 criatura',
    resistence: 'Fortitude anula'
  }, {
    id: 109,
    name: 'Ligação Telepática',
    type: 'Arcana',
    school: MagicSchools.Adivinhacao,
    circle: 2,
    description: 'Você cria um elo mental entre duas criaturas com Inteligência 3 ou maior(você pode ser uma delas). As criaturas podem se comunicar independente de idioma ou distância, mas não em mundos diferentes.+2 PM: aumenta o número de alvo sem +1.+3 PM: muda o alvo para 1 criatura. Em vez do normal, você cria um elo mental que permite que você veja e ouça através dos sentidos da criatura, se gastar uma ação de movimento. Uma criatura involuntária pode fazer um teste de Vontade para anular a magia por uma hora. Requer 3º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '2 criaturas voluntárias'
  }, {
    id: 110,
    name: 'Localização',
    type: 'Arcana',
    school: MagicSchools.Adivinhacao,
    circle: 2,
    description: 'Esta magia pode encontrar uma criatura ou objeto a sua escolha. Você pode pensar em termos gerais (“um elfo”, “algo de metal”) ou específicos (“Gwen, a elfa”, uma espada longa). A magia indica a direção e distância da criatura ou objeto mais próximo desse tipo, caso esteja ao alcance. Você pode movimentar-se para continuar procurando. Procurar algo muito específico (“a espada longa encantada do Barão Rulyn”) exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja muito próxima da verdade, a magia falha, mas você gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo. Truque: muda a área para alvo você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar.+5 PM: aumenta a área em um fator de 10 (90m para 900m, 900m para9km e assim por diante).',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    area: 'Círculo com 90m de raio'
  }, {
    id: 111,
    name: 'Luz',
    type: 'Universal',
    school: MagicSchools.Evocacao,
    circle: 1,
    description: 'O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Luz anula Escuridão.+1 PM: aumenta a área iluminada em+3m de raio.+2 PM: muda a duração para 1 dia.+2 PM: muda a duração para permanente e adiciona componente material(pó de rubi no valor de T$ 50). Requer2º círculo.+0 PM (Apenas Arcanos): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas.+2 PM (Apenas Arcanos): muda o alcance para longo e o efeito para 4 esferas brilhantes. A magia cria esferas flutuantes de pura luz com 10cmde diâmetro, que você pode posicionar onde quiser dentro do alcance. Você pode enviar uma esfera à frente, outra para trás, outra para cima e manter uma perto de você, por exemplo. Uma vez por rodada, você pode mudar as esferas de posição com uma ação livre. Cada esfera ilumina como uma tocha, mas não produz calor. Se uma esfera ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo.+2 PM (Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Além disso, dentro da área seus aliados estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Apenas conjuradores divinos podem usar este aprimoramento. Requer 2º círculo.+5 PM (Apenas Divinos): muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e resistência atrevas 10. Requer 2º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 objeto'
  }, {
    id: 112,
    name: 'Manto de Sombras',
    type: 'Universal',
    school: MagicSchools.Ilusao,
    circle: 3,
    description: 'Você fica coberto por um manto de energia translúcida e sombria. Nesta forma, torna-se incorpóreo: só pode ser afetado por armas mágicas, magias ou outras criaturas incorpóreas e pode atravessar objetos sólidos, mas não manipulá-los. Contudo, você se torna vulnerável à luz direta: se exposto a uma fonte de luz, sofre 1 ponto de dano por rodada. Você pode gastar uma ação de movimento e 1 PM para “entrar” em uma sombra do seu tamanho ou maior e se teletransportar para outra sombra, também do seu tamanho ou maior, em alcance médio.+4 PM: muda o alcance para toque e o alvo para 1 criatura. Requer 4º círculo',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 113,
    name: 'Manto do Cruzado',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 4,
    description: 'Você invoca a energia sagrada de sua divindade na forma de um manto de energia sólida que reveste seu corpo. Esta magia tem duas versões. Você escolhe qual versão pode lançar quando aprende esta magia. Ela não pode ser mudada. Manto de Luz: um manto dourado e luminoso. No início de cada um de seus turnos, você e todos os seus aliados em alcance curto recuperam 2d8 PV. Você fica imune a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de eletricidade. Manto de Trevas: um manto negro como a noite. No início de cada um de seus turnos, todos os inimigos em alcance curto sofrem 2d8 pontos de dano de trevas. Você cura metade de todo o dano causado.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 114,
    name: 'Mão Poderosa de Talude',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 4,
    description: 'Esta magia cria uma mão flutuante de tamanho Grande que sempre se posiciona entre você e um oponente a sua escolha. A mão fornece cobertura (+5 na Defesa) contra esse oponente. Nada é capaz de enganar a mão — coisas como escuridão, invisibilidade, metamorfose e disfarces mundanos não a impedem de protegê-lo. A mão tem Defesa 20 e PV e resistências iguais aos seus. Com uma ação de movimento, você pode comandar a mão para que o proteja de outro oponente ou para que realize uma das ações a seguir. Agarrar: a mão usa uma manobra agarrar contra o oponente, com bônus de +20. A mão mantém o oponente agarrado, mas não causa dano. Esmagar: a mão esmaga um oponente já agarrado, causando 2d6+12 pontos de dano. Empurrar: a mão afasta o oponente, usando uma manobra empurrar com bônus de +20. A mão sempre acompanha o oponente para empurrá-lo até a distância máxima que conseguir, dentro do alcance da magia.+3 PM: aumenta o bônus dos testes em +5 e o dano de impacto em+1d6+6.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    efect: 'Mão gigante de energia'
  }, {
    id: 115,
    name: 'Mapear',
    type: 'Arcana',
    school: MagicSchools.Adivinhacao,
    circle: 2,
    description: 'Uma fagulha percorre a superfície afetada, queimando-a enquanto esboça um mapa da região onde o conjurador está. Se você conhece o lugar, o mapa será completo. Caso contrário, apresentará apenas um esboço geral, além de um ponto de referência (para possibilitar localização) e um lugar de interesse, ambos definidos pelo mestre. A região representada no mapa tem tamanho máximo de um quadrado de10km de lado. Caso você esteja dentro de uma construção, o mapa mostrará o andar no qual você se encontra.+3 PM: muda o alvo para 1 criatura e a duração para 1 hora. Em vez do normal, a criatura tocada descobre o caminho mais direto para entrar ou sair de um lugar. Assim, a magia pode ser usada para descobrir a rota até o relicário de uma catedral ou a saída mais próxima de uma masmorra (mas não para encontrar a localização de uma criatura ou objeto; a magia funciona apenas em relação a lugares). Caso a criatura demore mais de uma hora para percorrer o caminho, o conhecimento se perde.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: 'Superfície ou objeto plano, como uma mesa ou pergaminho'
  }, {
    id: 116,
    name: 'Marca da Obediência',
    type: 'Universal',
    school: MagicSchools.Encantamento,
    circle: 2,
    description: 'Você toca uma criatura, gravando uma marca mística no corpo dela enquanto profere uma ordem, como “não ataque a mim ou meus aliados”, “siga-me” ou “não saia desta sala”. A cada rodada, o alvo deve fazer um teste de Vontade. Se falhar, deve cumprir sua ordem, gastando todas as ações de seu turno para isso. Se passar, a magia é anulada. A ordem não pode ser genérica demais (como “ajude-me”, por exemplo) e nem pode forçar uma criatura a atos suicidas.+1 PM: muda a duração para 1 dia.+3 PM: além do normal, caso o alvo tente desobedecer à ordem, a marca também causa 3d6 pontos de dano mental. Requer 3º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura',
    resistence: 'Vontade Anula'
  }, {
    id: 117,
    name: 'Marionete',
    type: 'Arcana',
    school: MagicSchools.Encantamento,
    circle: 4,
    description: 'Esta magia manipula o sistema nervoso do alvo. Ao sofrer a magia, e no início de cada um de seus turnos, a vítima faz um teste de Fortitude. Se passar, a magia é anulada. Se falhar, todas as suas ações físicas naquele turno estarão sob controle do conjurador. A vítima ainda tem consciência de tudo que acontece a sua volta, podendo ver, ouvir e até falar com certo esforço (mas não lançar magias).Contudo, seu corpo realiza apenas os movimentos que o conjurador deseja. A vítima pode ser manipulada para se movimentar, lutar, usar habilidades de combate... Enfim, qualquer coisa de que seja fisicamente capaz. O conjurador precisa de linha de efeito para controlar a vítima. Se perder o contato, não poderá controlar a vítima— mas ela estará paralisada até que o conjurador recupere o controle ou a magia termine',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura'
  }, {
    id: 118,
    name: 'Mata-Dragão',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 5,
    description: 'Esta é uma das mais poderosas magias de destruição existentes. Após entoar longos cânticos, o conjurador dispara uma carga de energia que varre uma enorme área em sua frente, causando 20d12+20 pontos de dano de essência em todas as criaturas, construções e objetos livres atingidos. Apesar de seu poder destrutivo, esta magia é lenta, tornando seu uso difícil em combate. Além disso, pode causar tantos danos colaterais que poucos conjuradores se arriscam a utilizá-la.+1 PM: aumenta o dano em 1d12+1.',
    duration: 'Instantânea',
    execution: MagicExecution.DuasRodadas,
    range: MagicRange.Pessoal,
    area: 'Explosão em cone de 30m',
    resistence: 'Reflexos reduz à metade'
  }, {
    id: 119,
    name: 'Mente Divina',
    type: 'Divina',
    school: MagicSchools.Adivinhacao,
    circle: 2,
    description: 'Você traz inspiração divina à mente do alvo. Escolha entre Inteligência, Sabedoria ou Carisma. O alvo recebe +4 no atributo escolhido. Esse aumento não oferece PV ou PM adicionais.+3 PM: em vez do normal, o alvo recebe +4 nos três atributos mentais. Requer 3º círculo.+7 PM: muda o alcance para curto e o alvo para criaturas escolhidas.+7 PM: aumenta o bônus em +2. Requer 4º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 120,
    name: 'Metarmofose',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 2,
    description: 'Você muda sua aparência e forma — incluindo seu equipamento — para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, você recebe +20 em testes de Enganação para disfarce. Características não mencionadas não mudam. Se mudar para uma forma humanoide, pode mudar o tipo de dano físico de suas armas (se usa uma maça e transformá-la em espada longa, ela pode causar dano de corte, por exemplo).Se quiser, pode assumir uma forma humanoide com uma categoria de tamanho acima ou abaixo da sua; nesse caso aplique os modificadores em Furtividade e testes de manobra. Se mudar para outras formas, você pode escolher uma Forma Selvagem do druida (veja no Capítulo 1). Nesse caso você não pode atacar com suas armas, falar ou lançar magias até voltar ao normal, mas recebe um ou mais ataques naturais e os bônus da forma selvagem escolhida.+1 PM: a forma escolhida recebe uma habilidade de sentidos entre faro, visão na penumbra e visão no escuro.+3 PM: a forma escolhida recebe percepção às cegas. Requer 3º círculo.+3 PM: muda o alcance para toque, o alvo para 1 criatura e adiciona resistência (Vontade anula).+3 PM: muda o alcance para médio, o alvo para 1 criatura e a resistência para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.).A criatura não pode atacar, falar e lançar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras características não mudam. No início de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna a sua forma normal e a magia termina. Requer 3º círculo.+5 PM: se mudar para formas não humanoides, pode escolher uma Forma Selvagem Aprimorada. Requer 3ºcírculo.+9 PM: se mudar para formas não humanoides, pode escolher uma Forma Selvagem Superior. Requer 4º círculo.+12 PM: além do normal, no início de seus turnos o alvo pode mudar deforma novamente, como uma ação livre, fazendo novas escolhas. Requer 5º círculo',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 121,
    name: 'Miasma Mefítico',
    type: 'Divina',
    school: MagicSchools.Necromancia,
    circle: 2,
    description: '',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    area: 'Nuvem com 6m de raio',
    resistence: 'Fortitude (veja texto)'
  }, {
    id: 122,
    name: 'Miragem',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 3,
    description: 'Você faz um terreno parecer outro, incluindo sons e cheiros. Uma planície pode parecer um pântano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movediça pode parecer terra firme ou um precipício pode parecer um lago. Você pode alterar, incluir e esconder estruturas dentro da área, mas não criaturas (embora elas possam se esconder nas estruturas ilusórias).+4 PM: além do normal, pode alterar a aparência de criaturas escolhidas na área, como se usando Disfarce Ilusório.+9 PM: muda a duração para permanente e adiciona componente material(pó de diamante no valor de T$ 1.000).Requer 5º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    area: 'Cubo de até 90m de lado'
  }, {
    id: 123,
    name: 'Missão Divina',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 3,
    description: 'Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou até o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a missão — mas, no fim de cada dia em que não se esforçar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de –2 em todos os testes e rolagens .A Missão Divina não pode forçar uma criatura a um ato suicida, nem designar uma missão impossível (como matar uma criatura que não existe).+2 PM: muda o alcance para toque, a duração para permanente e adiciona penalidade de –1 PM. Em vez do normal, você inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de ação que ativará a marca. Normalmente, será cometer um crime (roubar, matar...) ou outra coisa contrária às Obrigações & Restrições de sua divindade. Sempre que a marca é ativada, o alvo recebe uma penalidade cumulativa de –2 em todos os testes. Muitas vezes, portar essa marca é um estigma por si só, já que esta magia normalmente é lançada em criminosos ou traidores. Dissipar Magia anula a marca e suas penalidades por um dia; elas só podem ser totalmente removidas pelo conjurador original ou pela magia Purificação.+4 PM: aumenta a duração para 1 ano ou até ser descarregada.',
    duration: '1 semana ou até ser descarregada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Vontade Anula (veja texto)'
  }, {
    id: 124,
    name: 'Montaria Arcana',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 2,
    description: 'Esta magia convoca um cavalo de batalha que serve como um aliado montaria veterano. Sua aparência típica é de um animal negro com crina e cauda cinzentas e cascos feitos de fumaça, mas você pode mudá-la se quiser. Além dos benefícios normais, a Montaria Arcana pode atravessar terreno difícil sem redução em seu deslocamento.+1 PM: além do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4rodadas, depois abaladas pela cena.+3 PM: muda a duração para permanente e adiciona sacrifício de 1 PM.+3 PM: aumenta o tamanho da montaria em uma categoria. Isso também aumenta o número de criaturas que ela pode carregar — duas para uma criatura Enorme, seis para Colossal. Uma única criatura controla a montaria; as outras apenas são deslocadas.+3 PM: muda a criatura para um aliado montaria mestre. Requer 3º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    efect: 'Criatura Conjurada'
  }, {
    id: 125,
    name: 'Muralha de Ossos',
    type: 'Universal',
    school: MagicSchools.Necromancia,
    circle: 4,
    description: 'Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 3m de altura e 1,5m de profundidade. Ela pode ter qualquer forma — não precisa ser uma linha reta —, mas sua base precisa estar no chão e ela não pode aparecer de modo que ocupe o espaço de uma criatura. É possível escalar a parede. Isso exige um teste de Atletismo e causa 4d8 pontos de dano de corte. Também é possível destruir o muro para atravessá-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e resistência a corte, frio e perfuração 5.+2 PM: aumenta o comprimento em+15m e altura em +3m (máximo de60m de comprimento e 9m de altura).+5 PM: o muro é feito de uma massa de esqueletos animados. Quando você lança a magia e no início de cada um de seus turnos, todos os inimigos adjacentes à muralha sofrem 4d8 pontos de dano e devem fazer um teste de Reflexos. Se falharem, são agarrados pela muralha. Uma criatura agarrada pode gastar uma ação padrão para fazer um teste de Acrobacia ou Atletismo para se soltar.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    efect: 'Muro de ossos'
  }, {
    id: 126,
    name: 'Muralha Elemental',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 3,
    description: 'Esta magia cria uma muralha feita de um elemento a sua escolha. A muralha pode ter duas formas: uma barreira de até 30m de comprimento e 3m de altura (ou o contrário) ou uma cúpula de 3m de raio. A magia tem efeitos diferentes dependendo do tipo de elemento escolhido. Fogo. Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano em criaturas a até 6m. A muralha causa esse dano quando surge e no início de seus turnos. Atravessar a muralha causa 8d6pontos de dano de fogo. Caso seja criada em uma área onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano à metade (a criatura escolhe para qual lado quer escapar, mas se escapar para o lado quente sofrerá mais 2d6 pontos de dano).Gelo. Evoca uma parede grossa de gelo denso com 15cm de espessura. Na forma de cúpula, pode prender uma ou mais criaturas, mas elas têm direito a um teste de Reflexos para escapar antes que a cúpula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e RD 5. Um trecho da muralha que atinja 0 PV será rompido. Qualquer efeito de fogo causa dano dobrado à muralha. Uma criatura que atravesse um trecho rompido da muralha sofre 4d6 pontos de dano de frio.+2 PM: aumenta o comprimento em +15m e altura em +3m, até 60m de comprimento e 9m de altura.+4 PM: muda a duração para sustentada e adiciona uma nova escolha, Essência. A muralha é invisível e indestrutível — imune a qualquer forma de dano e não afetada por nenhuma magia. Ela não pode ser atravessada nem mesmo por criaturas incorpóreas. No entanto, magias que teletransportam criaturas ,como Salto Dimensional, podem atravessá-la. Magias e efeitos de dano, como Bola de Fogo e o sopro de um dragão, não vencem a muralha, mas magias lançadas diretamente sobre uma criatura ou área, como Sono, podem ser lançadas contra alvos que estejam no outro lado. Requer 4º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    efect: 'Muralha de Energia'
  }, {
    id: 127,
    name: 'Névoa',
    type: 'Universal',
    school: MagicSchools.Convocacao,
    circle: 1,
    description: 'Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta magia não funciona sob a água. +1 PM: a magia também funciona sob a água, criando uma nuvem de tinta.+2 PM: você pode escolher criaturas no alcance ao lançar a magia; elas enxergam através do efeito. Requer 2ºcírculo. +2 PM: além do normal, a nuvem tem um cheiro horrível. No início de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada.+2 PM: além do normal, a nuvem tem um tom esverdeado e se torna cáustica. No início de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de ácido.+3 PM: aumenta o dano de ácido em+2d4.+5 PM: além do normal, a nuvem fica espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre –2 em testes de ataque e rolagens de dano.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    efect: 'Nuvem com 6m de raio e 6m de altura'
  }, {
    id: 128,
    name: 'Oração',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 2,
    description: 'Todos os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano. Esses bônus e penalidades são cumulativos com outras magias.+2 PM: aumenta os bônus em +1.+2 PM: aumenta as penalidades em –1.+7 PM: muda o alcance para médio. Requer 3º círculo.+12 PM: muda a duração para cena. Requer 4º círculo.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: 'Todas as criaturas (veja texto)'
  }, {
    id: 129,
    name: 'Orientação',
    type: 'Divina',
    school: MagicSchools.Adivinhacao,
    circle: 1,
    description: 'Você oferece ajuda. Escolha um atributo — até o final da cena, sempre que o alvo fizer um teste de perícia baseada no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. Esse benefício não se aplica a testes de ataque ou resistência. Truque: muda a execução para ação padrão e a duração para 1 rodada. O bônus vale para um único teste. Uma criatura só pode ser afetada por esse truque uma vez por cena.+5 PM: em vez de um atributo, escolha entre atributos físicos (Força, Destreza e Constituição) ou mentais (Inteligência, Sabedoria e Carisma). Requer 3º círculo.+5 PM: muda o alvo para criaturas escolhidas. Requer 3º círculo',
    duration: 'Cena',
    execution: MagicExecution.Movimento,
    range: MagicRange.Curto,
    target: '1 criatura'
  }, {
    id: 130,
    name: 'Palavra Primordial',
    type: 'Universal',
    school: MagicSchools.Encantamento,
    circle: 5,
    description: 'Você pronuncia uma palavra do idioma primordial da Criação, que causa um dos efeitos abaixo, a sua escolha. Atordoar: a criatura fica atordoada por 2d4 rodadas. Se passar no teste de resistência, fica desprevenida por 1d4 rodadas. Cegar: a criatura fica cega. Se passar no teste de resistência, fica ofuscada por 1d4 rodadas. Matar: a criatura morre. Além do teste de Vontade, a criatura tem direito a um teste de Fortitude. Se passar em qualquer um deles, sofre 10d8 pontos de dano e fica sangrando.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura com menos níveis que você',
    resistence: 'Vontade Parcial'
  }, {
    id: 131,
    name: 'Pele de Pedra',
    type: 'Universal',
    school: MagicSchools.Transmutacao,
    circle: 3,
    description: 'Sua pele ganha aspecto e dureza de rocha. Você recebe resistência a dano 5. +1 PM: muda o alcance para toque e o alvo para 1 criatura.+4 PM: muda a duração para 1 dia.+4 PM: sua pele ganha aspecto e a dureza do aço. Você recebe resistência a dano 10. Requer 4º círculo.+4 PM: muda o alcance para toque, o alvo para 1 criatura, a duração para 1d4 rodadas e adiciona Resistência: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma estátua inerte e sem consciência. Se a estátua for quebrada, a criatura morrerá. Requer 4º círculo.+9 PM: como acima, mas com duração permanente. Requer 5º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 132,
    name: 'Perdição',
    type: 'Divina',
    school: MagicSchools.Necromancia,
    circle: 1,
    description: 'Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção. +2 PM: muda a resistência para Vontade parcial. Caso falhem, os alvos ficam abalados. Caso passem, recebem a penalidade normal.+2 PM: aumenta as penalidades em –1.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: 'Criaturas Escolhidas',
    resistence: 'Nenhuma'
  }, {
    id: 133,
    name: 'Poeira da Podridão',
    type: 'Divina',
    school: MagicSchools.Necromancia,
    circle: 3,
    description: 'Você manifesta uma nuvem de poeira carregada de energia negativa, que apodrece lentamente as criaturas na área. Ao lançar a magia, e no início de seus turnos, criaturas na área sofrem 2d8+8 pontos de dano de trevas (Fortitude reduz à metade). Alvos que falharem no teste ficam imunes a magias de cura por uma rodada.+2 PM: aumenta o dano em 1d8+4.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    area: 'Nuvem com 6m de raio',
    resistence: 'Fortitude (veja texto)'
  }, {
    id: 134,
    name: 'Possessão',
    type: 'Arcana',
    school: MagicSchools.Encantamento,
    circle: 5,
    description: 'Você projeta sua consciência no corpo do alvo. Enquanto possui uma criatura, você assume o controle total do corpo dela. O seu próprio corpo fica inconsciente e a consciência do alvo fica inerte. Em termos de jogo, você continua usando a sua ficha, mas com os atributos físicos e deslocamento da criatura. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto você a possui, a criatura morre e você deve fazer um teste de Vontade contra a CD da sua própria magia. Se passar, sua consciência retorna para o seu corpo (contanto que esteja dentro do alcance). Do contrário, você também morre. Retornar para o seu corpo voluntariamente é uma ação livre.+5 PM: você ganha acesso às habilidades de raça e classe da criatura.+5 PM: enquanto a magia durar e você estiver dentro do alcance do seu corpo original, pode “saltar” de uma criatura possuída para outra. O novo alvo tem direito a um teste de Vontade. Se falhar, você assume o controle do corpo dele e o alvo anterior recobra a consciência.+5 PM: muda a duração para permanente, mas destrói seu corpo original no processo. Uma criatura possuída pode fazer um teste de Vontade no começo do dia para retomar seu corpo. Se passar, recobra a consciência (e a sua própria consciência fica inerte). O teste se repete no início de cada dia. Se o corpo de uma criatura possuída morrer e houver outra criatura em alcance curto, você pode tentar possuí-la como uma reação. Enquanto houver novos corpos para possuir, você é imortal!',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    target: '1 criatura',
    resistence: 'Vontade Anula'
  }, {
    id: 135,
    name: 'Potência Divina',
    type: 'Divina',
    school: MagicSchools.Transmutacao,
    circle: 3,
    description: 'Você canaliza o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de acordo). Além disso, você recebe Força +8 e resistência a dano 10. Você não pode lançar magias enquanto estiver sob efeito de Potência Divina.+2 PM: aumenta o bônus de Força em +2. +2 PM: aumenta a resistência a dano em +2.+2 PM: muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo não seguir a mesma divindade que você.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 136,
    name: 'Premonição',
    type: 'Divina',
    school: MagicSchools.Adivinhacao,
    circle: 4,
    description: 'Vislumbres do futuro permitem que você reavalie suas ações. Uma vez por rodada, você pode usar uma reação para rolar novamente um teste recém realizado, mas deve aceitar o resultado da nova rolagem. +3 PM: muda a execução para reação, o alcance para curto, o alvo para 1 criatura e a duração para instantânea. Esta magia só pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involuntárias têm direito a um teste de Vontade para negar o efeito.+5 PM: muda a duração para 1 dia.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 137,
    name: 'Primor Atlético',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 1,
    description: 'Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo. +1 PM: além do normal, o alvo recebe um bônus adicional de +20 em testes de Atletismo para saltar (para um bônus total de +30).+1 PM: além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala.+1 PM: muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instantânea. Você salta muito alto e pousa adjacente a uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra esta criatura nesta rodada, recebe os benefícios e penalidades de uma investida e sua arma temo dano aumentado em um dado do mesmo tipo.+3 PM: além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistência. Requer 2º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 138,
    name: 'Profanar',
    type: 'Divina',
    school: MagicSchools.Necromancia,
    circle: 1,
    description: 'Esta magia enche a área com energia negativa. Magias e efeitos que causam dano de trevas ou canalizam energia negativa têm o dano dobrado. Esta magia não pode ser lançada em uma área contendo um símbolo dedicado a qualquer divindade, exceto a sua. Profanar anula Consagrar.+1 PM: além do normal, mortos-vivos na área recebem +2 na Defesa e +2 em todos os testes.+2 PM: aumenta os bônus para mortos-vivos em +1.+9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    area: 'Esfera com 9m de raio'
  }, {
    id: 139,
    name: 'Projetar Consciência',
    type: 'Universal',
    school: MagicSchools.Adivinhacao,
    circle: 5,
    description: 'Esta magia faz com que sua consciência deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por você e ter um nome (A Estalagem do Macaco Caolho Empalhado, por exemplo) e não pode ser muito abrangente, como uma cidade ou reino. Se escolher uma criatura, você transporta sua consciência até onde a criatura estiver, contanto que estejam no mesmo plano. Você adquire uma forma fantasmagórica invisível, mas pode se mostrar usando uma ação de movimento. Pode se mover em qualquer direção com deslocamento de voo 18m e, por ser incorpóreo, é capaz de atravessar objetos sólidos, mas fica limitado a se mover dentro dos limites do local, ou dentro de alcance curto da criatura alvo. Você pode ver e ouvir como se estivesse presente no local e pode falar mentalmente com qualquer criatura que possa ver, contanto que tenham um idioma em comum.+5 PM: além do normal, sua projeção é capaz de lançar magias que não precisem de componentes materiais e tenham duração diferente de sustentada.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Ilimitado,
    target: 'Local ou criatura conhecidos'
  }, {
    id: 140,
    name: 'Proteção contra magia',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 3,
    description: 'Você protege o alvo contra efeitos mágicos nocivos. O alvo recebe +5 em testes de resistência contra magias.+4 PM: muda o bônus para +10. Requer 4º círculo.+4 PM: em vez do normal, o alvo fica imune a uma escola de magia a sua escolha. Requer 4º Círculo.+9 PM: em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5º Círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 141,
    name: 'Proteção Divina',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 1,
    description: 'Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência.+2 PM: aumenta o bônus concedido em +1.+2 PM: muda a execução para reação, o alcance para curto e a duração para1 rodada.+2 PM: muda o alvo para área de círculo com 3m de raio. Todos os aliados dentro do círculo recebem o bônus da magia. Requer 2º círculo.+2 PM: também torna o alvo imune a efeitos de encantamento. Requer 2ºcírculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 142,
    name: 'Purificação',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 2,
    description: 'Seu toque purifica a criatura tocada. Esta magia remove uma das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.+2 PM: também cura todo o dano causado por venenos.+2 PM: em vez de uma, remove todas as condições listadas.+3 PM: também permite que o alvo solte qualquer item amaldiçoado que esteja segurando (mas não remove a maldição do item em si).+7 PM: também dissipa magias e efeitos prejudiciais de encantamento, necromancia e transmutação afetando o alvo. Requer 3º círculo.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 143,
    name: 'Queda Suave',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 1,
    description: 'O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada— o suficiente para não causar dano. Como lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas. Lançada sobre um projétil — como uma flecha ou uma rocha largada do alto de um penhasco —, a magia faz com que ele cause metade do dano normal, devido à lentidão. Queda Suave só funciona em criaturas e objetos em queda livre; a magia não vai frear um golpe de espada ou o mergulho rasante de um atacante voador. Truque: muda o alvo para objeto com até 5kg. Em vez do normal, você pode gastar uma ação de movimento para levitar o alvo até 4,5m em qualquer direção.+2 PM: muda o alvo para até 10 criaturas ou objetos.',
    duration: 'Até chegar ao solo ou cena, o que vier primeiro',
    execution: MagicExecution.Reacao,
    range: MagicRange.Curto,
    target: '1 criatura ou objeto com até 200kg'
  }, {
    id: 144,
    name: 'Raio do Enfraquecimento',
    type: 'Arcana',
    school: MagicSchools.Necromancia,
    circle: 1,
    description: 'Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resistência, o alvo fica fatigado. Se passar, fica vulnerável. Truque: muda o alcance para toque e a resistência para Fortitude anula. Em vez do normal, ao tocar o alvo, sua mão emana um brilho púrpura. O alvo fica fatigado. Uma criatura só pode ser afetada por este truque uma vez por cena.+2 PM: em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Requer 2º círculo.+5 PM: em vez do normal, se falhar na resistência o alvo fica inconsciente. Se passar, fica exausto. Requer 3º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Fortitude Parcial'
  }, {
    id: 145,
    name: 'Raio Polar',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 4,
    description: 'Você dispara um raio azul esbranquiçado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano e fica paralisado, preso em um bloco de gelo. Se passar no teste de resistência, o alvo sofre metade do dano e fica lento por uma rodada. É possível quebrar o gelo para libertar uma criatura presa: o bloco tem 20PV, resistência a dano 10 e é vulnerável a fogo. Uma criatura presa pode usar uma ação completa para fazer um teste de Força e tentar se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD.+3 PM: aumenta o dano em +2d8. +5 PM: muda o alvo para área de explosão de 6m de raio. Em vez de um raio, você dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na área.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura',
    resistence: 'Fortitude Parcial'
  }, {
    id: 146,
    name: 'Raio Solar',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 2,
    description: 'Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de eletricidade (ou 4d12, se forem mortos-vivos) e ficam ofuscadas por uma rodada. Se passarem na resistência, sofrem metade do dano e não ficam ofuscadas. Truque: muda a duração para cena e a resistência para nenhuma. Em vez do normal, cria um facho de luz que ilumina a área. Uma vez por rodada, você pode mudar a direção do facho como uma ação livre.+2 PM: aumenta o dano ou cura em+1d8 (ou +1d12 em mortos-vivos).+3 PM: em vez do normal, criaturas vivas a sua escolha na área curam 4d8 pontos de vida; o restante sofre o danonormalmente.+3 PM: criaturas que falhem na resistência ficam cegas por 1d4 rodadas.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    area: 'Linha'
  }, {
    id: 147,
    name: 'Reanimação Impura',
    type: 'Divina',
    school: MagicSchools.Necromancia,
    circle: 5,
    description: 'Você reanima uma criatura morta recentemente (dentro da mesma cena), trazendo sua alma de volta ao corpo deforma forçada. O tipo da criatura muda para morto-vivo, mas ela retém suas memórias e habilidades de quando estava viva, podendo inclusive lançar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a seus comandos. Quando a cena termina, a criatura volta a ficar morta, mas muitos necromantes malignos usam meios para guardar e preservar o corpo de criaturas poderosas para serem reanimadas dessa forma quando necessário. Se for destruída, a criatura não pode ser reanimada novamente com esta magia.',
    duration: 'Cena',
    execution: MagicExecution.Completa,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 148,
    name: 'Refúgio',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 2,
    description: 'Esta magia cria um domo imóvel e quase opaco por fora, mas transparente pelo lado de dentro. Ele protege contra calor, frio e forças pequenas, mas não contra qualquer coisa capaz de causar dano. Assim, o domo protege contra neve e vento comuns, mas não contra uma flecha ou Bola de Fogo .Porém, como o domo é quase opaco, qualquer criatura dentro dele tem camuflagem total contra ataques vindos de fora. Criaturas podem entrar e sair do domo livremente. Descansar dentro do Refúgio concede recuperação normal de PV e PM.+1 PM: além do normal, os limites do domo são envoltos por uma fumaça negra e espessa, que impede criaturas do lado de fora de enxergar ou ouvir o que está dentro. Criaturas do lado de dentro enxergam e ouvem normalmente o que está do lado de fora. A fumaça também bloqueia magias de adivinhação.+3 PM: em vez do normal, cria uma cabana que comporta até 10 criaturas confortavelmente. Descansar nesse espaço concede recuperação de PV e PM igual ao dobro do nível. Para todos os efeitos é uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mobília (camas, uma mesa com bancos e uma lareira).A porta e as janelas têm 15 PV, RD 5 e são protegidas por um efeito idêntico à magia Tranca Arcana. As paredes têm 200 PV e RD 5.+3 PM: em vez do normal, cria um espaço extradimensional, similar a uma caverna vazia e escura, que comporta até 10 criaturas. A entrada para o espaço precisa estar desenhada em um objeto fixo como uma grande pedra ou árvore. Qualquer criatura que atravesse a entrada consegue entrar no espaço. Nenhum efeito a partir do mundo real afeta o espaço e vice-versa, mas aqueles que estiverem dentro podem observar o mundo real como se uma janela de 1m estivesse centrada na entrada. Qualquer coisa que esteja no espaço extradimensional surge no mundo real na área vazia mais próxima da entrada quando a duração da magia acaba. Requer 3º círculo.+9 PM: em vez do normal, cria uma mansão extradimensional que comporta até 100 criaturas, com quartos luxuosos, comida e bebida e dez servos fantasmagóricos (como na magia Servo Invisível). Descansar na mansão concede recuperação de PV e PM iguala o triplo do nível. A mansão tem uma única entrada, uma porta feita de luz. Você pode deixá-la visível ou invisível como uma ação livre e apenas criaturas escolhidas por você podem passar. Requer 4º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Completa,
    range: MagicRange.Curto,
    target: ''
  }, {
    id: 149,
    name: 'Relâmpago',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 2,
    description: 'Você dispara um poderoso raio que causa 6d6 pontos de dano de eletricidade em todas as criaturas e objetos livres na área.+2 PM: aumenta o dano em +2d6.+3 PM: muda a área para alvo (criaturas escolhidas). Em vez do normal, você dispara vários relâmpagos, um para cada alvo escolhido, causando 6d6 pontos de dano de eletricidade. Requer3º círculo.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    area: 'Linha',
    resistence: 'Reflexos reduz à metade'
  }, {
    id: 150,
    name: 'Relâmpago Flamejante de Reynard',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 4,
    description: 'Esta é uma magia poderosa, mas lenta, desenvolvida pelo metódico e impassível arquimago Reynard. Na primeira rodada de execução, você invoca as energias elementais do fogo e uma de suas mãos fica em chamas. Na segunda rodada, invoca as energias elementais dos relâmpagos, ficando com a outra mão eletrificada. Então, pela duração da magia, pode usar uma ação de movimento para disparar bolas de fogo (6d6 pontos de dano de fogo numa explosão de 3m de raio) ou relâmpagos (6d6 pontos de dano de eletricidade numa linha). Você também pode, como uma ação padrão, usar as duas mãos num ataque de energia mista (12d12 pontos de dano, metade de fogo e metade de eletricidade, numa explosão de 6m de raio). Você precisa estar com as duas mãos livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente. +4 PM: aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12.',
    duration: 'Sustentada',
    execution: MagicExecution.DuasRodadas,
    range: MagicRange.Medio,
    efect: 'Bolas de fogo e relâmpagos',
    resistence: 'Reflexos reduz à metade'
  }, {
    id: 151,
    name: 'Réquiem',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 5,
    description: 'Esta magia cria uma ilusão particular para cada uma das criaturas que atingir. Enquanto a magia durar, no início de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que não tomou as ações que realmente fez no turno anterior e é obrigada a repetir as mesmas ações neste turno, com uma penalidade cumulativa de –5 em todos os testes para cada vez que se repetir (a penalidade não se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A ação repetida consome PM e recursos normalmente e, caso exija um teste de resistência, qualquer alvo faz esse teste com um bônus igual ao da penalidade desta magia.',
    duration: 'Sustentada',
    execution: MagicExecution.Completa,
    range: MagicRange.Curto,
    target: 'Criatura escolhida'
  }, {
    id: 152,
    name: 'Resistência a Energia',
    type: 'Universal',
    school: MagicSchools.Abjuracao,
    circle: 1,
    description: 'Ao lançar a magia, escolha entre ácido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe resistência 10 contra a energia escolhida. Por exemplo, uma criatura com Resistência a Fogo que receba 16 pontos de dano de uma Bola de Fogo perde apenas 6 PV.+2 PM: aumenta a resistência em +5.+2 PM: muda a duração para 1 dia. Requer 2º círculo.+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3º círculo.+5 PM: muda o efeito para resistência a dano de todos os tipos de energia. Requer 3º círculo.+9 PM: muda o efeito para imunidade a um tipo de dano de energia. Requer 4º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 153,
    name: 'Rogar Maldição',
    type: 'Divina',
    school: MagicSchools.Necromancia,
    circle: 2,
    description: 'Você entoa cânticos maléficos que amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha entre os seguintes. Debilidade: o alvo fica esmorecido e não pode se comunicar ou lançar magias. Ainda reconhece seus aliados e pode segui-los e ajudá-los, mas sempre de maneira simplória. Doença: muda a duração para instantânea. O alvo contrai uma doença a sua escolha, que o afeta imediatamente(sem período de incubação).Fraqueza: o alvo fica debilitado e lento. Isolamento: o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a visão, fica cego. Se perder a audição, fica surdo. Se perder o olfato ou paladar, não pode usar a habilidade faro. Se perder o tato, fica caído e não pode se levantar. Você também pode inventar sua própria maldição, usando estes exemplos como sugestões, mas o mestre tem a palavra final sobre o efeito.+3 PM: aumenta o número de efeitos que você pode escolher em +1. Requer 3º círculo.+7 PM: muda a duração para permanente e resistência para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldição, mas por 1 rodada. Requer 4º círculo.',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Fortitude Anula'
  }, {
    id: 154,
    name: 'Roubar a Alma',
    type: 'Universal',
    school: MagicSchools.Necromancia,
    circle: 5,
    description: 'Você rouba a alma da vítima, armazenando-a em um objeto. Se o alvo passar no teste de resistência, sente o impacto de sua alma ser puxada para fora do corpo e fica pasmo por 1 rodada. Se falhar, seu corpo fica caído, inconsciente e inerte, enquanto sua alma é transportada para dentro do objeto. O corpo não envelhece nem se decompõe, permanecendo em estase. Ele pode ser atacado e destruído normalmente. O objeto escolhido deve custar T$ 1.000 por nível da criatura. Um objeto que não seja valioso o bastante se quebrará quando a magia for lançada (embora personagens não conheçam o conceito de “nível” dentro do mundo de jogo, podem ter noção do poder geral de uma criatura específica, estimando assim o valor do objeto). Se o objeto for destruído, a magia se esvai. Se o corpo ainda estiver disponível, a alma retorna para ele. Caso contrário, escapa para os Reinos dos Deuses. Custo adicional: sacrifício de 1 PM.+5 PM: o objeto que abriga a alma detém os mesmos PM totais que o alvo. Se estiver empunhando o objeto, você pode usar esses PM para lançar magias no lugar dos seus. O objeto recupera PM por dia como se o personagem estivesse em descanso normal.+10 PM: como uma reação ao lançar esta magia, você possui o corpo sem alma do alvo, como na magia Possessão(mesmo que não conheça a magia).',
    duration: 'Permanente',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Vontade Parcial'
  }, {
    id: 155,
    name: 'Runa de Proteção',
    type: 'Universal',
    school: MagicSchools.Abjuracao,
    circle: 2,
    description: 'Esta magia protege um objeto que possa ser aberto ou uma passagem de até 6m de largura. Quando uma criatura abre o objeto ou passa pela passagem, a runa explode, causando 6d6 pontos de dano em todos os alvos a até 3m. A criatura que ativa a runa não tem direito a teste de resistência; outras criaturas na área têm direito a um teste de Reflexos para reduzir o dano à metade. Quando lança a magia, você escolhe o tipo de dano, entre ácido, eletricidade, fogo, frio, luz ou trevas. Você pode determinar que a runa se ative apenas em condições específicas— por exemplo, apenas por goblins ou apenas por mortos-vivos. Você também pode criar uma palavra mágica que impeça a runa de se ativar. Um personagem pode encontrar a runa com um teste de Investigação e desarmá-la com um teste de Ladinagem(ambos CD 28).Componente material: pó de diamante no valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invisível.+1 PM: aumenta o dano em +2d6.+1 PM: muda o alvo para 1 objeto que possa ser lido, como um livro, pergaminho ou mapa. A runa explode quando o objeto é lido. O objeto também sofre o dano (possivelmente sendo destruído).+1 PM: este aprimoramento exige que você lance uma magia de até 2º círculo como parte da execução da Runa de Proteção. Quando a runa é ativada, em vez do efeito normal, lança esta magia sobre a criatura que o ativou (se fo ruma magia de área, a área é centrada na criatura).+3 PM: como o aprimoramento acima, mas além de lançar a magia, a runa também causa o dano do efeito normal.',
    duration: 'Permanente até ser descarregada',
    execution: MagicExecution.Completa,
    range: MagicRange.Toque,
    target: '1 alvo ou passagem de até 6m de largura',
    resistence: 'Nenhum ou Reflexos reduz à metade (veja o texto)'
  }, {
    id: 156,
    name: 'Salto Dimensional',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 2,
    description: 'Esta magia transporta você para outro lugar dentro do alcance. Você não precisa de linha de efeito e pode simplesmente imaginar seu destino. Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas não podem agir até a rodada seguinte. Esta magia não permite que você apareça dentro de um corpo sólido; se o ponto de chegada não tem espaço livre, você ressurge na área vazia mais próxima.+1 PM: muda o alcance para médio.+1 PM: muda o alvo para você e uma criatura voluntária. Você pode escolher este aprimoramento mais vezes para aumentar o número de alvos adicionais em +1, mas deve estar tocando todos os alvos.+2 PM: muda a execução para reação. Em vez do normal, você salta para um espaço adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo.+3 PM: muda o alcance para longo.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: 'Você'
  }, {
    id: 157,
    name: 'Santuário',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 1,
    description: 'Qualquer criatura que tente fazer uma ação hostil contra o alvo deve fazer um teste de Vontade. Se falhar, não consegue atacar e não pode tentar novamente até o fim da cena. Santuário não protege o alvo de efeitos de área. Além disso, o próprio alvo também não pode fazer ações hostis, ou a magia é dissipada — mas pode usar outras habilidades e magias de cura e suporte (como Curar Ferimentos, Bênção e assim por diante).+1 PM: além do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Você não pode ser percebido por criaturas do tipo escolhido, não importando o sentido usado.+9 PM: também protege o alvo contra efeitos de área. Uma criatura que tente atacar uma área que inclua o alvo deve fazer o teste de Vontade; se falhar, não pode atacar aquela área a menos que o alvo tenha saído dela.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura',
    resistence: 'Vontade Anula'
  }, {
    id: 158,
    name: 'Segunda Chance',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 5,
    description: 'Um brilho alaranjado, na forma de asas de fênix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.+1 PM: aumenta a cura em +20 PV.+2 PM: muda o alcance para curto e o alvo para até 5 criaturas.+5 PM: muda o alvo para uma criatura que tenha morrido há até uma rodada. Esta magia pode curá-la.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 159,
    name: 'Selo de Mana',
    type: 'Universal',
    school: MagicSchools.Encantamento,
    circle: 3,
    description: 'Seu toque manifesta um selo mágico na pele do alvo, que atrapalha o fluxo de mana. Pela duração da magia, sempre que o alvo realizar qualquer ação que gaste PM, deve fazer um teste de Vontade; se passar, faz a ação normalmente. Se falhar, o efeito da ação é anulado (mas os PM são gastos mesmo assim).+4 PM: muda o alcance para curto e o alvo para criaturas dentro do alcance. Requer 4º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura',
    resistence: 'Vontade Parcial'
  }, {
    id: 160,
    name: 'Semiplano',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 5,
    description: 'Você cria um semiplano — uma dimensão particular. Você pode entrar no semiplano gastando uma ação padrão e 1 PM, desaparecendo do plano material como se tivesse se teletransportado. Você pode levar criaturas voluntárias que esteja tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos que esteja tocando, ao custo de 1 PM por 200kg.Uma vez no semiplano, você pode voltar ao plano material, no mesmo local onde estava, gastando uma ação completa (mas sem custo em PM), ou pode lançar Viagem Planar para voltar para outro local. Você escolhe a forma e aparência do semiplano — uma caverna, um asteroide que singra o éter, um palacete de cristal etc. Ele contém ar, luz e calor, mas além disso é vazio. Entretanto, você pode levar itens (mobília, ferramentas etc.) a cada viagem.+2 PM: adiciona alvo (1 criatura).Você cria uma semiplano labiríntico e expulsa o alvo para ele. A cada rodada, a vítima tem direito a um teste de Inteligência (CD 30), com bônus cumulativo de +1 para cada teste já realizado, para escapar do labirinto. Quando o alvo escapa, a magia termina e o alvo reaparece no plano material no mesmo local onde estava quando a magia foi lançada. Magias como Salto Dimensionale Teletransporte não ajudam a escapar do labirinto, mas Viagem Planar, sim.+5 PM: muda a duração para permanente e adiciona componente material(diorama do semiplano feito de materiais preciosos no valor de T$ 5.000).Você pode lançar a magia diversas vezes para aumentar as dimensões do semiplano em +30m de lado a cada vez.',
    duration: '1 dia',
    execution: MagicExecution.Completa,
    range: MagicRange.Curto,
    efect: 'Semiplano com 30m de lado'
  }, {
    id: 161,
    name: 'Servo Divino',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 3,
    description: 'Você pede a sua divindade que envie um espírito para ajudá-lo. Esse espírito realiza uma tarefa a sua escolha que possa ser realizada dentro de até uma hora — desde algo simples como “use suas asas para nos levar até o topo da montanha” até algo complexo como“ escolte esses camponeses até o castelo”. A magia é descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura é escolhido pelo mestre, de acordo com as necessidades da tarefa. Componente material: um pagamento de T$ 100 ao espírito. A forma de pagamento varia — doações a um templo, um item mágico ou mesmo dinheiro.+4 PM: muda a duração para 1 dia ou até ser descarregada. O espírito realiza uma tarefa a sua escolha que exija até um dia. O custo do pagamento aumenta para T$ 500. O resto segue normal.+9 PM: muda a duração para 1 semana ou até ser descarregada. O espírito realiza uma tarefa que exija até uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal.',
    duration: 'Cena ou até ser descarregada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    efect: 'Criatura Conjurada'
  }, {
    id: 162,
    name: 'Servo morto-vivo',
    type: 'Universal',
    school: MagicSchools.Necromancia,
    circle: 3,
    description: 'Esta magia transforma o cadáver de um humanoide, animal ou monstro em um esqueleto ou zumbi (conforme o estado de conservação do corpo). O morto-vivo então obedece a todos os seus comandos, mesmo suicidas. Se quiser que o morto-vivo o acompanhe, ele funciona como um aliado iniciante, de um tipo a sua escolha entre ajudante, atirador, combatente, fortão, guardião ou montaria. Se não quiser usar o morto-vivo como aliado, pode ordenar que ele proteja um local específico, atacando invasores (nesse caso, use as estatísticas no Apêndice). O número máximo de mortos-vivos que você pode ter sob seu comando ao mesmo tempo é igual ao seu nível, mas você só pode receber os benefícios de um deles como aliado por vez. Eles duram até serem destruídos(um morto-vivo destruído não pode ser reanimado).Componente material: um ônix negro (T$100), inserido na boca ou olho do cadáver.+3 PM: muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carniçal. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fortão ou guardião. O resto segue normal.+3 PM: muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal.+7 PM: muda o componente material para ferramentas de embalsamar (T$1.000). Em vez de um zumbi ou esqueleto, cria uma múmia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, curandeiro, destruidor ou guardião. O restante da magia segue normal. Requer 4º círculo.',
    duration: 'Instantânea',
    execution: MagicExecution.Completa,
    range: MagicRange.Toque,
    target: '1 cadáver'
  }, {
    id: 163,
    name: 'Servos Invisíveis',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 2,
    description: 'Você cria até cinco servos invisíveis e silenciosos, capazes de realizar tarefas simples como apanhar lenha, colher frutos, varrer o chão ou alimentar um cavalo. Em geral, os servos são capazes de manter arrumada e organizada uma mansão ou pequena torre. Eles também podem ajudá-lo em tarefas mais complexas, como fazer uma pesquisa ou preparar uma poção. Cada servo pode oferecer +1 num teste de perícia a sua escolha, como se estivesse prestando ajuda (veja o Capítulo 5). Esse bônus não se aplica a testes de ataque ou resistência. Os servos não são criaturas reais; não podem lutar, nem resistir a qualquer dano ou efeito que exija um teste de resistência — falharão automaticamente no teste e serão destruídos.+1 PM: aumenta o número de servos em +1.+3 PM: em vez do normal, a magia conjura apenas um servo, capaz de realizar tarefas mais complexas. Ele pode falar qualquer idioma que você saiba e pode fazer testes de qualquer perícia com bônus de +10 (exceto Fortitude, Iniciativa, Luta, Pontaria, Reflexos e Vontade). Assim, pode realizar missões de espionagem (Furtividade),roubar um item (Ladinagem), atuar como escriba (Ofício) ou encontrar um livro específico para suas pesquisas (Misticismo).',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    efect: 'Até 5 criaturas conjuradas'
  }, {
    id: 164,
    name: 'Seta Infalível de Talude',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 1,
    description: 'Favorita entre magos iniciantes, esta magia lança duas setas de energia que acertam automaticamente, causando 1d4+1 pontos de dano de essência cada. Você pode disparar contra alvos diferentes ou concentrar as setas num mesmo alvo. Caso você possua um bônus no dano de magias, como pela habilidade Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo).+2 PM: muda as setas para lanças de energia, que causam 1d8+1 pontos de dano de essência cada. Requer 2º círculo.+2 PM: muda o número de setas/lanças para três.+4 PM: muda o número de setas/lanças para cinco. Requer 2º círculo.+9 PM: muda o número de setas/lanças para dez. Requer 4º círculo.',
    duration: 'Instantâneas',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: 'Até 2 criaturas'
  }, {
    id: 165,
    name: 'Silêncio',
    type: 'Divina',
    school: MagicSchools.Ilusao,
    circle: 2,
    description: 'Um silêncio sepulcral recai sobre a área e nenhum som é produzido ali. Enquanto estiverem na área, todas as criaturas ficam surdas. Além disso, como lançar magias exige palavras mágicas, normalmente nenhuma magia pode ser lançada dentro da área. +1 PM: muda a área para alvo de 1 objeto. Em vez do normal, o alvo emana uma área de silêncio com 3m de raio.+2 PM: muda a duração para cena. Em vez do normal, nenhum som pode deixar a área, mas criaturas dentro da área podem falar, ouvir, emitir sons e lançar magias com palavras mágicas normalmente. ',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    area: 'Esfera com 6m de raio'
  }, {
    id: 166,
    name: 'Soco de Arsenal',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 2,
    description: 'Ninguém sabe se Mestre Arsenal foi realmente o criador desta magia — mas ele foi o primeiro a utilizá-la. Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando 4d6 + mod. Força pontos de dano de impacto. A vítima é empurrada 3m na direção oposta a sua (ou 1,5m se passar na resistência).+1 PM: muda o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural é triplicado; uma criatura Média pode atacar adversários a até 4,5m, por exemplo.+2 PM: aumenta o dano em +1d6. +4 PM: aumenta a distância do efeito de empurrar em +3m. +5 PM: muda o tipo do dano para essência.',
    duration: 'Instanânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    target: '1 criatura',
    resistence: 'Fortitude reduz à metade'
  }, {
    id: 167,
    name: 'Sombra Assassina',
    type: 'Arcana',
    school: MagicSchools.Ilusao,
    circle: 5,
    description: 'Esta magia cria uma duplicata ilusória do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifestação sólida de sua própria sombra. A duplicata de sombras segue automaticamente o alvo. Sempre que o alvo faz uma ação hostil — fazer um ataque, usar uma habilidade, lançar uma magia — a sombra imediatamente realiza a mesma ação contra o alvo, usando as mesmas estatísticas e rolagens. A sombra pode ser atacada, tem as mesmas estatísticas do alvo e é destruída quando chega a 0 PV. Se o alvo passar no teste de resistência, a sombra desaparece no final do turno do alvo, depois de copiar sua ação dessa rodada.+10 PM: muda o alvo para criaturas na área',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura',
    resistence: 'Vontade Parcial'
  }, {
    id: 168,
    name: 'Sonho',
    type: 'Arcana',
    school: MagicSchools.Adivinhacao,
    circle: 4,
    description: 'Você entra nos sonhos de uma criatura. Uma vez lá, pode conversar com o alvo até que ele acorde. Se a criatura não estiver dormindo quando você lançar a magia, você pode permanecer em transe até que ela adormeça. Durante o transe você fica indefeso e sem consciência dos arredores. Você pode sair do transe quando quiser, mas a magia termina.+2 PM: você transforma o sonho do alvo em um pesadelo terrível. A vítima deve fazer um teste de Vontade. Se falhar, não recupera nenhum PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela. Use os mesmos modificadores da magia Vidência.+1 PM: aumenta o número de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com você.',
    execution: MagicExecution.DezMinutos,
    range: MagicRange.Ilimitado,
    target: '1 criatura viva'
  }, {
    id: 169,
    name: 'Sono',
    type: 'Arcana',
    school: MagicSchools.Encantamento,
    circle: 1,
    description: 'Um sono místico recai sobre o alvo. Se passar na resistência, fica fatigado por uma rodada. Se falhar, fica inconsciente e caído.+2 PM: muda o alvo para área de quadrado com 3m de lado. Todas as criaturas na área dentro do limite de nível são afetadas.+2 PM: afeta alvos de até 8º nível. Requer 2º círculo.+5 PM: afeta alvos de até 12º nível. Requer 3º círculo.+5 PM: muda o alvo para criaturas escolhidas. Todas as criaturas no alcance dentro do limite de nível são afetadas.+9 PM: afeta alvos de até 16º nível. Requer 4º círculo.+14 PM: muda o alvo para 1 criatura de qualquer nível. Requer 5º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura de até 4º nível'
  }, {
    id: 170,
    name: 'Sopro da Salvação',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 3,
    description: 'Você enche seus pulmões de energia positiva e sopra um cone de poeira reluzente. O sopro afeta apenas seus aliados na área, curando 2d8+4 pontos de vida e removendo uma das seguintes condições de todos os alvos: abalado, atordoado, apavorado, alquebrado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, paralisado, pasmo e surdo.+2 PM: aumenta a quantidade de cura em 1d8+2.+4 PM: além do normal, se um aliado estiver com PV negativos, seus PV são levados a 0 e então a cura é aplicada.+4 PM: remove todas as condições listadas, em vez de apenas uma.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    area: 'Cone de 9m'
  }, {
    id: 171,
    name: 'Sopro das Uivantes',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 2,
    description: 'Você sopra uma onda gélida, causando 4d6 pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho Médio ou menor que falhem na resistência são empurradas 6m na direção oposta. Se houver uma parede ou outro objeto sólido (mas não uma criatura) no caminho, a criatura para de se mover, mas sofre 1d6 pontos de dano de impacto. +2 PM: aumenta o dano de frio em +2d6. +3 PM: aumenta o tamanho máximo das criaturas afetadas em uma categoria. Requer 3º círculo.+3 PM: além do normal, criaturas que falhem no teste de Fortitude ficam caídas.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Seismetro,
    area: 'Cone',
    resistence: 'Fortitude Parcial'
  }, {
    id: 172,
    name: 'Suporte Ambiental',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 1,
    description: 'Esta magia garante a sobrevivência em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa.+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura'
  }, {
    id: 173,
    name: 'Sussuros Insanos',
    type: 'Arcana',
    school: MagicSchools.Encantamento,
    circle: 2,
    description: 'Você murmura palavras desconexas que afetam a mente do alvo. O alvo fica confuso. No fim de cada um de seus turnos, o alvo pode fazer um teste de Vontade. Se passar, a magia é dissipada.+2 PM: aumenta o número de alvo sem +1. +3 PM: muda o alvo para 1 criatura. +12 PM: muda o alvo para criaturas escolhidas. Requer 5º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 humanoide',
    resistence: 'Vontade Anula'
  }, {
    id: 174,
    name: 'Talho invisível de Edauros',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 4,
    description: 'Esta magia cruel foi desenvolvida pelo mago de combate Edauros, quando ainda era um bípede. Você faz um gesto rápido e dispara uma lâmina de arem alta velocidade. Criaturas na área sofrem 8d8 pontos de dano de corte e ficam sangrando. Alvos que passem no teste de resistência sofrem metade do dano e não ficam sangrando. +2 PM: aumenta o dano em +2d8. +2 PM: muda o alvo para você e a duração para sustentada. Uma vez por rodada, como uma ação padrão, você pode disparar uma lâmina de ar contra um alvo em alcance médio, causando 6d8 pontos de dano de corte (Fortitude reduz à metade).',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    area: 'Cone',
    resistence: 'Fortitude Parcial'
  }, {
    id: 175,
    name: 'Teia',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 1,
    description: 'Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica enredada. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo (CD igual à da magia). Além disso, a área ocupada por Teia é considerada terreno difícil. A Teia é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas(veja Condições, no Apêndice B). +1 PM: além do normal, criaturas que falhem na resistência também ficam imobilizadas. +2 PM: além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2ºcírculo.+2 PM: aumenta a área em +1 cubo de 1,5m.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    area: 'Cubo com 6m de lado'
  }, {
    id: 176,
    name: 'Telecinecia',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 3,
    description: 'Você move objetos ou criaturas se concentrando. Ao lançar a magia, escolha uma das opções a seguir. Força Contínua: você move uma criatura ou objeto com até 200kg, a até 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O peso pode ser movido em qualquer direção dentro do alcance. Ele cai no chão se sair do alcance ou a magia terminar. Duração: sustentada. Empurrão Violento: nesta versão a energia mágica é expelida de uma única veze você pode arremessar até 10 objetos, ou um peso total de 200kg, o que for menor. Os objetos devem estar a até3m uns dos outros. Objetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano por 10kg (objetos macios, sem pontas ou sem fio) até1d6 pontos de dano por 10kg (objetos duros, pontudos ou afiados). Criaturas atingidas têm direito a um teste de Reflexos para reduzir o dano à metade. Criaturas dentro da capacidade de peso da magia podem ser arremessadas, mas podem fazer um teste de Vontade para evitar o efeito (em si mesmas, ou em objetos que estejam segurando).Uma criatura arremessada contra uma superfície sólida sofre 1d6 pontos de dano para cada 3m que “voou” no deslocamento. Duração: sustentada.+3 PM: aumenta o limite de peso em 100kg.',
    duration: 'Varia (veja texto)',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
  }, {
    id: 177,
    name: 'Teletransporte',
    type: 'Arcana',
    school: MagicSchools.Convocacao,
    circle: 3,
    description: 'Esta magia transporta os alvos para um lugar a sua escolha a até 1.000km.Você precisa fazer um teste de Misticismo, com dificuldade que depende de seu conhecimento sobre o local dedestino.CD 20. Um lugar familiar, que você visita com frequência.CD 30. Um lugar conhecido, que você já visitou pelo menos uma vez.CD 40. Um lugar desconhecido, que você nunca visitou e só conhece a partir da descrição de outra pessoa que esteve lá. Você não pode se teletransportar para um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode se transportar para a “sala de tesouro do rei” se nunca esteve nela nem falou com alguém que esteve. Se passar no teste, os alvos chegam ao lugar desejado. Se falhar, os alvos surgem 1d10 x 10km afastados em qualquer direção (se o destino é uma cidade costeira, você pode surgir em alto-mar).Se falhar por 5 ou mais você chega em um lugar parecido, mas errado. E se você rolar 1 natural no teste a magia falha, gastando PM normalmente, e você fica atordoado por 1d4 rodadas.+2 PM: aumenta o número de alvo sem +5.+2 PM: em vez do normal, a magia teletransporta os alvos para seu santuário — um local familiar e previamente preparado. A magia pode ser usada sem limite de distância ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santuário exige um ritual de um dia e o gasto de T$ 1.000. Você só pode ter um santuário por vez. +9 PM: muda a execução para ação completa, a duração para cena e adiciona sacrifício de 1 PM. Em vez do normal, você cria um círculo de 1,5m de diâmetro no chão, que transporta qualquer criatura que pisar nele. O destino é escolhido quando a magia é lançada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por você. O círculo é tênue e praticamente invisível. Você pode marcá-lo de alguma forma (por exemplo, lançando-o sobre uma plataforma elevada). Se não fizer isso, alguém pode pisar nele por acidente. Junte isso a um destino hostil e você terá uma armadilha bastante eficaz! Requer 5º círculo.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: 'Até 5 criaturas voluntárias'
  }, {
    id: 178,
    name: 'Tempestade Divina',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 2,
    description: 'Esta magia só pode ser usada em ambientes abertos. A área fica sujeita a um vendaval — ataques à distância sofrem penalidade de –5, chamas são apagadas e névoas e fumaças são dissipadas em 1 rodada. Você também pode causar chuva (–5 em testes de Percepção), neve (a área fica escorregadia e exige testes de Acrobacia para equilíbrio) ou granizo (1 ponto de dano de impacto por rodada, no início de seus turnos). Criaturas na área recebem uma penalidade de –15m no deslocamento de voo. +1 PM: muda a duração para sustentada. Além do normal, uma vez por rodada, como uma ação de padrão, você pode fazer um relâmpago cair sobre um alvo na área, causando 3d8 pontos de dano de eletricidade (Reflexos reduz à metade).200 Magia +1 PM: se escolheu causar granizo, muda o dano para 1d6.+2 PM: aumenta o dano em +1 dado do mesmo tipo.+3 PM: se escolheu causar chuva, ela revela criaturas e objetos invisíveis naárea.+7 PM: se escolheu causar neve, criaturas na área sofrem 2d6 pontos de dano de frio no início de seus turnos.',
    duration: 'Cena',
    execution: MagicExecution.Completa,
    range: MagicRange.Longo,
    area: 'Cilindro com 9m de raio e 9m de altura'
  }, {
    id: 179,
    name: 'Tentátuclos de Trevas',
    type: 'Arcana',
    school: MagicSchools.Necromancia,
    circle: 3,
    description: 'Um círculo de energias sombrias se abre no chão, de onde surgem tentáculos feitos de treva viscosa. Ao lançar a magia e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando seu bônus de Misticismo) contra cada criatura na área. Se você passar, a criatura é agarrada; se a vítima já está agarrada, é esmagada, sofrendo 4d6 pontos de dano de trevas. A área conta como terreno difícil. Os tentáculos são imunes a dano.+2 PM: aumenta o raio da área em +3m.+2 PM: aumenta o dano dos tentáculos em +2d6.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Medio,
    area: 'Círculo com 6m de raio'
  }, {
    id: 180,
    name: 'Terremoto',
    type: 'Divina',
    school: MagicSchools.Evocacao,
    circle: 4,
    description: 'Esta magia cria um tremor de terra que rasga o solo. O terremoto dura uma rodada, durante a qual criaturas sobre o solo não podem se mover, atacar ou lançar magias. O efeito exato depende do terreno. Caverna ou subterrâneo: a magia derruba o teto, causando 12d6 pontos de dano de impacto e agarrando todas as criaturas na área. Um teste de Reflexos reduz o dano à metade e evita ficar agarrado. Construção: todas as estruturas na área sofrem 100 pontos de dano, o suficiente para derrubar qualquer construção de madeira ou alvenaria simples, mas não alvenaria reforçada. Criaturas em uma construção que desmorone sofrem o mesmo efeito de criaturas em uma caverna (veja acima).Espaço aberto: fendas se abrem no chão; cada criatura tem 25% de chance (1em 1d4)de cair em uma delas. A vítima tem tem direito a um teste de Reflexos para se agarrar na borda e escapar. No final da rodada as fendas se fecham, matando todos que estejam dentro delas. Penhascos: o penhasco racha, criando um desmoronamento que percorre uma distância horizontal igual à distância vertical da queda. Por exemplo, um penhasco com 30m de altura desmorona em uma área de 30m de comprimento além da base. Qualquer criatura no caminho sofre 8d6 pontos de dano de impacto e fica agarrada. Um teste de Reflexos reduz o dano à metade e evita ficar agarrado. Rio, lago ou pântano: fissuras se abrem sob a água, drenando-a e formando um lamaçal. Criaturas na área precisam fazer um teste de Reflexos para não afundarem na lama e ficarem agarradas. No final da rodada as fissurasse fecham, possivelmente afogando as criaturas que ficaram presas. Escapar exige uma ação completa e um teste de Atletismo. Criaturas agarradas (efeito possível de “caverna”, “construção” e “penhasco”) sofrem 1d6 pontos de dano por rodada até serem libertadas, o que exige uma ação completa e um teste de Atletismo.',
    duration: '1 rodada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Longo,
    area: 'Dispersão com 30m de raio'
  }, {
    id: 181,
    name: 'Toque Chocante',
    type: 'Arcana',
    school: MagicSchools.Evocacao,
    circle: 1,
    description: 'Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a critério do mestre), sofre uma penalidade de –5 no teste de resistência.+1 PM: aumenta o dano em 1d8+1.+1 PM: como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano da arma e da magia. +2 PM: muda o alcance para pessoal e o alvo para área de explosão com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criaturas na área.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura',
    resistence: 'Fortitude reduz à metade'
  }, {
    id: 182,
    name: 'Toque da Morte',
    type: 'Universal',
    school: MagicSchools.Necromancia,
    circle: 5,
    description: 'Sua mão exala energias letais. Se a criatura tocada falhar no teste de Fortitude, seus PV são reduzidos a –10; se passar, sofre 10d8 pontos de dano detrevas.+2 PM: muda o alcance para curto. Em vez de tocar no alvo, você dispara um raio púrpura da ponta de seu dedo indicador.+5 PM: muda o alcance para curto e o alvo para inimigos no alcance. Em vez de tocar no alvo, você dispara raios púrpuras da ponta de seus dedos.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura',
    resistence: 'Fortitude Parcial'
  }, {
    id: 183,
    name: 'Toque Vampírico',
    type: 'Arcana',
    school: MagicSchools.Necromancia,
    circle: 2,
    description: 'Sua mão brilha com energia sombria, causando 6d6 pontos de dano de trevas. Você recupera pontos de vida iguais à metade do dano causado.+1 PM: como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais à metade do dano da magia.+2 PM: muda o alcance para pessoal ,o alvo para você e a duração para cena. Em vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 criatura e causar 3d6 pontos de dano. Você recupera pontos de vida iguais à metade do dano causado. Requer 2º círculo.+2 PM: aumenta o dano em +2d6. Requer 3º círculo.',
    duration: 'Instanânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 criatura',
    resistence: 'Fortitude reduz à metade'
  }, {
    id: 184,
    name: 'Tranca Arcana',
    type: 'Arcana',
    school: MagicSchools.Abjuracao,
    circle: 1,
    description: 'Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado(como um baú, caixa etc.), aumentando a CD de testes de Força ou Ladinagem para abri-lo em +10. Você pode abrir livremente sua própria tranca sem problemas. Componente material: chave de bronze no valor de T$ 25.Truque: muda o alcance para curto .Em vez do normal, pode abrir ou fechar um objeto de tamanho Médio ou menor, como uma porta ou baú. Não afeta objetos trancados.+1 PM: muda o alcance para curto e a duração para instantânea. Em vez do normal, a magia abre portas, baús e janelas trancadas, presas, barradas ou protegidas por outra Tranca Arcana (neste caso, o efeito é dissipado). Ela também afrouxa grilhões e solta correntes.+5 PM: aumenta a CD para abrir o alvo em +5.+5 PM: muda o alvo para 1 objeto de qualquer tamanho, podendo afetar até mesmo os portões de um castelo. Requer 3º círculo.',
    duration: 'Permanente',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 objeto grande ou menor'
  }, {
    id: 185,
    name: 'Tranquilidade',
    type: 'Divina',
    school: MagicSchools.Encantamento,
    circle: 1,
    description: 'Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente (veja Diplomacia no Capítulo 2) e não pode atacar ou realizar qualquer tipo de ação agressiva. Se passar, recebe –2em testes de ataque. Qualquer ação hostil contra o alvo anula a magia e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).+1 PM: muda o alvo para 1 criatura.+1 PM: aumenta o número de alvo sem +1.+2 PM: aumenta a penalidade em –1.+5 PM: muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 animal ou humanoide',
    resistence: 'Vontade Parcial'
  }, {
    id: 186,
    name: 'Tranformação de Guerra',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 3,
    description: 'Você se torna uma máquina de combate, ficando mais forte, rápido e resistente. Você recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV temporários. Durante a Transformação de Guerra você não pode lançar magias, mas se torna proficiente em todas as armas.+2 PM: aumenta os bônus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV temporários em +10.+2 PM: adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto metálico e sem expressões. Você recebe resistência a dano15/adamante e imunidade a atordoamento, dano não letal, doenças, encantamento, fadiga, paralisia, necromancia, sangramento, sono e veneno, e não precisa respirar',
    duration: 'Sustentada',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 187,
    name: 'Transmutar Objetos',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 1,
    description: 'A magia transforma matéria bruta para moldar um novo objeto. Você pode usar matéria-prima mundana para criar um objeto de tamanho Pequeno ou menor e preço máximo de T$ 25,como um balde ou uma espada. O objeto reverte à matéria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia não pode ser usada para criar objetos consumíveis, como alimentos, itens alquímicos ou venenos, nem objetos com mecanismos complexos, como bestas ou armas de fogo. Transmutar Objetos anula Despedaçar. Truque: muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você pode alterar as propriedades físicas do objeto, como colorir, limpar ou sujar itens pequenos (incluindo peças de roupa), aquecer, esfriar e/ou temperar(mas não produzir) até 0,5kg de material inanimado (incluindo comida),ou curar 1 PV do objeto, consertando pequenas falhas como colar um frasco de cerâmica quebrado, unir os elos de uma corrente ou costurar uma roupa rasgada. Um objeto só pode ser afetado por este truque uma vez por dia.+2 PM: aumenta o limite de tamanho do objeto em uma categoria.+1 PM: aumenta o preço máximo do objeto criado em + T$ 25.+1 PM: muda o alcance para toque, o alvo para 1 construto e a duração para instantânea. Ao invés do normal, cura2d8 PV do alvo. Você pode gastar 2 PM adicionais para aumentar a cura em +1d8.+5 PM: muda o alvo para 1 objeto e a duração para instantânea. Em vez do normal, você cura todos os PV do alvo, restaurando o objeto totalmente. Este aprimoramento está sujeito aos limites de tamanho e preço do objeto conforme a magia original e não funciona se o objeto tiver sido completamente destruído (queimado até virar cinzas ou desintegrado, por exemplo). Requer 3ºcírculo. +9 PM: como o aprimoramento anterior, mas passa a afetar itens mágicos.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: 'Matéria-prima , como madeira , rochas , ossos'
  }, {
    id: 188,
    name: 'Velocidade',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 2,
    description: 'O alvo pode realizar uma ação padrão ou de movimento adicional por turno. Esta ação não pode ser usada para lançar magias.+7 PM: muda o alvo para criaturas no alcance. Requer 4º círculo. +7 PM: muda o alcance para pessoal e o alvo para você. Você acelera sua mente, além de seu corpo. A ação adicional pode ser usada para lançar magias. Requer 4º círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Curto,
    target: '1 criatura'
  }, {
    id: 189,
    name: 'Vestimenta da Fé',
    type: 'Divina',
    school: MagicSchools.Abjuracao,
    circle: 2,
    description: 'Você fortalece uma indumentária como poder de sua fé. Isso aumenta o bônus de Defesa de uma armadura ou escudo em +2 (isso é uma melhoria no item, portanto é cumulativa com outras magias). No caso de um traje, ele passa a oferecer +2 na Defesa e continua contando como se você não estivesse usando armadura.+3 PM: o objeto também oferece o mesmo bônus em testes de resistência. Requer 3º círculo. +4 PM: aumenta o bônus em +1.+7 PM: o objeto também oferece resistência a dano 5. Requer 4º círculo.',
    duration: '1 dia',
    execution: MagicExecution.Padrao,
    range: MagicRange.Toque,
    target: '1 trajo, armadura ou escudo'
  }, {
    id: 190,
    name: 'Viagem Arbórea',
    type: 'Divina',
    school: MagicSchools.Convocacao,
    circle: 3,
    description: 'Ao lançar essa magia, você pode entrar em uma árvore adjacente que seja maior do que você. Você pode permanecer dentro da árvore livremente, percebendo os arredores de forma normal (mas sem poder fazer ações). Você pode gastar uma ação de movimento para sair da mesma árvore, ou de qualquer outra dentro de 1km. Se estiver dentro de uma árvore que seja destruída, a magia termina e você sofre 10d6 pontos de dano. Enquanto a magia durar você pode gastar ações de movimento para entrar em outras árvores.+2 PM: muda o alcance para toque, o alvo para até cinco criaturas e a duração para instantânea. Os alvos entram em uma planta (de tamanho Médio ou maior) e saem em outra planta do mesmo tamanho a até 100km de distância, especificada em direção e distância aproximadas (como “50km ao norte daqui”).',
    duration: 'Cena',
    execution: MagicExecution.Completa,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 191,
    name: 'Viagem Planar',
    type: 'Universal',
    school: MagicSchools.Convocacao,
    circle: 4,
    description: 'Você viaja instantaneamente para outro plano de existência. Dentro do outro plano, você chega de 10 a 1.000km do destino pretendido (role 1d100 e multiplique por 10km).Componente material: um bastão de metal precioso em forma de forquilha (no valor de T$ 1.000). O tipo de metal determina para qual plano de existência você será enviado. Os metais que levam a dimensões específicas podem ser difíceis de encontrar, de acordo com o mestre.+2 PM: muda o alvo para até cinco criaturas voluntárias que você esteja tocando.',
    duration: 'Instantânea',
    execution: MagicExecution.Completa,
    range: MagicRange.Toque,
    target: 'Pessoal'
  }, {
    id: 192,
    name: 'Vidência',
    type: 'Universal',
    school: MagicSchools.Adivinhacao,
    circle: 3,
    description: 'Através de uma superfície reflexiva (bacia de água benta para clérigos, lago para druidas, bola de cristal para magos, espelho para feiticeiros etc.) você pode ver e ouvir uma criatura escolhida e seus arredores (cerca de 6mem qualquer direção), mesmo que ela se mova. O alvo pode estar a qualquer distância, mas se passar em um teste de Vontade, a magia falha. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela.• Não conhece o alvo: +10.• Ouviu falar do alvo: +5.• O alvo está em outro plano ou mundo: +5.• Já encontrou o alvo pessoalmente:+0.• Tem uma pintura, escultura ou outra representação do alvo: –2.• Conhece bem o alvo: –5.• Tem um pertence pessoal ou peça de roupa do alvo: –5.• Tem uma parte do corpo do alvo(unhas, cabelos...): –10.',
    duration: 'Sustentada',
    execution: MagicExecution.Completa,
    range: MagicRange.Ilimitado,
    target: '1 criatura',
    resistence: 'Vontade Anula'
  }, {
    id: 193,
    name: 'Visão da Verdade',
    type: 'Universal',
    school: MagicSchools.Adivinhacao,
    circle: 4,
    description: 'Você passa a enxergar a forma real das coisas. Você pode ver através de camuflagem (normal e total), escuridão (normal e mágica) e magias de ilusão e transmutação (enxergando a verdade como formas translúcidas ou sobrepostas).+1 PM: muda o alcance para toque e o alvo para 1 criatura.+1 PM: além do normal, o alvo fica com sentidos apurados; ele recebe +10 em todos os testes de Percepção.+2 PM: além do normal, o alvo escuta falsidades; ele recebe +10 em todos os testes de Intuição.+4 PM: além do normal, o alvo enxerga através de paredes e barreiras com 30cm de espessura ou menos (as paredes e barreiras parecem translúcidas).',
    duration: 'Cena',
    execution: MagicExecution.Movimento,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 194,
    name: 'Visão Mística',
    type: 'Universal',
    school: MagicSchools.Adivinhacao,
    circle: 1,
    description: 'Seus olhos brilham com uma luz azul e passam a enxergar auras mágicas. Este efeito é similar ao uso de Misticismo para detectar magia, mas você detecta todas as auras mágicas em alcance médio e recebe todas as informações sobre elas sem gastar ações. Além disso, você pode gastar uma ação de movimento para descobrir se uma criatura que possa perceber em alcance médio é capaz de lançar magias e qual a aura gerada pelas magias de círculo mais alto que ela pode lançar.+1 PM: recebe visão no escuro.+1 PM: também pode enxergar objetos e criaturas invisíveis. Eles aparecem como formas translúcidas.+2 PM: muda a duração para 1 dia.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 195,
    name: 'Vitalidade Fantasma',
    type: 'Arcana',
    school: MagicSchools.Necromancia,
    circle: 1,
    description: 'Você suga energia vital da terra, recebendo 2d8 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.+2 PM: aumenta os PV temporários recebidos em +1d8.+5 PM: muda o alvo para área (esfera de 6m de raio) e a resistência para Fortitude reduz à metade. Em vez do normal, você suga energia das criaturas vivas na área, causando 1d8 pontos de dano de trevas e recebendo PV temporários iguais ao dano total causado. Os PV temporários desaparecem ao final da cena. Requer 2º círculo.',
    duration: 'Instantânea',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 196,
    name: 'Voo',
    type: 'Arcana',
    school: MagicSchools.Transmutacao,
    circle: 3,
    description: 'Você recebe deslocamento de voo 12m. Voar por meio desta magia é simples como andar — por isso, você pode atacar e lançar magias normalmente enquanto voa. Quando a magia termina, você desce lentamente até o chão, como se estivesse sob efeito de QuedaSuave.+1 PM: muda o alcance para toque e o alvo para 1 criatura.+4 PM: muda a duração para 1 dia. Requer 4º círculo.+4 PM: muda o alcance para curto e o alvo para até 10 criaturas. Requer 4°círculo.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  }, {
    id: 197,
    name: 'Voz Divina',
    type: 'Divina',
    school: MagicSchools.Adivinhacao,
    circle: 2,
    description: 'Você pode conversar com criaturas de qualquer tipo: animal, construto, espírito, monstro ou morto-vivo. Pode fazer perguntas e entende suas respostas, mesmo sem um idioma em comum ou se a criatura não for capaz de falar, mas respeitando os limites da Inteligência da criatura. A atitude dessas criaturas não é alterada, mas você pode usar a perícia Diplomacia para tentar mudar sua atitude.+1 PM: você concede um pouco devida a um cadáver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo é limitado ao que ele tinha enquanto vivo e suas respostas são curtas e enigmáticas. Um corpo só pode ser alvo desta magia uma vez. Ela também não funciona em um corpo cuja cabeça tenha sido destruída.',
    duration: 'Cena',
    execution: MagicExecution.Padrao,
    range: MagicRange.Pessoal,
    target: 'Você'
  },
];