import { Component, ElementRef, ViewChild } from '@angular/core';
import { DiceEnum, DiceLog } from 'src/app/shared/enums/dice-enum';

@Component({
  selector: 'dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class DicesComponent {

  @ViewChild('dicesContainer', { static: false }) dicesContainer: ElementRef;
  preRolledDices: { dice: DiceEnum, quantity: number }[] = [
    { dice: DiceEnum.D3, quantity: 0 },
    { dice: DiceEnum.D4, quantity: 0 },
    { dice: DiceEnum.D6, quantity: 0 },
    { dice: DiceEnum.D8, quantity: 0 },
    { dice: DiceEnum.D10, quantity: 0 },
    { dice: DiceEnum.D12, quantity: 0 },
    { dice: DiceEnum.D20, quantity: 0 },
    { dice: DiceEnum.D100, quantity: 0 },
  ];
  dicesLog: DiceLog[] = [];

  constructor() { }

  ngOnInit() {
  }

  hideDices() {
    this.dicesContainer.nativeElement.classList.remove('dices--open');
  }

  clearDices() {
    this.preRolledDices = this.preRolledDices.map(d => {
      d.quantity = 0;
      return d;
    })
  }

  getRandomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  preRoll(dice: DiceEnum) {
    this.preRolledDices = this.preRolledDices.map(e => {
      if (e.dice === dice) {
        e.quantity += 1;
      }
      return e;
    })
  }

  roll() {
    const result: number = this.preRolledDices.reduce((accumulator, currentValue) => {
      let totalDiceValue = 0;
      for (let i = 0; i < currentValue.quantity; i++) {
        totalDiceValue += this.getRandomIntFromInterval(1, parseInt(currentValue.dice.substring(1), 10));
      }
      return accumulator + totalDiceValue;
    }, 0)

    const madoka = []
    this.preRolledDices.forEach(e => {
      madoka.push({ ...e })
    })
    const dices = madoka.filter(d => d.quantity > 0)
    this.dicesLog.push({ dices, result })
    setTimeout(() => {
      this.clearDices();
    }, 300)

  }
}
