import { NgModule } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoServiceMock } from 'src/test/mocks/todo.service.mock';
import { TodosComponent } from './todos.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
      CommonModule
  ],
  providers: [
    { provide: TodoService, useClass: TodoServiceMock }
  ],
  exports: [
      TodosComponent
  ]
})
export class TodosTestModule { }
