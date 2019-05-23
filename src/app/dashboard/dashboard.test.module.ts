import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { TodosTestModule } from './todos/todos.test.module';
import { DashboardServiceMock } from 'src/test/mocks/dashboard.service.mock';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TodosTestModule
  ],
  providers: [
    { provide: DashboardService, useClass: DashboardServiceMock }
  ],
  exports: [
      DashboardComponent
  ]
})
export class DashboardTestModule { }
