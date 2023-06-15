

import { Component, ElementRef, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Angular';

  @ViewChild('box') box!: ElementRef;  //MANIPULATING CHILD ELEMENTS OF SAME HTML TEMPLATE (box is template refernce variable)
  @ViewChild(Child1Component) child!: Child1Component; //TELLING THAT child1component is childComponent


  ngOnInit() {
    // console.log(this.box);

  }
  ngAfterViewInit() {
    console.log(this.box);
    this.box.nativeElement.style.backgroundColor = "powderblue";
    this.box.nativeElement.placeholder  = "Enter Value";
  }

  ChangeChildProperty(user : string) {
    this.child.userName = user;  //PASSING DATA TO CHILD
  }
  // CallChildMethod() {
  //   this.child.ChildMethod();
  // }
}


