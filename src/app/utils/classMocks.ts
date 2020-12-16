import { CategoryEnum } from "../shared/enums/category-enum";
import { ArcanistWayOptions, LevelUpObject } from '../shared/models/class';
import { MagicSchools } from '../shared/models/magic';
import { Poder } from '../shared/models/poder';
import { fullMagicsMock } from './mocks';

export const arcanistPowers: Poder[] = [
  {
    name: 'Alta Arcana',
    category: CategoryEnum.Classe,
    description: ' No 20º nível, seu domínio das artes arcanas é total. O custo em PM de suas magias arcanas, incluindo aprimoramentos, é reduzido à metade (após aplicar quaisquer outros efeitos que reduzam custo).',
    requirement: null,
    available: false
  }, {
    name: 'Arcano de Batalha',
    category: CategoryEnum.Classe,
    description: ' Você soma o bônus de seu atributo-chave nas rolagens de dano para magias.',
    requirement: null,
    available: true
  }, {
    name: 'Envolto em Mistério',
    category: CategoryEnum.Classe,
    description: 'Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em Engação e Intimidação contra pessoas não treinadas em Conhecimento ou Misticismo.',
    requirement: null,
    available: true
  }, {
    name: 'Aumento de Atributo',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o bônus diminui para +1.',
    requirement: null,
    available: true
  }, {
    name: 'Caldeirão do Bruxo',
    category: CategoryEnum.Classe,
    description: 'Você pode criar poções, como se tivesse o poder Preparar Poções. Se tiver ambos, você pode criar poções de 3º círculo. Pré-requisitos: Bruxo, treinado em Ofício (alquimia).',
    requirement: null,
    available: true
  }, {
    name: 'Conhecimento Mágico',
    category: CategoryEnum.Classe,
    description: 'Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser',
    requirement: null,
    available: true
  }, {
    name: 'Contramágica Aprimorada',
    category: CategoryEnum.Classe,
    description: ' Quando faz uma contramágica, você precisa gastar apenas PM necessários para lançar uma magia do círculo da magia que quer anular. Pré-requisito: Dissipar Magia.',
    requirement: null,
    available: true
  }, {
    name: 'Escriba Arcano',
    category: CategoryEnum.Classe,
    description: 'Você pode aprender magias copiando os textos de pergaminhos e grimórios de outros magos. Aprender uma magia dessa forma exige um dia de trabalho e T$ 250 em matérias-primas por PM necessário para lançar a magia. Assim, aprender uma magia de 3º círculo (6 PM) exige 6 dias de trabalho e o gasto de T$ 1.500. Pré-requisitos:  Mago, treinado em Conhecimento',
    requirement: null,
    available: true
  }, {
    name: 'Especialista em Escola',
    category: CategoryEnum.Classe,
    description: 'Escolha uma escola de magia. A CD para resistir a suas magias dessa escola aumenta em +2.',
    requirement: null,
    available: true
  }, {
    name: 'Familiar',
    category: CategoryEnum.Classe,
    description: 'Você possui um animal de estimação mágico. Veja o quadro para detalhes.',
    requirement: null,
    available: true
  }, {
    name: 'Fluxo de Mana',
    category: CategoryEnum.Classe,
    description: 'Você pode manter dois efeitos sustentados ativos simultaneamente com apenas uma ação livre, pagando o custo de cada efeito separadamente. Pré-requisito: 10º nível de arcanista.',
    requirement: null,
    available: true
  }, {
    name: 'Foco Vital',
    category: CategoryEnum.Classe,
    description: 'Se você estiver segurando seu foco e ele tiver pelo menos 1 ponto de vida, qualquer dano que você sofrer que fosse levá-lo a 0 ou menos PV é transferido para o foco.',
    requirement: null,
    available: true
  }, {
    name: 'Herança Avançada',
    category: CategoryEnum.Classe,
    description: 'Você recebe a herança avançada de sua linhagem sobrenatural. Pré-requisitos: Feiticeiro, 6º nível de arcanista',
    requirement: null,
    available: true
  }, {
    name: 'Herança Aprimorada',
    category: CategoryEnum.Classe,
    description: 'Você recebe a herança aprimorada de sua linhagem sobrenatural. Pré-requisitos: Herança Avançada, 11º nível de arcanista.',
    requirement: null,
    available: true
  }, {
    name: 'Magia Pungente',
    category: CategoryEnum.Classe,
    description: 'Quando lança uma magia, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ela.',
    requirement: null,
    available: true
  }, {
    name: 'Mestre em Escola',
    category: CategoryEnum.Classe,
    description: 'Escolha uma escola de magia com a qual possua Especialista em Escola. O custo para lançar magias dessa escola diminui em –2 PM. Pré-requisitos: Especialista em Escola, 8º nível de arcanista.',
    requirement: null,
    available: true
  }, {
    name: 'Poder Mágico',
    category: CategoryEnum.Classe,
    description: 'Você recebe +1 ponto de mana por nível de arcanista. Quando sobe de nível, os PM que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder no 4º nível, recebe 4 PM. Quando subir para o 5º nível, recebe +1 PM e assim por diante. Você pode escolher este poder uma segunda vez, para um total de +2 PM por nível.',
    requirement: null,
    available: true
  }, {
    name: 'Raio Arcano',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão para disparar um raio num alvo em alcance curto que causa 1d6 pontos de dano de essência. O alvo pode fazer um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade. Você pode gastar PM quando lança um raio arcano, aumentando o dano em +1d6 para cada PM gasto.',
    requirement: null,
    available: true
  }, {
    name: 'Raio Elemental',
    category: CategoryEnum.Classe,
    description: 'Quando usa Raio Arcano, você pode pagar 1 PM para que ele cause dano de um tipo de energia a sua escolha, entre ácido, eletricidade, fogo, frio, trevas ou trovão. Se o alvo falhar no teste de Reflexos, sofre um efeito adicional, de acordo com o tipo de energia. Ácido: vulnerável por uma rodada. Eletricidade: ofuscado por uma rodada. Fogo: fica em chamas. Frio: lento por uma rodada. Trevas: não pode ser curado por uma rodada. Trovão: –2 em testes de ataque por uma rodada. Pré-requisito: Raio Arcano.',
    requirement: null,
    available: true
  }, {
    name: 'Raio Poderoso',
    category: CategoryEnum.Classe,
    description: 'O dado de dano do seu Raio Arcano aumenta para d8 e o alcance dele aumenta para longo. Pré-requisito: Raio Arcano.',
    requirement: null,
    available: true
  }, {
    name: 'Teórico Arcano',
    category: CategoryEnum.Classe,
    description: 'O custo total de cada aprimoramento diferente de magias arcanas diminui em 1 PM (mínimo 1 PM). Pré-requisito: 6º nível de arcanista.',
    requirement: null,
    available: true
  }, {
    name: 'Tinta do Mago',
    category: CategoryEnum.Classe,
    description: 'Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminhos. Se tiver ambos, seu custo para criar pergaminhos é reduzido à metade. Pré-requisitos: Mago, treinado em Conhecimento.',
    requirement: null,
    available: true
  },
];

