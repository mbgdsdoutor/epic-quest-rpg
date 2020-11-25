import { Poder } from './poder'

export interface Deus {
  id: number;
  name: string;
  description: string;
  objective: string;
  classesAllowed: number[];
  racesAllowed: number[];
  symbol: string; //photo
  energy: EnergyEnum;
  weapon: string;
  obligations: string;
  restrictions: string;
  poderes: Poder[];
}

export enum EnergyEnum {
  Positiva = 'Positiva',
  Negativa = 'Negativa',
  Qualquer = 'Qualquer',
}