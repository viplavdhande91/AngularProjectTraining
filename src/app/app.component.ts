import { UserdatashareService } from './services/userdatashare.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: any;
  constructor(private userData: UserdatashareService) {
    console.log(userData.usersDataFunc());
    this.users = userData.usersDataFunc();
  }
}
