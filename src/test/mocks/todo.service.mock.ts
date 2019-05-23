import { of } from "rxjs";

export class TodoServiceMock {
  listTodos() {
    return of([
      {text: 'Buy fruit', status: 'todo'},
      {text: 'Pay mortage off', status: 'done'}
    ]);
  }
}