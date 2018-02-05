export class Todo {
  id?: number;
  text: string;
  completed = false;

  constructor(init?: Partial<Todo>) {
    Object.assign(this, init);
  }
}
