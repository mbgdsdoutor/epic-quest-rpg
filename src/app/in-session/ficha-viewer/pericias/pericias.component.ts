import { Component, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'pericias',
  templateUrl: './pericias.component.html',
  styleUrls: ['./pericias.component.scss']
})
export class PericiasComponent {
  @Input() ficha: Player;

  constructor() { }

  ngOnInit() {
  }
}
