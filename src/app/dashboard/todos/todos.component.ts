import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<any>;
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos$ = this.todoService.listTodos();
  }

}
