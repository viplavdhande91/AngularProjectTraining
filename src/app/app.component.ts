

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicPipes';
  myname = 'viplav';
  myrank = 101;
  student = { name: 'viplav', rank: 23 };
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based

}