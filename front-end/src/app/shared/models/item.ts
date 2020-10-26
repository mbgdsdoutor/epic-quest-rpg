import { DiceEnum } from '../enums/dice-enum';
import { Requirement } from './requirement';

export interface Item {
  id: number;
  name: string;
  description: string;
  value: number;
  damage_dice?: DiceEnum;
  additionalDamagePoints?: number;
  penaltyDice?: DiceEnum;
  penaltyPoints?: number;
  caPoints?: number;
  consumable: boolean;
  consumableEffectDice?: DiceEnum;
  consumableEffectDiceAdditional?: number;
  consumableEffectDiceDuration?: number;
  lifePointsEffect?: number;
  manaPointsEffect?: number;
  strengthPointsEffect?: number;
  wisdomPointsEffect?: number;
  dexterityPointsEffect?: number;
  constitutionPointsEffect?: number;
  intelligencePointsEffect?: number;
  charismaPointsEffect?: number;
  periciaValueModifier?: number;
  requirement?: Requirement;
}
