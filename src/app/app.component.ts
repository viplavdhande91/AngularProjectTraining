import { Component, VERSION, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  userObject: any = {};
  constructor() {}

  ngOnInit() {
    this.userObject = {
      name: 'Shibin John',
      experience: 20,
    };
  }

  increaseExperience() {
    this.userObject.experience++;
    // Immutability
    this.userObject = {
      name: 'Angular coder',
      experience: 40,
    };
  }

  decreaseExperience() {
    this.userObject.experience--;
  }
}