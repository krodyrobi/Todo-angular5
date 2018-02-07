import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '@app/todos/models';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() toggle: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit() {
  }

  getIcon() {
    return this.todo.completed ? 'check_box' : 'check_box_outline_blank';
  }
}
