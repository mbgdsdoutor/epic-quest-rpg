import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/authentication/services/user.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})

export class ExploreComponent implements OnInit {

  users: User[] = [];
  searchedUsers: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findAll().subscribe(response => {
      this.users = response;
      this.searchedUsers = this.users;
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
}
