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

  users: { display: string, value: number }[] = [];
  allUsers: User[] = [];
  loggedUser: User;
  //form aventura
  adventureName: string;
  adventureDescription: string;
  adventureUsers: { display: string, value: number }[] = [];
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
    this.userService.findAll().subscribe(response => {
      this.allUsers = response;
      this.userService.getFriends().subscribe(f => {
        idsMap = f.map(e => e.id)
      }).add(() => {
        this.users = response.map(e => {
          return { display: e.userName, value: e.id }
        }).filter(u => idsMap.includes(u.value));
      })

      // this.adventureUsers = response;
      // this.users = response.filter(e => e.id !== this.loggedUser.id && idsMap.includes(e.id))
    })
  }

  saveAdventure() {
    this.loadingService.startLoadingBar();
    const adventure: Adventure = {
      name: this.adventureName,
      description: this.adventureDescription,
      photoUrl: this.adventurePhotoUrl,
      users: this.allUsers.filter(u => this.adventureUsers.map(e => e.value).includes(u.id)),
      mestre: this.allUsers.filter(u => u.id === this.loggedUser.id)[0]
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
