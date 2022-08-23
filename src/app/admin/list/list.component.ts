import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.warn("ADMIN LIST COMPONENT LOADED"); //TO CHECK ADMIN LIST COMPONENT GETS LOADED OR NOT

  }

}
