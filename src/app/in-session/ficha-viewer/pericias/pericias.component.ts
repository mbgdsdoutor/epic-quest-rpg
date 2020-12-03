import { Component, Input } from '@angular/core';
import { AttributesEnum } from 'src/app/shared/enums/attributes-enum';
import { Pericia } from 'src/app/shared/models/pericia';
import { Player } from 'src/app/shared/models/player';
import { fullPericiasMock } from 'src/app/utils/mocks';
import { Attributes } from '../status/status.component';

@Component({
  selector: 'pericias',
  templateUrl: './pericias.component.html',
  styleUrls: ['./pericias.component.scss']
})
export class PericiasComponent {
  @Input() ficha: Player;
  fullPericias: Pericia[] = fullPericiasMock;
  pericias: PericiasList[] = [];
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
    this.fullPericias.forEach(p => {
      this.pericias.push({
        name: p.name,
        treinada: this.ficha.pericias.filter(el => el.id === p.id).length === 0 ? false : true,
        modificador: this.attributes.find(a => a.name == p.attribute)
      })
    })
    console.log(this.pericias)
  }
}

export interface PericiasList {
  name: string,
  treinada: boolean,
  modificador: { name: string, value: number, modifier: number },
}