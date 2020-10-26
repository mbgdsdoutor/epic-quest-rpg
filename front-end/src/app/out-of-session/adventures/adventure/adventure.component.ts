import { Component, OnInit } from '@angular/core';
import { Adventure } from '../../../shared/models/adventure';
import { AdventureService } from '../../services/adventure.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})

export class AdventureComponent implements OnInit {

  adventures: Adventure[] = [];
  searchedAdventures: Adventure[] = [];

  constructor(private adventureService: AdventureService) { }

  ngOnInit() {
    this.adventureService.findAll().subscribe(response => {
      this.adventures = response;
      this.searchedAdventures = this.adventures;
    })
    this.searchedAdventures = this.adventures;
  }

  handleSearchAdventure(event): void {
    const searchText = event.currentTarget.value;
    if (searchText.length > 0) {
      this.searchedAdventures = this.adventures.filter(adventure => {
        return adventure.name.toLowerCase().includes(searchText.toLowerCase()) || adventure.master.userName.toLowerCase().includes(searchText.toLowerCase());
      });
    } else {
      this.searchedAdventures = this.adventures;
    }
  }
}