export const arcanistLevelUpMock = (arcanistWay: ArcanistWayOptions): LevelUpObject => {

  const magicsAvailable = (circle: number): Poder[] => {
    return fullMagicsMock.filter(m => m.circle <= circle).map(m => {
      return {
        name: m.name,
        category: CategoryEnum.Magia,
        description: m.description,
        requirement: null
      }
    });
  }

  return {
    level1: {
      chooseMagic: { magics: magicsAvailable(1), quantity: arcanistWay === ArcanistWayOptions.Mage ? 4 : 3 }
    },
    level2: {
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(1), quantity: 1 },
      choosePowers: arcanistPowers.filter(p => p.available)
    },
    level3: {
      chooseMagic: { magics: magicsAvailable(1), quantity: 1 },
      choosePowers: arcanistPowers.filter(p => p.available)
    },
    level4: {
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(1), quantity: 1 },
      choosePowers: arcanistPowers.filter(p => p.available)
    },
    level5: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(2), quantity: arcanistWay === ArcanistWayOptions.Mage ? 2 : 1 }
    },
    level6: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(2), quantity: 1 }
    },
    level7: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(2), quantity: 3 }
    },
    level8: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(2), quantity: 1 }
    },
    level9: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(3), quantity: arcanistWay === ArcanistWayOptions.Mage ? 2 : 1 }
    },
    level10: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(3), quantity: 1 }
    },
    level11: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(3), quantity: 3 }
    },
    level12: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(3), quantity: 1 }
    },
    level13: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(4), quantity: arcanistWay === ArcanistWayOptions.Mage ? 2 : 1 }
    },
    level14: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(4), quantity: 1 }
    },
    level15: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(4), quantity: 3 }
    },
    level16: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(4), quantity: 1 }
    },
    level17: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(5), quantity: arcanistWay === ArcanistWayOptions.Mage ? 2 : 1 }
    },
    level18: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(5), quantity: 1 }
    },
    level19: {
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(5), quantity: 3 }
    },
    level20: {
      fixedPowers: arcanistPowers.filter(p => p.name === 'Alta Arcana'),
      choosePowers: arcanistPowers.filter(p => p.available),
      chooseMagic: arcanistWay === ArcanistWayOptions.Sorcerer ? null : { magics: magicsAvailable(5), quantity: 1 }
    },
  }
};

