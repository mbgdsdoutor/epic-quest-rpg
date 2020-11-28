import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/authentication/services/user.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import { User } from '../../models/user';
import { AdventureService } from '../../services/adventure.service';

@Component({
  selector: 'app-new-adventure',
  templateUrl: './new-adventure.component.html',
  styleUrls: ['./new-adventure.component.scss']
})

export class NewAdventureComponent implements OnInit {

  players: string[] = [];
  users: User[] = [];
  loggedUser: User;

  constructor(
    private tokenService: TokenStorageService,
    private userService: UserService,
    private adventureService: AdventureService,
  ) { }

  ngOnInit() {
    this.loggedUser = this.tokenService.getLoggedUser();
    let idsMap = [];
    if (this.loggedUser.friendList && this.loggedUser.friendList.length > 0) {
      idsMap = this.loggedUser.friendList.map(e => e.id)
    }

    this.userService.findAll().subscribe(response => {
      this.users = response.filter(e => e.id !== this.loggedUser.id && idsMap.includes(e.id))
    })
  }


}
