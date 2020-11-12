import { Pericia } from './pericia';
import { Poder } from './poder';

export interface Race {
  id: number;
  name: string;
  strengthPoints: number;
  wisdomPoints: number;
  dexterityPoints: number;
  constitutionPoints: number;
  intelligencePoints: number;
  charismaPoints: number;
  freePoints: number;
  displacement: number;
  pericias: Pericia[];
  poderes: Poder[];
}
