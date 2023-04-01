import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private todoservice: TodosService) { }

  ngOnInit(): void {
  }

  dataSetter(): void {


    this.todoservice.data = "My Score is 82%";


  }

}
