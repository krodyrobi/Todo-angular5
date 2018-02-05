import {Component, OnInit} from '@angular/core';
import {Todo} from '@app/todos/models';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todos$: BehaviorSubject<Todo[]>;
  private id = 0;
  private todoStore: Todo[] = [
    new Todo({id: this.id++, text: 'random'})
  ];

  constructor() {
  }

  ngOnInit() {
    this.todos$ = new BehaviorSubject<Todo[]>(this.todoStore);
  }

  todoAdded(text) {
    this.todoStore.push(new Todo({id: this.id++, text: text}));
    this.todos$.next(this.todoStore);
  }
}
