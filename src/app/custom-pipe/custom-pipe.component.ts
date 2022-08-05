import { Component, OnInit } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core'

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {


  weight = 2;
  constructor() { }

  ngOnInit(): void {
  }

}


@Pipe({
  name: 'toGrams' //THIS NAME WILL BE USED ON CORRESPONDING HTML TEMPLATE
})
export class ToGramsPipe implements PipeTransform {


  transform(n: number, extension: string = 'grams') {
    return (n * 100).toFixed(2) + extension;
  }
}