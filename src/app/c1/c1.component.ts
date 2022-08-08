import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styles: [
    '.custom{color:red}'
  ]
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
