import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '@app/todos/models';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() toggle: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit() {
  }

}
