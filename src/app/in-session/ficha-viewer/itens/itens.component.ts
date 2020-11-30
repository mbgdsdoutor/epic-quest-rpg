import { Component, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent {
  @Input() ficha: Player;

  constructor() { }

  ngOnInit() {
  }
}