export const barbarianPowers: Poder[] = [
  {
    name: 'Fúria +2',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar 4 PM para invocar uma fúria selvagem, tornando-se temível em combate. Você recebe +3 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +2 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um ataque, habilidade ou magia',
    requirement: null,
    available: false
  },
  {
    name: 'Fúria +3',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar 6 PM para invocar uma fúria selvagem, tornando-se temível em combate. Você recebe +4 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +2 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um ataque, habilidade ou magia',
    requirement: null,
    available: false
  },
  {
    name: 'Fúria +4',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar 8 PM para invocar uma fúria selvagem, tornando-se temível em combate. Você recebe +5 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +2 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um ataque, habilidade ou magia',
    requirement: null,
    available: false
  },
  {
    name: 'Fúria +5',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar 10 PM para invocar uma fúria selvagem, tornando-se temível em combate. Você recebe +6 em testes de ataque e rolagens de dano corpo a corpo, mas não pode fazer nenhuma ação que exija calma e concentração (como usar a perícia Furtividade ou lançar magias). A cada cinco níveis, pode gastar +2 PM para aumentar os bônus em +1. A Fúria termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um ataque, habilidade ou magia',
    requirement: null,
    available: false
  },
  {
    name: 'Alma de Bronze',
    category: CategoryEnum.Classe,
    description: ' Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a metade do seu nível + mod. Força',
    requirement: null,
    available: true
  },
  {
    name: 'Aumento de Atributo',
    category: CategoryEnum.Classe,
    description: ' Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o bônus diminui para +1.',
    requirement: null,
    available: true
  },
  {
    name: 'Brado Assustador',
    category: CategoryEnum.Classe,
    description: ' Você pode gastar uma ação de movimento e 1 PM para soltar um berro feroz. Todos os inimigos em alcance curto devem fazer um teste de Vontade (CD Car). Um inimigo que falhe fica abalado até o fim da cena. Um inimigo que passe se torna imune a esta habilidade até o fim do dia. Pré-requisito: treinado em Intimidação.',
    requirement: null,
    available: true
  },
  {
    name: 'Critico Brutal',
    category: CategoryEnum.Classe,
    description: 'Seu multiplicador de crítico com ataques corpo a corpo aumenta em + 1. Por exemplo, se fizer um crítico com um machado de batalha, seu multiplicador será x4, em vez de x3. Pré - requisito: 6º nível de bárbaro.',
    requirement: null,
    available: true
  },
  {
    name: 'Ímpeto',
    category: CategoryEnum.Classe,
    description: ' Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.',
    requirement: null,
    available: true
  }, {
    name: 'Investida Imprudente',
    category: CategoryEnum.Classe,
    description: 'Quando faz uma investida, você pode aumentar sua penalidade em Defesa pela investida para –5 para receber um bônus de +1d8 na rolagem de dano deste ataque.',
    requirement: null,
    available: true
  }, {
    name: 'Pele de Aço',
    category: CategoryEnum.Classe,
    description: 'O bônus de Pele de Ferro aumenta para +5. Pré-requisito: 8º nível de bárbaro, Pele de Ferro.',
    requirement: null,
    available: true
  }, {
    name: 'Pele de Ferro',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 na Defesa, mas apenas se não estiver usando armadura pesada',
    requirement: null,
    available: true
  }, {
    name: 'Sangue dos Inimigos',
    category: CategoryEnum.Classe,
    description: 'Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena.',
    requirement: null,
    available: true
  }, {
    name: 'Superstição',
    category: CategoryEnum.Classe,
    description: 'Você odeia magia, o que faz com que seja mais resistente a ela. Você recebe +5 em testes de resistência contra magias.',
    requirement: null,
    available: true
  }, {
    name: 'Vigor Primal',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação de movimento e 1 PM para recuperar 1d12 pontos de vida. Para cada 2 PM extras que você gastar, cura +1d12 PV (pode gastar 3 PM para recuperar 2d12 PV, 5 PM para recuperar 3d12 PV e assim por diante).',
    requirement: null,
    available: true
  }, {
    name: 'Instinto Selvagem + 1',
    category: CategoryEnum.Classe,
    description: 'No 3º nível, você recebe +1 em Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1.',
    requirement: null,
    available: false
  }, {
    name: 'Instinto Selvagem + 2',
    category: CategoryEnum.Classe,
    description: 'No 3º nível, você recebe +1 em Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1.',
    requirement: null,
    available: false
  }, {
    name: 'Instinto Selvagem + 3',
    category: CategoryEnum.Classe,
    description: 'No 3º nível, você recebe +1 em Percepção e Reflexos. A cada seis níveis, esse bônus aumenta em +1.',
    requirement: null,
    available: false
  }, {
    name: 'Resistência a Dano 2',
    category: CategoryEnum.Classe,
    description: ' A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe resistência a dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível.',
    requirement: null,
    available: false
  }, {
    name: 'Resistência a Dano 4',
    category: CategoryEnum.Classe,
    description: ' A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe resistência a dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível.',
    requirement: null,
    available: false
  }, {
    name: 'Resistência a Dano 6',
    category: CategoryEnum.Classe,
    description: ' A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe resistência a dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível.',
    requirement: null,
    available: false
  }, {
    name: 'Resistência a Dano 8',
    category: CategoryEnum.Classe,
    description: ' A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe resistência a dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível.',
    requirement: null,
    available: false
  }, {
    name: 'Resistência a Dano 10',
    category: CategoryEnum.Classe,
    description: ' A partir do 5º nível, graças a seu vigor e força de vontade, você ignora parte de seus ferimentos. Você recebe resistência a dano 2 (todo dano que sofre é reduzido em 2). A cada três níveis, sua RD aumenta em 2, até um máximo de RD 10 no 17º nível.',
    requirement: null,
    available: false
  }, {
    name: 'Fúria Titânica',
    category: CategoryEnum.Classe,
    description: 'No 20º nível, o bônus que você recebe nos testes de ataque e rolagens de dano quando usa Fúria é dobrado. Por exemplo, se gastar 12 PM, em vez de um bônus de +5, recebe um bônus de +10.',
    requirement: null,
    available: false
  },
];

