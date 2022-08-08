import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  template: `
    <h2 class="custom">
      c2 works!
    </h2>
  `,
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
