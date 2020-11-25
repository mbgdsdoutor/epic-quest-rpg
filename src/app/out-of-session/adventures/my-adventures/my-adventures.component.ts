import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import { usersMock } from 'src/app/utils/mocks';
import { Adventure } from '../../../shared/models/adventure';
import { User } from '../../models/user';
import { AdventureService } from '../../services/adventure.service';

@Component({
  selector: 'app-my-adventures',
  templateUrl: './my-adventures.component.html',
  styleUrls: ['./my-adventures.component.scss']
})

export class MyAdventuresComponent implements OnInit {

  user: User;
  adventures: Adventure[] = [];
  searchedAdventures: Adventure[] = [];

  constructor(
    private loadingService: LoadingService,
    private tokenService: TokenStorageService,
    private adventureService: AdventureService) { }

  ngOnInit() {
    // this.user = this.tokenService.getLoggedUser();
    this.user = usersMock[0];
    this.adventureService.findByUserId(2).subscribe(response => {
      this.adventures = response;
      this.searchedAdventures = this.adventures;
    })
  }

  handleSearchUser(event): void {
    const searchText = event.currentTarget.value
    if(searchText.length > 0) {
      this.searchedAdventures = this.adventures.filter(adventure => {
        return adventure.name.toLowerCase().includes(searchText.toLowerCase()) || adventure.master.userName.toLowerCase().includes(searchText.toLowerCase())
      })
    } else {
      this.searchedAdventures = this.adventures;
    }
  }
}
