import { Component } from '@angular/core';
import { UserService } from 'src/app/authentication/services/user.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import { NotificationReturn, NotificationStatus } from '../../models/notification';
import { User } from '../../models/user';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {

  constructor(
    private loadingService: LoadingService,
    private userService: UserService,
    private tokenService: TokenStorageService,
    private notificationService: NotificationService) { }

  notifications: NotificationReturn[] = [];
  isNotificationsOpened: boolean = false;
  loggedUser: User;

  ngOnInit() {
    this.loggedUser = this.tokenService.getLoggedUser();
    console.log(this.loggedUser)
    this.notificationService.findByUserId(this.loggedUser.id).subscribe(response => {
      console.log('MADOKA NOTIFICATIONS!', response)
      this.notifications = response;
    })
  }

  toggleNotificationOpen() {
    this.isNotificationsOpened = !this.isNotificationsOpened;
  }

  aceptNotification(notification: NotificationReturn, index: number) {
    this.loadingService.startLocalLoading(`.notifications-list > div:nth-child(${index + 1})`)
    this.userService.aceptFriend(notification.userId).subscribe(res => {
      console.log('ADICIONADO!!!!', res);
      this.notifications = this.notifications.filter(el => el.id !== notification.id);
      this.loadingService.stopLocalLoading(`.notifications-list > div:nth-child(${index + 1})`);

    })
  }

  updateNotification(notification: Notification, status: string) {

    // const notificationIndex = this.notifications.indexOf(notification) + 1;
    // this.loadingService.startLocalLoading(`.notifications-list > div:nth-child(${notificationIndex})`)
    // const updatedNotification: Notification = { ...notification, status: status as NotificationStatus }
    // this.notificationService.updateNotification(updatedNotification).subscribe(response => {
    //   this.notifications = this.notifications.filter(el => el.id !== response.id);
    //   this.loadingService.stopLocalLoading(`.notifications-list > div:nth-child(${notificationIndex})`);
    // })
  }

  switchTheme() {
    const bodyClasses = document.querySelector('body').classList
    if (bodyClasses.contains('light-theme')) {
      bodyClasses.remove('light-theme')
      bodyClasses.add('dark-theme')
    } else {
      bodyClasses.remove('dark-theme')
      bodyClasses.add('light-theme')
    }
  }
}
