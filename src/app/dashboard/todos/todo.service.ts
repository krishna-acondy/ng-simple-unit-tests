import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable()
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  listTodos() {
    return of([
      {text: 'Buy eggs', status: 'todo'},
      {text: 'Pay phone bill', status: 'done'},
      {text: 'Book flights to Japan', status: 'todo'},
      {text: 'Write Medium article', status: 'in-progress'}
    ]);
  }
}
