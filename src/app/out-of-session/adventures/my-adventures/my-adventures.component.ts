import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';
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
    private alertService: AlertService,
    private tokenService: TokenStorageService,
    private adventureService: AdventureService) { }

  ngOnInit() {
    this.loadingService.startLoadingBar();
    this.user = this.tokenService.getLoggedUser();
    //this.user = usersMock[0];
    this.adventureService.findAll().subscribe(response => {
      const aventurasDisponiveis = response.filter(a => {
        const mapIds = a.users.map(u => u.id)
        return a.mestre.id === this.user.id || mapIds.includes(this.user.id)
      })
      this.adventures = aventurasDisponiveis;
      this.searchedAdventures = this.adventures;
      this.loadingService.stopLoadingBar();
    }, (err) => {
      this.loadingService.stopLoadingBar();
      this.alertService.error('Erro ao carregar aventuras.');
    })
  }

  handleSearchUser(event): void {
    const searchText = event.currentTarget.value
    if (searchText.length > 0) {
      this.searchedAdventures = this.adventures.filter(adventure => {
        return adventure.name.toLowerCase().includes(searchText.toLowerCase()) || adventure.mestre.userName.toLowerCase().includes(searchText.toLowerCase())
      })
    } else {
      this.searchedAdventures = this.adventures;
    }
  }
}
