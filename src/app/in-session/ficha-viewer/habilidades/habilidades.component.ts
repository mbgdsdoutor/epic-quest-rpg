import { Component, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player';
import { Poder } from 'src/app/shared/models/poder';

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {
  @Input() ficha: Player;
  @Input() isMaster: boolean;
  poderes: Poder[] = [];
  searchedPoderes: Poder[] = [];

  constructor() { }

  ngOnInit() {
    this.poderes = this.ficha.poderes;
    this.searchedPoderes = this.poderes;
    console.log(this.poderes)
  }

  handleSearchPoder(event): void {
    const searchText = event.currentTarget.value;
    if (searchText.length > 0) {
      this.searchedPoderes = this.poderes.filter(poder => {
        return poder.name.toLowerCase().includes(searchText.toLowerCase());
      });
    } else {
      this.searchedPoderes = this.poderes;
    }
  }

  getPoderes(category: string) {
    return this.searchedPoderes.filter(p => p.category == category)
  }

  triggerPanel(event) {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
