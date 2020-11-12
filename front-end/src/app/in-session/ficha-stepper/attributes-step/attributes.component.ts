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
  attributes: Attribute[] = [
    { name: AttributesEnum.Charisma, value: 10 },
    { name: AttributesEnum.Constitution, value: 10 },
    { name: AttributesEnum.Dexterity, value: 10 },
    { name: AttributesEnum.Intelligence, value: 10 },
    { name: AttributesEnum.Strength, value: 10 },
    { name: AttributesEnum.Wisdom, value: 10 },
  ];
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

  handleChangeAttribute(value) {
    const selectedValue = this.costPerPointsValue.find(el => el.value === value).cost;
    this.availablePoints = this.availablePoints - selectedValue;

    console.log(this.attributes)
  }
}

export interface Attribute {
  name: AttributesEnum,
  value: number,
}

export interface CostPerValue {
  cost: number,
  value: number,
}