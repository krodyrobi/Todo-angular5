import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddComponent implements OnInit {
  @Output() todoAdded: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  add(input) {
    this.todoAdded.next(input.value);
    input.value = '';
  }
}
