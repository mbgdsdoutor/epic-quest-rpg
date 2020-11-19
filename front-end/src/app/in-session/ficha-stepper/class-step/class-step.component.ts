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

  constructor() { }

  ngOnInit() {

  }
}