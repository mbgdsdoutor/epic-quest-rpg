import { Item } from './item';
import { Pericia } from './pericia';
import { Poder } from './poder';

export interface Origem {
  id: number;
  name: string;
  description: string;
  items: Item[];
  pericias: Pericia[];
  poderes: Poder[];
}
