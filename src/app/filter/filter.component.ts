import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  todos: any = { "todos" : [],total: 43,skip:54,limit:54}


  



  constructor(private todo : TodosService) { }

  
  getData()
  {
    this.todo.todosData().subscribe(data=> {
      
          this.todos = data;
          console.log(this.todos);
      
     })
  }

}
