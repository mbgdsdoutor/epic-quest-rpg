import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/token-storage.service';
import { Adventure } from '../../../shared/models/adventure';
import { Notification, NotificationStatus, NotificationType } from '../../models/notification';
import { AdventureService } from '../../services/adventure.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})

export class AdventureComponent implements OnInit {

  adventures: Adventure[] = [];
  searchedAdventures: Adventure[] = [];
  adventuresIdNotification: number[] = [];

  constructor(
    private tokenService: TokenStorageService,
    private notificationService: NotificationService,
    private adventureService: AdventureService) { }

  ngOnInit() {
    this.adventureService.findAll().subscribe(response => {
      this.adventures = response;
      this.searchedAdventures = this.adventures;
    });
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

  handleSendNotification(adventure: Adventure) {
    const loggedUser = this.tokenService.getLoggedUser();
    const notification: Notification = {
      from: loggedUser,
      to: adventure.master,
      status: NotificationStatus.Created,
      type: NotificationType.FriendList,
      adventureName: adventure.name
    }
    this.notificationService.createNotification(notification).subscribe(response => {
      this.adventuresIdNotification.push(adventure.id);
    })
  }
}