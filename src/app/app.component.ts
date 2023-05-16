
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Component } from '@angular/core';
interface dsaData {
  dsa?: object;

}


interface dsaData {
  easy?: number[];
  medium?: number[];
  hard?: number[];
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chart: any;
  public data: dsaData = {};

  ngOnInit(): void {
    this.ChartCallMethod();

  }


  ChartCallMethod(): void {

    this.data.easy = [];
    this.data.medium = [];
    this.data.hard = [];
    //EASY DATA
    this.data.easy[0] = 7; //    'Arrays',
    this.data.easy[1] = 1; //    'LinkedList',
    this.data.easy[2] = 0;//    'Stacks & Queues',
    this.data.easy[3] = 0; //   'BST',
    this.data.easy[4] = 0; //    'Binary Tree',
    this.data.easy[5] = 0; //    'Heaps & Hashing',
    this.data.easy[6] = 0; //    'Recursion',
    this.data.easy[7] = 0; //       'DP',
    this.data.easy[8] = 0;//    'Graphs',
    this.data.easy[9] = 0; //    'Greedy',
    this.data.easy[10] = 0; //     'Segment Trees',
    this.data.easy[11] = 2; //     '2dArray' 
    this.data.easy[12] = 6; //      'Strings',
    this.data.easy[13] = 0; //     'Searching & Sorting',
    this.data.easy[14] = 0; //      'Backtracking',
    this.data.easy[15] = 0; //      'Trie'
    //MEDIUM DATA

    this.data.medium[0] = 0; //     'Arrays',
    this.data.medium[1] = 0; //    'LinkedList',
    this.data.medium[2] = 0;//    'Stacks & Queues',
    this.data.medium[3] = 0; //   'BST',
    this.data.medium[4] = 0; //    'Binary Tree',
    this.data.medium[5] = 0; //    'Heaps & Hashing',
    this.data.medium[6] = 0; //    'Recursion',
    this.data.medium[7] = 0; //       'DP',
    this.data.medium[8] = 0;//      'Graphs',
    this.data.medium[9] = 0; //      'Greedy',
    this.data.medium[10] = 0; //     'Segment Trees',
    this.data.medium[11] = 0; //     '2dArray' 
    this.data.medium[12] = 0; //      'Strings',
    this.data.medium[13] = 0; //     'Searching & Sorting',
    this.data.medium[14] = 0; //      'Backtracking',
    this.data.medium[15] = 0; //      'Trie'
    //HARD DATA

    this.data.hard[0] = 0; //    'Arrays',
    this.data.hard[1] = 0; //    'LinkedList',
    this.data.hard[2] = 0;//     'Stacks & Queues',
    this.data.hard[3] = 0; //   'BST',
    this.data.hard[4] = 0; //    'Binary Tree',
    this.data.hard[5] = 0; //    'Heaps & Hashing',
    this.data.hard[6] = 0; //    'Recursion',
    this.data.hard[7] = 0; //       'DP',
    this.data.hard[8] = 0;//    'Graphs',
    this.data.hard[9] = 0; //    'Greedy',
    this.data.hard[10] = 0; //     'Segment Trees',
    this.data.hard[11] = 0; //     '2dArray' 
    this.data.hard[12] = 0; //      'Strings',
    this.data.hard[13] = 0; //     'Searching & Sorting',
    this.data.hard[14] = 0; //      'Backtracking',
    this.data.hard[15] = 0; //      'Trie'



    let dataFirst = {
      label: "Easy",
      data: this.data.easy,
      lineTension: 0,
      fill: false,
      borderColor: 'green',
      pointStyle: 'circle',
      pointRadius: 10,
      pointHoverRadius: 15

    };

    let dataSecond = {
      label: "Medium",
      data: this.data.medium,
      lineTension: 0,
      fill: false,
      borderColor: 'yellow',
      pointStyle: 'triangle',
      pointRadius: 10,
      pointHoverRadius: 15
    };

    let dataThird = {
      label: "Hard",
      data: this.data.hard,
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
        labels: ['Arrays', 'LinkedList', 'Stacks & Queues', 'BST', 'Binary Tree', 'Heaps & Hashing', 'Recursion',
          'DP', 'Graphs', 'Greedy', 'Segment Trees', '2dArray', 'Strings', 'Searching & Sorting', 'Backtracking', 'Trie'],
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

