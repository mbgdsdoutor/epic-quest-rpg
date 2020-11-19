import { Pericia } from './pericia';
import { Poder } from './poder';
import { Deus } from './deus';

export interface Requirement {
  id?: number,
  strengthPoints?: number,
  wisdomPoints?: number,
  dexterityPoints?: number,
  constitutionPoints?: number,
  intelligencePoints?: number,
  charismaPoints?: number,
  //poderes?: Poder[],
  poderes?: number[],
  pericias?: Pericia[],
  deus?: Deus | null,
}