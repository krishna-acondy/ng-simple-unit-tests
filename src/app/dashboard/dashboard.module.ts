import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TodosModule } from './todos/todos.module';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TodosModule
  ],
  providers: [
    DashboardService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
