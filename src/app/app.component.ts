

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'If-else Condition';
  show = true;

  color = "blue";

  color1 = "red";

  users = [
    { name: 'Viplav', phone: '1111', email: 'viplav@test.com', accounts: ['facebook', 'gmail', 'linkedin'] },
    { name: 'Bruce', phone: '2299', email: 'bruce@test.com', accounts: ['Gmail', 'gmail', 'youtube'] },

  ]


  multiClasses = {
    class1: true,
    class2: false,
    class3: true
  };

  multiStyles = {
    'background': 'red',
    'border': '10px solid green'
  };

}