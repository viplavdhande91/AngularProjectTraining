import { Component, OnInit } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core'

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {


  weight = 2; //KG
  constructor() { }

  ngOnInit(): void {
  }

}

//PIPE LOGIC
@Pipe({
  name: 'toGrams' //THIS NAME WILL BE USED ON CORRESPONDING HTML TEMPLATE
})
export class ToGramsPipe implements PipeTransform {


  transform(n: number) :String
  {
    let extension: string = 'grams'
    return (n * 1000).toFixed(2) + extension;
  }
}