export const barbarianLevelUpMock: LevelUpObject = {
  level1: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Fúria +2')
  },
  level2: {
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level3: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Instinto Selvagem + 1'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level4: {
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level5: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Resistência a Dano 2'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level6: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Fúria +3'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level7: {
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level8: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Resistência a Dano 4'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level9: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Instinto Selvagem + 2'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level10: {
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level11: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Fúria +3' || p.name === 'Resistência a Dano 6'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level12: {
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level13: {
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level14: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Resistência a Dano 8'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level15: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Instinto Selvagem + 3'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level16: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Fúria +5'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level17: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Resistência a Dano 10'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level18: {
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level19: {
    choosePowers: barbarianPowers.filter(p => p.available)
  },
  level20: {
    fixedPowers: barbarianPowers.filter(p => p.name === 'Fúria Titânica'),
    choosePowers: barbarianPowers.filter(p => p.available)
  },
};

export const bardPowers: Poder[] = [
  {
    name: 'Magias',
    category: CategoryEnum.Classe,
    description: 'Escolha três escolas de magia. Uma vez feita, essa escolha não pode ser mudada. Você pode lançar magias arcanas de 1º círculo que pertençam a essas escolas. À medida que sobe de nível, pode lançar magias de círculos maiores (2º círculo no 6º nível, 3º círculo no 10º nível e 4º círculo no 14º nível). Você começa com duas magias de 1º círculo. A cada nível par (2º, 4º etc), aprende uma magia de qualquer círculo e escola que possa lançar. Você pode lançar magias vestindo armaduras leves sem precisar de testes de Misticismo. Seu atributo-chave para lançar magias é Carisma e você soma seu bônus de Carisma no seu total de PM. Veja o Capítulo 4 para as regras de magia.',
    requirement: null,
    available: false
  },
  {
    name: 'Inspiração + 1',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua música (ou outro tipo de arte, como dança). Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1.',
    requirement: null,
    available: false
  }, {
    name: 'Inspiração + 2',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua música (ou outro tipo de arte, como dança). Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1.',
    requirement: null,
    available: false
  }, {
    name: 'Inspiração + 3',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua música (ou outro tipo de arte, como dança). Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1.',
    requirement: null,
    available: false
  }, {
    name: 'Inspiração + 4',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua música (ou outro tipo de arte, como dança). Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1.',
    requirement: null,
    available: false
  }, {
    name: 'Inspiração + 5',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão e 2 PM para inspirar as pessoas com sua música (ou outro tipo de arte, como dança). Você e todos os seus aliados em alcance curto ganham +1 em testes de perícia até o fim da cena. A cada quatro níveis, pode gastar +2 PM para aumentar o bônus em +1.',
    requirement: null,
    available: false
  },
  {
    name: 'Arte Mágica',
    category: CategoryEnum.Classe,
    description: 'Enquanto você estiver sob efeito de sua habilidade Inspiração, a CD para resistir a suas magias de bardo aumenta em +2.',
    requirement: null,
    available: true
  },
  {
    name: 'Aumento de Atributo',
    category: CategoryEnum.Classe,
    description: ' Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o bônus diminui para +1.',
    requirement: null,
    available: true
  },
  {
    name: 'Aumentar Repertório',
    category: CategoryEnum.Classe,
    description: 'Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser.',
    requirement: null,
    available: true
  },
  {
    name: 'Canção Assustadora',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão e 1 PM para forçar todas as criaturas a sua escolha em alcance curto a fazer um teste de Vontade (CD Car). Uma criatura que falhe fica abalada até o fim da cena. Uma criatura que passe se torna imune a esta habilidade até o fim do dia.',
    requirement: null,
    available: true
  },
  {
    name: 'Dança das Lâminas',
    category: CategoryEnum.Classe,
    description: 'Quando você lança uma magia com execução de uma ação padrão, pode gastar 1 PM para fazer um ataque corpo a corpo como uma ação livre. Pré-requisitos: Esgrima Mágica, 10º nível de bardo.',
    requirement: null,
    available: true
  },
  {
    name: 'Esgrima Mágica',
    category: CategoryEnum.Classe,
    description: 'Sua arte mescla esgrima e magia, transformando dança em golpes. Enquanto estiver sob efeito de Inspiração, você pode substituir testes de Luta por testes de Atuação, mas apenas se estiver empunhando armas leves ou de uma mão.',
    requirement: null,
    available: true
  },
  {
    name: 'Estrelato',
    category: CategoryEnum.Classe,
    description: 'Suas apresentações o tornaram famoso, fazendo com que você seja reconhecido e bem tratado por aqueles que apreciam a arte. Por outro lado, pode ser difícil passar despercebido, especialmente em grandes cidades. Quando usa Atuação para impressionar plateia, o bônus recebido em perícias baseadas em Carisma aumenta para +5. Pré-requisito: 6º nível de bardo.',
    requirement: null,
    available: true
  },
  {
    name: 'Fascinar',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão e 1 PM para fascinar uma criatura a sua escolha em alcance curto. Faça um teste de Atuação oposto pelo teste de Vontade da criatura. Se você passar, ela fica fascinada enquanto você se concentrar (uma ação padrão por rodada). Se a criatura passar, fica imune a este efeito por um dia.',
    requirement: null,
    available: true
  },
  {
    name: 'Fascinar em Massa',
    category: CategoryEnum.Classe,
    description: 'Quando usa Fascinar, você pode gastar 2 PM extras. Se fizer isso, afeta todas as criaturas a sua escolha em alcance curto (você faz um único teste de Atuação, oposto pelo teste de Vontade de cada criatura). Pré-requisito: Fascinar.',
    requirement: null,
    available: true
  },
  {
    name: 'Golpe Elemental',
    category: CategoryEnum.Classe,
    description: 'Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo pode gastar 1 PM para causar 1d6 de dano adicional de ácido, eletricidade, fogo ou frio, a sua escolha. Para cada quatro níveis que possua, pode gastar +1 PM para aumentar o dano em +1d6. Pré-requisito: Golpe Mágico.',
    requirement: null,
    available: true
  },
  {
    name: 'Golpe Mágico',
    category: CategoryEnum.Classe,
    description: ' Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo em um inimigo, recebe 2 PM temporários. A cada cena, você pode ganhar um máximo de PM temporários igual ao seu nível. PM temporários desaparecem no final da cena. Pré-requisito: Esgrima Mágica.',
    requirement: null,
    available: true
  },
  {
    name: 'Inspiração Marcial',
    category: CategoryEnum.Classe,
    description: 'Quando você usa Inspiração, você e seus aliados aplicam o bônus recebido em rolagens de dano (além de testes de perícia).',
    requirement: null,
    available: true
  },
  {
    name: 'Lendas e Histórias',
    category: CategoryEnum.Classe,
    description: 'Você possui um acervo mental de relatos, canções e folclore, sendo um arquivo vivo de assuntos gerais. Além de outros benefícios a critério do mestre, você pode gastar 1 PM para rolar novamente um teste recém realizado de Conhecimento, Misticismo, Nobreza ou Religião para informação, identificar criaturas ou identificar itens mágicos. Pré-requisito: Int 13.',
    requirement: null,
    available: true
  },
  {
    name: 'Manipular',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar 1 PM para forçar uma criatura que esteja fascinada a fazer um teste de Vontade (CD Car). Se a criatura falhar, sofre o efeito da magia Enfeitiçar até o fim da cena. Se passar, fica imune a esta habilidade por um dia. Usar esta habilidade não conta como uma ameaça à criatura fascinada. Pré-requisito: Fascinar.',
    requirement: null,
    available: true
  },
  {
    name: 'Manipular em Massa',
    category: CategoryEnum.Classe,
    description: 'Quando usa Manipular, você pode gastar 2 PM extras. Se fizer isso, afeta todas as criaturas a sua escolha em alcance curto (você faz um único teste de Atuação, oposto pelo teste de Vontade de cada criatura). Pré-requisitos: Fascinar em Massa, Manipular, 10º nível de bardo.',
    requirement: null,
    available: true
  },
  {
    name: 'Melodia Curativa',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão e 1 PM para gerar um efeito curativo. Você e todos os seus aliados em alcance curto recuperam 1d6 PV. Para cada 2 PM extras que você gastar, cura +1d6 PV (ou seja, pode gastar 3 PM para recuperar 2d6 PV, 5 PM para recuperar 3d6 PV e assim por diante).',
    requirement: null,
    available: true
  },
  {
    name: 'Melodia Restauradora',
    category: CategoryEnum.Classe,
    description: ' Quando você usa Melodia Curativa, pode gastar 2 PM extras. Se fizer isso, escolha uma das condições a seguir: abalado, apavorado, atordoado, cego, exausto, fatigado ou surdo. Você remove a condição escolhida de quaisquer aliados a sua escolha afetados pela Melodia Curativa. Pré-requisito: Melodia Curativa.',
    requirement: null,
    available: true
  },
  {
    name: 'Mestre dos Sussurros',
    category: CategoryEnum.Classe,
    description: 'Você é dissimulador, atento para rumores e ótimo em espalhar fofocas. Quando faz um teste de Investigação para obter informação ou um teste de Enganação para intriga, você rola dois dados e usa o melhor resultado. Além disso, você pode fazer estes testes em ambientes sociais (taverna, festival, baile na corte...) sem custo e na metade do tempo. Pré-requisitos: treinado em  Enganação e Investigação, Car 13.',
    requirement: null,
    available: true
  },
  {
    name: 'Paródia',
    category: CategoryEnum.Classe,
    description: 'Uma vez por rodada, quando vê alguém lançando uma magia em alcance médio, você pode pagar 1 PM e fazer um teste de Atuação (CD 15 + custo em PM da magia). Se passar, até o final de seu próximo turno você pode lançar essa magia como se a conhecesse.',
    requirement: null,
    available: true
  },
  {
    name: 'Prestidigitação',
    category: CategoryEnum.Classe,
    description: ' Quando faz uma ação padrão qualquer, você pode aproveitar seus gestos para lançar uma magia de ilusão. Faça um teste de Atuação (CD 15 + custo em PM da magia). Se passar, você lança a magia como uma ação livre. Se falhar, a magia não funciona, mas você gasta os PM mesmo assim.',
    requirement: null,
    available: true
  },
  {
    name: 'Versatilidade',
    category: CategoryEnum.Classe,
    description: 'A partir do 2º nível, você pode gastar 1 PM para receber todos os benefícios de ser treinado em uma perícia a sua escolha por um teste.',
    requirement: null,
    available: false
  },
  {
    name: 'Artista Completo',
    category: CategoryEnum.Classe,
    description: ' No 20º nível, você pode usar Inspiração como uma ação livre. Enquanto estiver sob efeito de sua Inspiração, qualquer habilidade de bardo (incluindo magias) que você usar tem seu custo em PM reduzido pela metade (após aplicar quaisquer outras habilidades que reduzam o custo).',
    requirement: null,
    available: false
  },
];

export const bardLevelUpMock = (schools: MagicSchools[]): LevelUpObject => {
  const magicsAvailable = (circle: number): Poder[] => {
    return fullMagicsMock.filter(m => schools.includes(m.school) && m.circle <= circle).map(m => {
      return {
        name: m.name,
        category: CategoryEnum.Magia,
        description: m.description,
        requirement: null
      }
    });
  }

  return {
    level1: {
      fixedPowers: bardPowers.filter(p => p.name === 'Inspiração + 1'),
      chooseMagic: { magics: magicsAvailable(1), quantity: 3 }
    },
    level2: {
      fixedPowers: bardPowers.filter(p => p.name === 'Versatilidade'),
      choosePowers: bardPowers.filter(p => p.available)
    },
    level3: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level4: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level5: {
      fixedPowers: bardPowers.filter(p => p.name === 'Inspiração + 2'),
      choosePowers: bardPowers.filter(p => p.available)
    },
    level6: {
      choosePowers: bardPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(2), quantity: 3 }
    },
    level7: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level8: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level9: {
      fixedPowers: bardPowers.filter(p => p.name === 'Inspiração + 3'),
      choosePowers: bardPowers.filter(p => p.available)
    },
    level10: {
      choosePowers: bardPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(3), quantity: 3 }
    },
    level11: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level12: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level13: {
      fixedPowers: bardPowers.filter(p => p.name === 'Inspiração + 4'),
      choosePowers: bardPowers.filter(p => p.available)
    },
    level14: {
      chooseMagic: { magics: magicsAvailable(4), quantity: 3 },
      choosePowers: bardPowers.filter(p => p.available)
    },
    level15: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level16: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level17: {
      fixedPowers: bardPowers.filter(p => p.name === 'Inspiração + 5'),
      choosePowers: bardPowers.filter(p => p.available)
    },
    level18: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level19: {
      choosePowers: bardPowers.filter(p => p.available)
    },
    level20: {
      fixedPowers: bardPowers.filter(p => p.name === 'Artista Completo'),
      choosePowers: bardPowers.filter(p => p.available)
    },
  }
};

export const druidPowers: Poder[] = [
  {
    name: 'Forma Selvagem',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação completa e 3 PM para adquirir a forma de uma criatura selvagem. Normalmente, será um animal da região, mas também pode ser uma fera desconhecida. Em termos de jogo, quando usa esta habilidade você adquire os bônus e características de uma forma que conheça. Características não mencionadas não mudam. Na forma selvagem você não pode atacar com armas ou lançar magias. Qualquer equipamento que esteja usando desaparece e ressurge quando você volta ao normal. Outras criaturas podem fazer um teste de Percepção oposto pelo seu teste de Enganação (você recebe +10 neste teste) para perceber que você não é um animal comum. Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer. A partir do 6º nível, você pode usar a versão Aprimorada das formas que conhece, com custo de 6 PM. A partir do 12º nível, pode usar a forma Superior, pagando 10 PM.',
    requirement: null,
    available: false
  }, {
    name: 'Devoto',
    category: CategoryEnum.Classe,
    description: ' Você se torna devoto de uma divindade disponível para druidas (Allihanna, Megalokk ou Oceano). Você deve obedecer às Obrigações & Restrições de seu deus, mas, em troca, ganha os Poderes Concedidos dele. O nome desta habilidade muda de acordo com a divindade escolhida: Devoto de Allihanna, Devoto de Megalokk ou Devoto do Oceano.',
    requirement: null,
    available: false
  }, {
    name: 'Empatia Selvagem',
    category: CategoryEnum.Classe,
    description: ' Você pode se comunicar com animais através de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e pedir favores (veja Diplomacia, na página XX).',
    requirement: null,
    available: false
  }, {
    name: 'Aspecto da Primavera',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em Carisma e suas magias de cura curam +1 PV por dado. Durante a primavera, suas magias de druida custam −1 PM.',
    requirement: null,
    available: true
  }, {
    name: 'Aspecto do Inverno',
    category: CategoryEnum.Classe,
    description: 'Você recebe resistência a frio 5 e suas magias que causam dano de frio causam +1 ponto de dano por dado. Durante o inverno, suas magias de druida custam −1 PM.',
    requirement: null,
    available: true
  }, {
    name: 'Aspecto do Outono',
    category: CategoryEnum.Classe,
    description: 'Você aprende uma magia de necromancia, arcana ou divina, de qualquer círculo que possa lançar. Você pode gastar 1 PM para impor uma penalidade de –2 nos testes de resistência de todos os inimigos em alcance médio até o início do seu próximo turno. Durante o outono, suas magias de druida custam −1 PM',
    requirement: null,
    available: true
  }, {
    name: 'Aspecto do Verão',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em Iniciativa e pode gastar 1 PM para cobrir suas armas ou ataques naturais com chamas, causando +1d6 pontos de dano de fogo até o fim da cena. Durante o verão, suas magias de druida custam −1 PM.',
    requirement: null,
    available: true
  }, {
    name: 'Aumento de Atributo',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o bônus diminui para +1.',
    requirement: null,
    available: true
  }, {
    name: 'Companheiro Animal',
    category: CategoryEnum.Classe,
    description: 'Você recebe um companheiro animal. Veja o quadro a seguir para detalhes. Pré-requisito: treinado em Adestramento.',
    requirement: null,
    available: true
  }, {
    name: 'Companheiro Animal Adicional',
    category: CategoryEnum.Classe,
    description: 'Você recebe um companheiro animal adicional, de um tipo diferente dos que já tenha. Você pode escolher este poder quantas vezes quiser, mas ainda está sujeito ao limite de aliados que pode ter (veja a página XX). Pré-requisitos: Car 15, Companheiro Animal, 7º nível de druida.',
    requirement: null,
    available: true
  }, {
    name: 'Companheiro Animal Aprimorado',
    category: CategoryEnum.Classe,
    description: ' Escolha um de seus companheiros animais. Esse animal recebe um segundo tipo diferente, ganhando os bônus equivalentes. Por exemplo, se você tiver um companheiro guardião, pode adicionar o tipo fortão a ele, tornando-o um guardião fortão que concede +2 na Defesa e +1d8 nas rolagens de dano corpo a corpo. Pré-requisitos: Companheiro Animal, 8º nível de druida.',
    requirement: null,
    available: true
  }, {
    name: 'Companheiro Animal Lendário',
    category: CategoryEnum.Classe,
    description: 'Escolha um de seus companheiros animais. Esse animal passa a dobrar seus bônus concedidos. No caso de companheiros que concedem dados de bônus, o número de dados aumenta em 1. Pré-requisitos: Companheiro Animal, 18º nível de druida.',
    requirement: null,
    available: true
  }, {
    name: 'Companheiro Animal Mágico',
    category: CategoryEnum.Classe,
    description: 'Escolha um de seus companheiros animais. Esse animal recebe um segundo tipo diferente, entre curandeiro ou destruidor, ganhando os bônus equivalentes. Pré-requisitos: Companheiro Animal, 8º nível de druida.',
    requirement: null,
    available: true
  }, {
    name: 'Coração da Selva',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em Fortitude e se torna imune a venenos.',
    requirement: null,
    available: true
  }, {
    name: 'Espírito dos Equinócios',
    category: CategoryEnum.Classe,
    description: 'Sua alma e seu corpo estão em equilíbrio. Você pode gastar 1 PM para escolher 10 em um teste de resistência. Pré-requisitos: Aspecto da Primavera, Aspecto do Outono, 10º nível de druida.',
    requirement: null,
    available: true
  }, {
    name: 'Espírito dos Solstícios',
    category: CategoryEnum.Classe,
    description: 'Você transita entre os extremos do mundo natural. Quando lança uma magia, você pode pagar +2 PM para maximizar todos os efeitos numéricos variáveis dela. Por exemplo, uma magia Curar Ferimentos aprimorada para curar 5d8+5 PV irá curar automaticamente 45 PV, sem a necessidade de rolar dados. Uma magia sem efeitos variáveis não pode ser afetada por este poder.',
    requirement: null,
    available: true
  }, {
    name: 'Força dos Penhascos',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em Fortitude. Se estiver pisando em rocha sólida, pode pagar 1 PM para receber RD 10 contra um ataque.',
    requirement: null,
    available: true
  }, {
    name: 'Forma Primal',
    category: CategoryEnum.Classe,
    description: 'Quando você usa Forma Selvagem, pode se transformar em uma fera primal. Você recebe os benefícios de dois tipos de animais (bônus iguais não se acumulam; use o que você quiser de cada tipo). Pré-requisitos: Forma Selvagem duas vezes, 18º nível de druida.',
    requirement: null,
    available: true
  }, {
    name: 'Forma Selvagem',
    category: CategoryEnum.Classe,
    description: 'Você pode se transformar em um tipo de animal. Veja a seguir. Você pode escolher este benefício diversas vezes. A cada vez, aprende uma forma selvagem diferente.',
    requirement: null,
    available: true
  }, {
    name: 'Liberdade da Pradaria',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em Reflexos. Se estiver ao ar livre, você pode pagar 1 PM sempre que lançar uma magia para aumentar o alcance dela em um passo (de toque para curto, de curto para médio etc.).',
    requirement: null,
    available: true
  }, {
    name: 'Magia Natural',
    category: CategoryEnum.Classe,
    description: 'Você pode lançar magias em forma selvagem. Pré-requisitos: Forma Selvagem, 8º nível de druida.',
    requirement: null,
    available: true
  }, {
    name: 'Presas Afiadas',
    category: CategoryEnum.Classe,
    description: 'A margem de ameaça de seus ataques naturais em forma selvagem aumenta em +2. Pré-requisito: Forma Selvagem.',
    requirement: null,
    available: true
  }, {
    name: 'Segredos da Natureza',
    category: CategoryEnum.Classe,
    description: 'Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser',
    requirement: null,
    available: true
  }, {
    name: 'Tranquilidade dos lagos',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em Vontade. Se estiver em alcance médio de um lago, rio ou equivalente, pode pagar 1 PM uma vez por rodada para repetir um teste de resistência recém feito.',
    requirement: null,
    available: true
  }, {
    name: 'Caminho dos Ermos',
    category: CategoryEnum.Classe,
    description: 'No 2º nível, você pode atravessar terrenos difíceis sem sofrer redução em seu deslocamento e a CD para rastreá-lo aumenta em +10. Esta habilidade só funciona em terrenos naturais',
    requirement: null,
    available: false
  }, {
    name: 'Força da Natureza',
    category: CategoryEnum.Classe,
    description: 'No 20º nível, você diminui o custo de todas as suas magias em –2 PM e aumenta a CD delas em +2. Os bônus dobram (–4 PM e +4 na CD) se você estiver em terrenos naturais.',
    requirement: null,
    available: false
  },
];

export const druidLevelUpMock = (schools: MagicSchools[]): LevelUpObject => {
  const magicsAvailable = (circle: number): Poder[] => {
    return fullMagicsMock.filter(m => schools.includes(m.school) && m.circle <= circle).map(m => {
      return {
        name: m.name,
        category: CategoryEnum.Magia,
        description: m.description,
        requirement: null
      }
    });
  }

  return {
    level1: {
      fixedPowers: druidPowers.filter(p => p.name === 'Devoto' || p.name === 'Empatia Selvagem' || p.name === 'Forma Selvagem'),
      chooseMagic: { magics: magicsAvailable(1), quantity: 3 }
    },
    level2: {
      fixedPowers: druidPowers.filter(p => p.name === 'Caminho dos Ermos'),
      choosePowers: druidPowers.filter(p => p.available)
    },
    level3: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level4: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level5: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level6: {
      choosePowers: druidPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(2), quantity: 3 }
    },
    level7: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level8: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level9: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level10: {
      choosePowers: druidPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(3), quantity: 3 }
    },
    level11: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level12: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level13: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level14: {
      choosePowers: druidPowers.filter(p => p.available),
      chooseMagic: { magics: magicsAvailable(4), quantity: 3 }
    },
    level15: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level16: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level17: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level18: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level19: {
      choosePowers: druidPowers.filter(p => p.available)
    },
    level20: {
      choosePowers: druidPowers.filter(p => p.available),
      fixedPowers: druidPowers.filter(p => p.name === 'Força da Natureza'),
    },
  }
};

