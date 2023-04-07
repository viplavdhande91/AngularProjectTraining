

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


  users = [
    { name: 'Viplav', phone: '1111', email: 'viplav@test.com' },
    { name: 'Bruce', phone: '2299', email: 'bruce@test.com' },

  ]


  multiClasses = {
    class1: true,
    class2: false,
    class3: true
  };

  multiStyles = {
    'background': 'rebeccapurple',
    'border': '2px solid yellow',
    'color': '#fff',
    'height': '100px'
  };

 componentDirective = "@Component({selector: 'app-root',templateUrl: './app.component.html',styleUrls: ['./app.component.css']})";

}