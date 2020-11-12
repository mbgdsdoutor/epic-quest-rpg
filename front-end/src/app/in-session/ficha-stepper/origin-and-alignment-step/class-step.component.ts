import { Component, Input } from '@angular/core';
import { AttributesEnum } from 'src/app/shared/enums/attributes-enum';
import { Player } from 'src/app/shared/models/player';
import { Race } from 'src/app/shared/models/race';
import { raceMock } from 'src/app/utils/mocks';

@Component({
  selector: 'class-step',
  templateUrl: './class-step.component.html',
  styleUrls: ['./class-step.component.scss']
})
export class ClassStepComponent {

  @Input() ficha: Player;
  race: Race = raceMock;
  attributes = [];

  constructor() { }

  ngOnInit() {
    const { strengthPoints, wisdomPoints, dexterityPoints, intelligencePoints, charismaPoints, constitutionPoints } = this.race;
    this.attributes = [
      { name: AttributesEnum.Charisma, value: charismaPoints },
      { name: AttributesEnum.Strength, value: strengthPoints },
      { name: AttributesEnum.Wisdom, value: wisdomPoints },
      { name: AttributesEnum.Dexterity, value: dexterityPoints },
      { name: AttributesEnum.Intelligence, value: intelligencePoints },
      { name: AttributesEnum.Constitution, value: constitutionPoints },
    ].filter(attribute => attribute.value !== 0)

    console.log(this.attributes)
  }
}