export const warriorPowers: Poder[] = [
  {
    name: 'Ataque Especial +4',
    category: CategoryEnum.Classe,
    description: ' Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.',
    requirement: null,
    available: false
  }, {
    name: 'Ataque Especial +8',
    category: CategoryEnum.Classe,
    description: ' Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.',
    requirement: null,
    available: false
  }, {
    name: 'Ataque Especial +12',
    category: CategoryEnum.Classe,
    description: ' Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.',
    requirement: null,
    available: false
  }, {
    name: 'Ataque Especial +16',
    category: CategoryEnum.Classe,
    description: ' Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.',
    requirement: null,
    available: false
  }, {
    name: 'Ataque Especial +20',
    category: CategoryEnum.Classe,
    description: ' Quando faz um ataque, você pode gastar 1 PM para receber +4 no teste de ataque ou na rolagem de dano. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +4. Você pode dividir os bônus igualmente. Por exemplo, no 17º nível, pode gastar 5 PM para receber +20 no ataque, +20 no dano ou +10 no ataque e +10 no dano.',
    requirement: null,
    available: false
  }, {
    name: 'Durão',
    category: CategoryEnum.Classe,
    description: ' A partir do 3ª nível, sua rijeza muscular permite que você absorva ferimentos. Sempre que sofre dano, você pode gastar 2 PM para reduzir esse dano à metade.',
    requirement: null,
    available: false
  }, {
    name: 'Ataque Extra',
    category: CategoryEnum.Classe,
    description: 'A partir do 6º nível, quando usa a ação ataque, você pode gastar 2 PM para realizar um ataque adicional com a mesma arma.',
    requirement: null,
    available: false
  }, {
    name: 'Campeão',
    category: CategoryEnum.Classe,
    description: ' No 20º nível, o dano de todos os seus ataques aumenta em um passo. Além disso, sempre que você faz um Ataque Especial ou um Golpe Pessoal e acerta o ataque, recupera metade dos PM gastos nele. Por exemplo, se fizer um Ataque Especial gastando 5 PM para ganhar +20 nas rolagens de dano e acertar o ataque, recupera 2 PM.',
    requirement: null,
    available: false
  }, {
    name: 'Ambidestria',
    category: CategoryEnum.Classe,
    description: 'Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação ataque, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre uma penalidade de –2 em ambos os testes de ataque. Pré-requisito: Des 15.',
    requirement: null,
    available: true
  }, {
    name: 'Aumento de Atributo',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o bônus diminui para +1.',
    requirement: null,
    available: true
  }, {
    name: 'Arqueiro',
    category: CategoryEnum.Classe,
    description: 'Se estiver usando uma arma de ataque à distância, você soma seu bônus de Sabedoria em rolagens de dano (limitado pelo seu nível). Pré-requisito: Sab 13.',
    requirement: null,
    available: true
  }, {
    name: 'Ataque Reflexo',
    category: CategoryEnum.Classe,
    description: 'Se um alvo em alcance de seus ataques corpo a corpo ficar desprevenido ou se mover para fora do seu alcance, você pode gastar 1 PM para fazer um ataque corpo a corpo contra esse alvo como uma reação. Pré-requisito: Des 13.',
    requirement: null,
    available: true
  }, {
    name: 'Bater e Correr',
    category: CategoryEnum.Classe,
    description: 'Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa.',
    requirement: null,
    available: true
  }, {
    name: 'Destruidor',
    category: CategoryEnum.Classe,
    description: 'Se estiver usando uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 em rolagens de dano. Pré-requisito: For 13.',
    requirement: null,
    available: true
  }, {
    name: 'Esgrimista',
    category: CategoryEnum.Classe,
    description: 'Quando usa uma arma leve ou ágil, você soma seu bônus de Inteligência nas rolagens de dano (limitado pelo seu nível). Pré-requisito: Int 13.',
    requirement: null,
    available: true
  }, {
    name: 'Especialização em Arma',
    category: CategoryEnum.Classe,
    description: 'Escolha uma arma. Você recebe +2 em rolagens de dano com a arma escolhida. Você pode escolher este poder outras vezes para armas diferentes.',
    requirement: null,
    available: true
  }, {
    name: 'Especialização em Armadura',
    category: CategoryEnum.Classe,
    description: 'Você recebe resistência a dano 5 se estiver usando uma armadura pesada. Pré-requisito: 12º nível de guerreiro.',
    requirement: null,
    available: true
  }, {
    name: 'Golpe de Raspão',
    category: CategoryEnum.Classe,
    description: ' Quando erra um ataque, você pode pagar 1 PM. Se fizer isso, causa 1d8 pontos de dano (do tipo da arma) no alvo do ataque.',
    requirement: null,
    available: true
  }, {
    name: 'Golpe Demolidor',
    category: CategoryEnum.Classe,
    description: 'Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 1 PM para ignorar a RD dele, ou 3 PM para, além disso, causar dano dobrado.',
    requirement: null,
    available: true
  }, {
    name: 'Golpe Pessoal',
    category: CategoryEnum.Classe,
    description: 'Quando faz um ataque, você pode desferir seu Golpe Pessoal, uma manobra única, com um custo em PM e efeitos determinados por você quando adquire este poder. Você constrói o seu Golpe Pessoal escolhendo efeitos da lista ao lado. Cada efeito possui um custo; a soma deles será o custo do Golpe Pessoal (mínimo 1 PM e máximo igual ao seu nível). Você pode escolher este poder outras vezes para golpes diferentes. Quando sobe de nível, você pode alterar os efeitos de seu Golpe Pessoal.',
    requirement: null,
    available: true
  }, {
    name: 'Ímpeto',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada',
    requirement: null,
    available: true
  }, {
    name: 'Mestre em Arma',
    category: CategoryEnum.Classe,
    description: ' Escolha uma arma com a qual possua Especialização em Arma. Com esta arma, seu dano aumenta em um passo e você pode gastar 2 PM para rolar novamente um teste de ataque recém realizado. Pré-requisito: 12º nível de guerreiro.',
    requirement: null,
    available: true
  }, {
    name: 'Planejamento Marcial',
    category: CategoryEnum.Classe,
    description: 'No início do dia, você pode gastar 3 PM para escolher um poder de guerreiro ou poder de combate cujos pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia. Pré-requisitos: treinado em Guerra, 10º nível de guerreiro.',
    requirement: null,
    available: true
  }, {
    name: 'Romper Defesas',
    category: CategoryEnum.Classe,
    description: 'Seu ataque especial pode atravessar as defesas do alvo. Quando faz um Ataque Especial, você pode gastar 2 PM adicionais para ignorar qualquer resistência a dano do alvo.',
    requirement: null,
    available: true
  }, {
    name: 'Solidez',
    category: CategoryEnum.Classe,
    description: 'Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência.',
    requirement: null,
    available: true
  }, {
    name: 'Tornado de Dor',
    category: CategoryEnum.Classe,
    description: 'Você pode gastar uma ação padrão e 2 PM para desferir uma série de golpes giratórios. Faça um ataque e compare-o contra a Defesa de cada inimigo adjacente. Então faça uma rolagem de dano com um bônus cumulativo de +2 para cada acerto e aplique-a em cada inimigo atingido. Pré-requisito: 6º nível de guerreiro.',
    requirement: null,
    available: true
  }, {
    name: 'Valentão',
    category: CategoryEnum.Classe,
    description: 'Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos.',
    requirement: null,
    available: true
  },
];

export const warriorLevelUpMock: LevelUpObject = {
  level1: {
    fixedPowers: warriorPowers.filter(p => p.name === 'Ataque Especial +4')
  },
  level2: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level3: {
    fixedPowers: warriorPowers.filter(p => p.name === 'Durão'),
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level4: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level5: {
    fixedPowers: warriorPowers.filter(p => p.name === 'Ataque Especial +8'),
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level6: {
    fixedPowers: warriorPowers.filter(p => p.name === 'Ataque Extra'),
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level7: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level8: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level9: {
    fixedPowers: warriorPowers.filter(p => p.name === 'Ataque Especial +12'),
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level10: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level11: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level12: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level13: {
    fixedPowers: warriorPowers.filter(p => p.name === 'Ataque Especial +16'),
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level14: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level15: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level16: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level17: {
    fixedPowers: warriorPowers.filter(p => p.name === 'Ataque Especial +20'),
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level18: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level19: {
    choosePowers: warriorPowers.filter(p => p.available)
  },
  level20: {
    fixedPowers: warriorPowers.filter(p => p.name === 'Campeão'),
    choosePowers: warriorPowers.filter(p => p.available)
  },
};