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
  area?: string;
  resistence?: string;
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

export const magicSchoolsMock = [MagicSchools.Transmutacao, MagicSchools.Encantamento, MagicSchools.Abjuracao, MagicSchools.Convocacao, MagicSchools.Adivinhacao, MagicSchools.Necromancia, MagicSchools.Ilusao, MagicSchools.Evocacao];

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