
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chart: any;

  ngOnInit(): void {
    this.ChartCallMethod();

  }


  ChartCallMethod(): void {

    let dataFirst = {
      label: "Easy",
      data: [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      lineTension: 0,
      fill: false,
      borderColor: 'green',
      pointStyle: 'circle',
      pointRadius: 10,
      pointHoverRadius: 15
      
    };

    let dataSecond = {
      label: "Medium",
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      lineTension: 0,
      fill: false,
      borderColor: 'yellow',
      pointStyle: 'triangle',
      pointRadius: 10,
      pointHoverRadius: 15
    };

    let dataThird = {
      label: "Hard",
      data: [0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      lineTension: 0,
      fill: false,
      borderColor: 'red',
      pointStyle: 'rect',
      pointRadius: 10,
      pointHoverRadius: 15
    };



    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Arrays', 'LinkedList','Stacks & Queues', 'BST', 'Binary Tree','Heaps & Hashing','Recursion',
          'DP', 'Graphs', 'Greedy', 'Segment Trees','2dArray' ,'Strings','Searching & Sorting','Backtracking','Trie'],
        datasets: [dataFirst, dataSecond, dataThird]
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'DSA Statistics',
            
          }
        }

      }

    });


  }
}

