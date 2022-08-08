import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  template: `
     <h2 class="custom">
      c3 works!
    </h2>
  `,
  styles: [
    `.custom{
      color:blue
    }`
  ]
})
export class C3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
