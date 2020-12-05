import { Component, Input } from '@angular/core';
import { AttributesEnum } from 'src/app/shared/enums/attributes-enum';
import { Pericia } from 'src/app/shared/models/pericia';
import { Player } from 'src/app/shared/models/player';
import { Race } from 'src/app/shared/models/race';
import { fullPericiasMock, raceMock } from 'src/app/utils/mocks';

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
}