import { AlignmentEnum } from '../enums/alignment-enum';
import { Class } from './class';
import { Deus } from './deus';
import { Item } from './item';
import { Origem } from './origem';
import { Pericia } from './pericia';
import { Poder } from './poder';
import { Race } from './race';

export interface Player {
  id: number;
  name: string;
  photoUrl: string;
  userId: number;
  nivel: number;
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
  deus: Deus;
}
