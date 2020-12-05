import { AlignmentEnum } from '../enums/alignment-enum';
import { Class } from './class';
import { Deus } from './deus';
import { Item } from './item';
import { Origem } from './origem';
import { Pericia } from './pericia';
import { Poder } from './poder';
import { Race } from './race';

export interface Player {
  id?: number;
  name: string;
  photoUrl: string;
  userId: number;
  nivel: number;
  experience?: number;
  adventureId: number;
  class: Class;
  race: Race;
  alignment: AlignmentEnum;
  age: number;
  origem: Origem;
  lifePoints: number;
  manaPoints: number;
  totalLifePoints: number;
  totalManaPoints: number;
  caPoints: number;
  displacement: number;
  strength: number;
  wisdom: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  charisma: number;
  items: Item[];
  pericias: Pericia[];
  poderes: Poder[];
  tibar: number;
  deus?: Deus;
}

export interface ExperiencePerLevel {
  level1: number, // 0
  level2: number, // 1000
  level3: number, // 3000
  level4: number, // 6000
  level5: number, // 10000
  level6: number, // 15000
  level7: number, // 21000
  level8: number, // 28000
  level9: number, // 36000
  level10: number, // 45000
  level11: number, // 55000
  level12: number, // 66000
  level13: number, // 78000
  level14: number, // 91000
  level15: number, // 105000
  level16: number, // 120000
  level17: number, // 136000
  level18: number, // 153000
  level19: number, // 171000
  level20: number, // 190000
}