import { Component } from '@angular/core';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import { Notification, NotificationStatus } from '../../models/notification';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {

  constructor(
    private loadingService: LoadingService,
    private tokenService: TokenStorageService,
    private notificationService: NotificationService) { }

  notifications: Notification[] = [];
  isNotificationsOpened: boolean = false;

  ngOnInit() {
    console.log('test render');
    const userId = this.tokenService.getLoggedUser().id;
    this.notificationService.findByUserId(userId).subscribe(response => {
      this.notifications = response;
    })
  }

  toggleNotificationOpen() {
    this.isNotificationsOpened = !this.isNotificationsOpened;
  }

  updateNotification(notification: Notification, status: string) {
    const notificationIndex = this.notifications.indexOf(notification) + 1;
    this.loadingService.startLocalLoading(`.notifications-list > div:nth-child(${notificationIndex})`)
    const updatedNotification: Notification = { ...notification, status: status as NotificationStatus }
    this.notificationService.updateNotification(updatedNotification).subscribe(response => {
      this.notifications = this.notifications.filter(el => el.id !== response.id);
      this.loadingService.stopLocalLoading(`.notifications-list > div:nth-child(${notificationIndex})`);
    })
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
