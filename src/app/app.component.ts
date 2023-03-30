import { ApiService } from './api.service';


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: any;

  constructor(private apiService: ApiService) {

  }
  getData() {
    this.apiService.getData().subscribe(response => {
        this.data = response;
        console.log(this.data);
      })
  }
}