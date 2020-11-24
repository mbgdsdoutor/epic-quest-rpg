export enum DiceEnum {
  D3 = 'd3',
  D4 = 'd4',
  D6 = 'd6',
  D8 = 'd8',
  D10 = 'd10',
  D12 = 'd12',
  D20 = 'd20',
  D100 = 'd100'
}

export interface DiceLog {
  dices: { dice: DiceEnum, quantity: number }[],
  result: number,
}