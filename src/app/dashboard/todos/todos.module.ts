import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    TodoService
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
