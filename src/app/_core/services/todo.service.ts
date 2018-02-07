import {Injectable} from '@angular/core';
import {Todo} from '@app/todos/models';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';


@Injectable()
export class TodoService {
  private id = 0;
  private todos: Todo[] = [
    this.createWithCounter('start 1', true),
    this.createWithCounter('start 2', false),
  ];

  constructor() {
  }

  all(): Observable<Todo[]> {
    return Observable.of(this.todos).delay(1000);
  }

  create(text: string): Observable<Todo> {
    return Observable.of(this.createWithCounter(text, false)).delay(500);
  }

  update(todo: Todo): Observable<Todo> {
    return Observable.of(todo).delay(500);
  }

  remove(id: number): Observable<boolean> {
    return Observable.of(true).delay(500);
  }

  private createWithCounter(text: string, completed = false) {
    return new Todo({id: this.id++, text, completed});
  }
}
