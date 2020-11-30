import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/authentication/services/user.service';
import { AlertService } from 'src/app/shared/alert.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { Adventure } from 'src/app/shared/models/adventure';
import { TokenStorageService } from 'src/app/token-storage.service';
import { User } from '../../models/user';
import { AdventureService } from '../../services/adventure.service';

@Component({
  selector: 'app-new-adventure',
  templateUrl: './new-adventure.component.html',
  styleUrls: ['./new-adventure.component.scss']
})

export class NewAdventureComponent implements OnInit {

  users: User[] = [];
  loggedUser: User;
  //form aventura
  adventureName: string;
  adventureDescription: string;
  adventureUsers: User[] = [];
  adventurePhotoUrl: string;

  constructor(
    private tokenService: TokenStorageService,
    private userService: UserService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private adventureService: AdventureService,
  ) { }

  ngOnInit() {
    this.loggedUser = this.tokenService.getLoggedUser();
    let idsMap = [];
    if (this.loggedUser.friendList && this.loggedUser.friendList.length > 0) {
      idsMap = this.loggedUser.friendList.map(e => e.id)
    }

    this.userService.findAll().subscribe(response => {
      this.users = response;
      this.adventureUsers = response;
      // this.users = response.filter(e => e.id !== this.loggedUser.id && idsMap.includes(e.id))
    })
  }

  saveAdventure() {
    this.loadingService.startLoadingBar();
    const adventure: Adventure = {
      name: this.adventureName,
      description: this.adventureDescription,
      photoUrl: this.adventurePhotoUrl,
      users: this.adventureUsers,
      master: this.users.filter(u => u.id === this.loggedUser.id)[0]
    }
    console.log('salvando aventura: ', adventure)
    this.adventureService.saveAdventure(adventure).subscribe(response => {
      console.log('AVENTURA CRIADA!! ', response)
      this.loadingService.stopLoadingBar();
      this.alertService.success('aventura criada com sucesso.');
    }, (err) => {
      this.loadingService.stopLoadingBar();
      this.alertService.error('erro ao criar aventura.')
    })
  }

}
