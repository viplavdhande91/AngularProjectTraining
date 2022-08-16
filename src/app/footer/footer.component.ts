import { Component, OnInit } from '@angular/core';
import { UserdatashareService } from '../services/userdatashare.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  users: any;

  constructor(private userData: UserdatashareService) {
    // console.log(userData.usersDataFunc())
    this.users = userData.usersDataFunc();

  }

  ngOnInit(): void {
  }

}
