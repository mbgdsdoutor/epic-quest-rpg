import { AttributesEnum } from '../enums/attributes-enum';

export interface Magic {
  id: number;
  name: string;
  type: 'Divina' | 'Arcana';
  description: string;
  school: MagicSchools;
  range: MagicRange;
  execution: MagicExecution;
  target: string;
  duration: string;
  circle: 1 | 2 | 3 | 4 | 5;
}

export enum MagicSchools {
  Transmutacao = 'Transmutação',
  Encantamento = 'Encantamento',
  Abjuracao = 'Abjuração',
}

export enum MagicRange {
  Curto = 'Curto',
}

export enum MagicExecution {
  Padrao = 'Padrão',
}