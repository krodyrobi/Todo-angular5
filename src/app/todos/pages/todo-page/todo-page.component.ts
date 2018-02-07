import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Todo} from '@app/todos/models';
import {TodoAdd, TodoGet, TodoRemove, TodoToggle} from '@app/todos/actions';
import {selectAllTodos, State} from '@app/todos/reducers';


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.todos$ = this.store.select(selectAllTodos);
    this.store.dispatch(new TodoGet());
  }

  todoAdded(text) {
    this.store.dispatch(new TodoAdd(text));
  }

  toggleTodo(todo: Todo) {
    this.store.dispatch(new TodoToggle(todo));
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(new TodoRemove(todo.id));
  }
}
