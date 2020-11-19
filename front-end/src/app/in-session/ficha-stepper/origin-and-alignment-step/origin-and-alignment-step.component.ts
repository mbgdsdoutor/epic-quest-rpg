import { Component, Input } from '@angular/core';
import { AlignmentEnum } from 'src/app/shared/enums/alignment-enum';
import { Origem } from 'src/app/shared/models/origem';
import { Player } from 'src/app/shared/models/player';
import { alignmentMocks, fullOrigensMock } from 'src/app/utils/mocks';

@Component({
  selector: 'origin-and-alignment-step',
  templateUrl: './origin-and-alignment-step.component.html',
  styleUrls: ['./origin-and-alignment-step.component.scss']
})
export class OriginAndAlignmentStepComponent {

  @Input() ficha: Player;
  alignments: { name: AlignmentEnum, description: string }[] = alignmentMocks;
  selectedAlignment = null;
  origins: Origem[] = fullOrigensMock;

  constructor() { }

  ngOnInit() {
    this.selectedAlignment = this.alignments.filter(a => a.name === this.ficha.alignment)[0];
  }

  handleChangeAlignnment(event: AlignmentEnum) {
    this.selectedAlignment = this.alignments.filter(a => a.name === event)[0];
  }
}