

import { Component } from '@angular/core';
import { WeatherDataServiceService } from './services/weather-data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weather: any;

  constructor(private weatherData: WeatherDataServiceService) {
    this.weatherData.weatherData().subscribe((data) => {  ///subscribe() is the function which 
      //passes data to only required component[For E.g app component here]


      console.log(data);
      this.weather = data;

    });
  }
}