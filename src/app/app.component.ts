

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'handson-project';
  myname = 'Viplav';

  student = { name: 'viplav', rank: 23 };

  displayAlert() {

    alert("Button Clicked");

  }

  getData(val:string)
  {
    console.log(val);
  }

  
}