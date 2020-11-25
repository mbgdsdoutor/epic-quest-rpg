import { AttributesEnum } from '../enums/attributes-enum';

export interface Pericia {
  id: number;
  name: string;
  description: string;
  attribute: AttributesEnum;
  onlyTrained: boolean;
  armorPenalty: boolean;
}
