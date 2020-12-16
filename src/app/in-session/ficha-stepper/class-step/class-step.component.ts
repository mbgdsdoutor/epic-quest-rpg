import { Component, Input } from '@angular/core';
import { Pericia } from 'src/app/shared/models/pericia';
import { Player } from 'src/app/shared/models/player';
import { fullPericiasMock } from 'src/app/utils/mocks';
import { barbarianLevelUpMock, bardLevelUpMock, bardPowers, druidLevelUpMock, druidPowers, warriorLevelUpMock } from 'src/app/utils/classMocks';
import { LevelUp } from 'src/app/shared/models/class';
import { magicSchoolsMock } from 'src/app/shared/models/magic';
import { Poder } from 'src/app/shared/models/poder';

@Component({
  selector: 'class-step',
  templateUrl: './class-step.component.html',
  styleUrls: ['./class-step.component.scss']
})
export class ClassStepComponent {

  @Input() ficha: Player;
  pericias: Pericia[] = fullPericiasMock;
  disabledPericias: number[] = [];
  maxQntyPericias = 0;
  selectedPowers: Poder[];
  barbarianLevelOne: LevelUp = barbarianLevelUpMock.level1;
  bardLevelOne: LevelUp = { fixedPowers: bardPowers.filter(p => p.name === 'Inspiração + 1') };
  magicSchools: string[] = magicSchoolsMock;
  druidLevelOne: LevelUp = { fixedPowers: druidPowers.filter(p => p.name === 'Devoto' || p.name === 'Empatia Selvagem' || p.name === 'Forma Selvagem') };
  warriorLevelOne: LevelUp = warriorLevelUpMock.level1;

  constructor() { }

  ngOnInit() {
    if (this.ficha.race.pericias.length > 0) {
      this.ficha.pericias = [...this.ficha.pericias, ...this.ficha.race.pericias];
    }
    if (this.ficha.origem.pericias.length > 0) {
      this.ficha.pericias = [...this.ficha.pericias, ...this.ficha.origem.pericias]
    }
    if (this.ficha.class.pericias.length > 0) {
      this.ficha.pericias = [...this.ficha.pericias, ...this.ficha.class.pericias];
    }

    this.disabledPericias = [...this.ficha.pericias].map(p => p.id);
    this.maxQntyPericias = this.ficha.pericias.length + this.ficha.class.periciasChoose[0].quantity;
  }

  updateBardSchools() {
    this.bardLevelOne = bardLevelUpMock(this.ficha.class.magicSchoolsAllowed).level1;
  }

  updateDruidSchools() {
    this.druidLevelOne = druidLevelUpMock(this.ficha.class.magicSchoolsAllowed).level1;
  }
}