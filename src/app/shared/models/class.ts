import { AttributesEnum } from '../enums/attributes-enum';
import { Deus } from './deus';
import { MagicSchools } from './magic';
import { Pericia } from './pericia';
import { Poder } from './poder';

export interface Class {
  id: number;
  name: string;
  initialLifePoints: number;
  levelUpLifePoints: number; // + mod const
  initialManaPoints: number; // se arcanista; + mod atributo chave
  levelUpManaPoints: number;
  pericias: Pericia[];
  periciasChoose?: { quantity: number, pericias: Pericia[] }[];
  proficiencias?: ProficienciasEnum[]; // ???????? to do
  /*Proficiências. Descreve que tipos de equipamento você sabe usar. Todos os personagens sabem
usar armas simples e armaduras leves. Se você souber
usar outros equipamentos, isso estará anotado aqui. */
  arcanistWay?: ArcanistWayOptions | null;
  magicSchoolsAllowed?: MagicSchools[];
}

export enum ProficienciasEnum {
  ArmasMarciais = 'Armas Marciais',
  Escudos = 'Escudos',
}

export interface LevelUpEffect {
  // criar tabela com efeitos de level up pra cada nivel

}

export interface ArcanistWay {
  name: ArcanistWayOptions;
  arcanistPowers: Poder[];
  magicCirclesAllowed: number;
  hasObjectDependency: boolean; // (pv metade; resistencia a dano 10)
  objectDependencyDestructionPenalty: number; // rodadas
  objectDependencyReconstructionTibar: number;
  objectDependencyReconstructionTime: number; // days
  mainAttribute: AttributesEnum;
  magicEveryLevel: boolean;
  magicEveryNewCircle: boolean;
  sorcererLineage: SorcererLineage;
}

export interface SorcererLineage {
  name: SorcererLineageOptions;
  basicBuff: SorcererLineageBuff;
  advancedBuff: SorcererLineageBuff;
  aprimoredBuff: SorcererLineageBuff;
}

export enum ArcanistWayOptions {
  Wizard = 'Bruxo',
  Sorcerer = 'Feitiçeiro',
  Mage = 'Mago',
}

export enum SorcererLineageOptions {
  Draconica = 'Dracônica',
  Feerica = 'Feérica',
  Rubra = 'Rubra',
}

export interface SorcererLineageBuff {
  id: number;
  // Linhagem Draconica
  magicType: DamageTypeEnum;
  damageReduction: number; // modificador de carisma
  extraLifePoints: number; // modificador de carisma
  damageTypeManaCostReducer: number;
  damageTypeExtraDamage: number;
  temporaryManaPointsOnKill: boolean;
  // Linhagem Feerica
  periciaTrained: Pericia;
  newEnhancementOrIlusionMagic: boolean;
  enhancementOrIlusionMagicCD: number;
  enhancementOrIlusionMagicManaCostReducer: number;
  extraCharisma: number;
  resistPenalty: boolean; // loose extra 4 charisma points
  // Linhagem Rubra
  newTormentaPower: Poder;
  newMagicForEveryTormentaPower: boolean;
  extraManaPointsForEveryTormentaPower: boolean;
}

export enum DamageTypeEnum {
  Acido = 'Ácido',
  Eletrecidade = 'Eletrecidade',
  Fogo = 'Fogo',
  Frio = 'Frio',
}

export interface BarbarianWay {
  id: number;
  furyLevel: number;
  damageReducer: number;
  wildInstinctBonus: number; // percepcao e reflexos
  barbarianPowers: Poder[];
  tinaticFury: boolean;
}

export interface BardWay {
  id: number;
  versatility: boolean;
  fullArtist: boolean;
  bardPowers: Poder[];
  magicSchoolsAllowed: MagicSchool[]; // enum schools to do
  magicCirclesAllowed: number;
  magicMainAttribute: AttributesEnum;
}

export interface MagicSchool {
  id: number;
  name: MagicSchools;
  description: string;
}

export interface DruidWay {
  devotee: Deus; // (Allihanna; Megalokk ou Oceano)
  wildEmpathy: boolean;
  ermosWay: boolean;
  naturePower: boolean;
  druidPowers: Poder[];
  magicSchoolsAllowed: MagicSchool[]; // enum schools to do
  magicCirclesAllowed: number;
  magicMainAttribute: AttributesEnum;
}

export interface LevelUpObject {
  level1: LevelUp,
  level2: LevelUp,
  level3: LevelUp,
  level4: LevelUp,
  level5: LevelUp,
  level6: LevelUp,
  level7: LevelUp,
  level8: LevelUp,
  level9: LevelUp,
  level10: LevelUp,
  level11: LevelUp,
  level12: LevelUp,
  level13: LevelUp,
  level14: LevelUp,
  level15: LevelUp,
  level16: LevelUp,
  level17: LevelUp,
  level18: LevelUp,
  level19: LevelUp,
  level20: LevelUp,
}

export interface LevelUp {
  fixedPowers?: Poder[],
  choosePowers?: Poder[],
  chooseMagic?: { magics: Poder[], quantity: number },
}