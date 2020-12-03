import { Component, Input } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent {
  @Input() ficha: Player;
  @Input() isMaster: boolean;
  itens: Item[] = [];
  isAddingItem: boolean = false;
  itemToAdd: Item = { name: '', description: '', consumable: false };

  constructor() { }

  ngOnInit() {
    this.itens = this.ficha.items;
  }

  toggleAddingItem() {
    this.isAddingItem = !this.isAddingItem;
  }

  addItem() {
    this.itens.push(this.itemToAdd);
    this.itemToAdd = { name: '', description: '', consumable: false };
    this.toggleAddingItem();
  }
}
