import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/authentication/services/user.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { NotificationService } from '../../services/notification.service';
import { Notification, NotificationStatus, NotificationType } from '../../models/notification';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})

export class ExploreComponent implements OnInit {

  users: User[] = [];
  searchedUsers: User[] = [];
  usersIdNotification: number[] = [];
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private tokenService: TokenStorageService,
    private notificationService: NotificationService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.startLoadingBar();
    this.isLoading = true;
    this.userService.findAll().subscribe(response => {
      this.users = response;
      this.searchedUsers = this.users;
    }).add(() => {
      this.loadingService.stopLoadingBar();
      this.isLoading = false;
    });
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
    const loggedUser = this.tokenService.getLoggedUser();
    const notification: Notification = {
      from: loggedUser,
      to: user,
      status: NotificationStatus.Created,
      type: NotificationType.FriendList
    }
    this.notificationService.createNotification(notification).subscribe(response => {
      this.usersIdNotification.push(user.id);
    })
  }
}
