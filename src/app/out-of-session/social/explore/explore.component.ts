import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/authentication/services/user.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})

export class ExploreComponent implements OnInit {

  loggedUser: User;
  users: User[] = [];
  searchedUsers: User[] = [];
  usersIdNotification: number[] = [];
  allNotifications = [];
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private tokenService: TokenStorageService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.startLoadingBar();
    this.isLoading = true;
    this.loggedUser = this.tokenService.getLoggedUser();
    this.userService.getFriends().subscribe(friends => {
      this.loggedUser.friendList = friends;
    }).add(() => {
      this.userService.findAll().subscribe(response => {
        let idsMap = [];
        if (this.loggedUser.friendList && this.loggedUser.friendList.length > 0) {
          idsMap = this.loggedUser.friendList.map(e => e.id)
        }

        this.users = response.filter(u => u.id !== this.loggedUser.id && !idsMap.includes(u.id));
        this.searchedUsers = this.users;
      }).add(() => {
        this.loadingService.stopLoadingBar();
        this.isLoading = false;
      });
    })
  }

  handleSearchUser(event): void {
    const searchText = event.currentTarget.value;
    if (searchText.length > 0) {
      this.searchedUsers = this.users.filter(user => {
        return user.userName.toLowerCase().includes(searchText.toLowerCase()) || user.email.toLowerCase().includes(searchText.toLowerCase());
      });
    } else {
      this.searchedUsers = this.users;
    }
  }

  handleSendNotification(user: User) {
    this.userService.addFriend(user).subscribe(response => {
      console.log(response)
      this.usersIdNotification.push(user.id);
    })
  }
}
