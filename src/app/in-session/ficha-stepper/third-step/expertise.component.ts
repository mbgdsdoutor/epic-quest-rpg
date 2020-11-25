import { Component, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent {

  @Input() ficha: Player;

  constructor() { }
}