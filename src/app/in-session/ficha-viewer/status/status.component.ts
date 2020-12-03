import { Component, Input } from '@angular/core';
import { AttributesEnum } from 'src/app/shared/enums/attributes-enum';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input() ficha: Player;
  attributes: Attributes[] = [];

  constructor() { }

  ngOnInit() {
    const { strength, wisdom, dexterity, intelligence, charisma, constitution } = this.ficha;
    this.attributes = [
      { name: AttributesEnum.Charisma, value: charisma, modifier: Math.trunc((charisma - 10) / 2) },
      { name: AttributesEnum.Strength, value: strength, modifier: Math.trunc((strength - 10) / 2) },
      { name: AttributesEnum.Wisdom, value: wisdom, modifier: Math.trunc((wisdom - 10) / 2) },
      { name: AttributesEnum.Dexterity, value: dexterity, modifier: Math.trunc((dexterity - 10) / 2) },
      { name: AttributesEnum.Intelligence, value: intelligence, modifier: Math.trunc((intelligence - 10) / 2) },
      { name: AttributesEnum.Constitution, value: constitution, modifier: Math.trunc((constitution - 10) / 2) },
    ]
  }
}

export interface Attributes {
  name: AttributesEnum,
  value: number,
  modifier: number,
}