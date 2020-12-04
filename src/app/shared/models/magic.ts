import { AttributesEnum } from '../enums/attributes-enum';

export interface Magic {
  id: number;
  name: string;
  type: 'Divina' | 'Arcana' | 'Universal';
  description: string;
  school: MagicSchools;
  range?: MagicRange;
  execution: MagicExecution;
  target?: string;
  efect?: string;
  duration?: string;
  circle: 1 | 2 | 3 | 4 | 5;
  area?: String;
  resistence?: String;
}

export enum MagicSchools {
  Transmutacao = 'Transmutação',
  Encantamento = 'Encantamento',
  Abjuracao = 'Abjuração',
  Convocacao = 'Convocação',
  Adivinhacao = 'Adivinhação',
  Necromancia = 'Necromancia',
  Ilusao = 'Ilusão',
  Evocacao = 'Evocação'
}

export enum MagicRange {
  Curto = 'Curto',
  Medio = 'Médio',
  Longo = 'Longo',
  Pessoal = 'Pessoal',
  Toque = 'Toque',
  Doiskm = '2km',
  Seismetro = '6m',
  QuatroEmeio = '4,5m',
  Ilimitado = 'Ilimitado'
}

export enum MagicExecution {
  Padrao = 'Padrão',
  Reacao = 'Reação',
  Completa = 'Completa',
  Movimento = 'Movimento',
  Livre = 'Livre',
  DuasRodadas = '2 rodadas',
  DezMinutos = '10 minutos'
}