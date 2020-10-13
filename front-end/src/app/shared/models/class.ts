import { Pericia } from './pericia';

export interface Class {
  id: number,
  name: string,
  initialLifePoints: number,
  levelUpLifePoints: number, // + mod const
  initialManaPoints: number,
  levelUpManaPoints: number,
  pericias: Pericia[],
  proficiencias: any, // ????????
  // arcanista
  arcanistWay: ArcanistWay | null
}

export interface ArcanistWay {
  id: number,
  name: string,
  hasFoco: boolean,
  focoDestructionPenalty: number, //rodadas
  focoReconstructionTibar: number,


}