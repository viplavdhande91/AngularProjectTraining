

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'handson-project';
  myname = 'Viplav';
  myrank = 101;
  student = { name: 'viplav', rank: 23 };
}