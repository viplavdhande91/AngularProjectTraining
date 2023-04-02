

import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myname = 'Viplav';

  constructor(public e1 : ElementRef){


  }

  ngOnInit(): void{
    console.log(this.e1);
  }

  student = { name: 'viplav', rank: 23 };
}