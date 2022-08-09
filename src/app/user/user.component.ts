import { Component, OnInit,Output,EventEmitter } from '@angular/core';





@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
   
  @Output() GetDataFromChildEvent = new EventEmitter<string>(); //string because we have to pass string data
  ngOnInit(): void {

  }

}
