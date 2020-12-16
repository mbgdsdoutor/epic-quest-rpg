import { Component, Input } from '@angular/core';
import { AttributesEnum } from 'src/app/shared/enums/attributes-enum';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent {

  @Input() ficha: Player;
  attributes: Attribute[] = [];
  costPerPointsValue: CostPerValue[] = [
    { value: 8, cost: -2 },
    { value: 9, cost: -1 },
    { value: 10, cost: 0 },
    { value: 11, cost: 1 },
    { value: 12, cost: 2 },
    { value: 13, cost: 3 },
    { value: 14, cost: 4 },
    { value: 15, cost: 6 },
    { value: 16, cost: 8 },
    { value: 17, cost: 11 },
    { value: 18, cost: 14 },
  ]
  availablePoints: number = 20;

  constructor() { }

  ngOnInit() {
    this.setupAttributes();
  }

  setupAttributes() {
    const ageModifier = (this.ficha.race.ageMultiplier * this.ficha.age / 40);
    let {
      strengthPoints,
      wisdomPoints,
      dexterityPoints,
      constitutionPoints,
      intelligencePoints,
      charismaPoints } = this.ficha.race;
    if (ageModifier >= 40 && ageModifier < 60) {
      strengthPoints = strengthPoints - 1;
      wisdomPoints = wisdomPoints + 1;
      dexterityPoints = dexterityPoints - 1;
      constitutionPoints = constitutionPoints - 1;
      intelligencePoints = intelligencePoints + 1;
      charismaPoints = charismaPoints + 1;
    } else if (ageModifier >= 60 && ageModifier < 80) {
      strengthPoints = strengthPoints - 2;
      wisdomPoints = wisdomPoints + 1;
      dexterityPoints = dexterityPoints - 2;
      constitutionPoints = constitutionPoints - 2;
      intelligencePoints = intelligencePoints + 1;
      charismaPoints = charismaPoints + 1;
    } else if (ageModifier >= 80) {
      strengthPoints = strengthPoints - 3;
      wisdomPoints = wisdomPoints + 1;
      dexterityPoints = dexterityPoints - 3;
      constitutionPoints = constitutionPoints - 3;
      intelligencePoints = intelligencePoints + 1;
      charismaPoints = charismaPoints + 1;
    }

    // this.attributes = [{ name: AttributesEnum.Charisma, value: 10 + charismaPoints },
    // { name: AttributesEnum.Constitution, value: 10 + constitutionPoints },
    // { name: AttributesEnum.Dexterity, value: 10 + dexterityPoints },
    // { name: AttributesEnum.Intelligence, value: 10 + intelligencePoints },
    // { name: AttributesEnum.Strength, value: 10 + strengthPoints },
    // { name: AttributesEnum.Wisdom, value: 10 + wisdomPoints },]

    this.attributes = [{ name: AttributesEnum.Charisma, value: 10, preset: charismaPoints },
    { name: AttributesEnum.Constitution, value: 10, preset: constitutionPoints },
    { name: AttributesEnum.Dexterity, value: 10, preset: dexterityPoints },
    { name: AttributesEnum.Intelligence, value: 10, preset: intelligencePoints },
    { name: AttributesEnum.Strength, value: 10, preset: strengthPoints },
    { name: AttributesEnum.Wisdom, value: 10, preset: wisdomPoints },]
  }

  handleChangeAttribute(value) {
    const selectedValue = this.costPerPointsValue.find(el => el.value === value).cost;
    this.availablePoints = this.availablePoints - selectedValue;

    console.log(this.attributes)
  }
}

export interface Attribute {
  name: AttributesEnum,
  value: number,
  preset?: number
}

export interface CostPerValue {
  cost: number,
  value: number,
}