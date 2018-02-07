import {Action} from '@ngrx/store';
import {Todo} from '@app/todos/models';

export enum TodoActionTypes {
  Get = '[Todo] Get',
  GetSuccess = '[Todo] Get Success',
  GetFail = '[Todo] Get Fail',
  Add = '[Todo] Add',
  AddSuccess = '[Todo] Add Success',
  AddFail = '[Todo] Add Fail',
  Toggle = '[Todo] Toggle',
  ToggleSuccess = '[Todo] Toggle Success',
  ToggleFail = '[Todo] Toggle Fail',
  Remove = '[Todo] Remove',
  RemoveSuccess = '[Todo] Remove Success',
  RemoveFail = '[Todo] Remove Fail',
}

export class TodoGet implements Action {
  readonly type = TodoActionTypes.Get;
}

export class TodoGetSuccess implements Action {
  readonly type = TodoActionTypes.GetSuccess;

  constructor(public payload: Todo[]) {
  }
}

export class TodoGetFail implements Action {
  readonly type = TodoActionTypes.GetFail;

  constructor(public payload: Error) {
  }
}

export class TodoAdd implements Action {
  readonly type = TodoActionTypes.Add;

  constructor(public payload: string) {
  }
}

export class TodoAddSuccess implements Action {
  readonly type = TodoActionTypes.AddSuccess;

  constructor(public payload: Todo) {
  }
}

export class TodoAddFail implements Action {
  readonly type = TodoActionTypes.AddFail;

  constructor(public payload: Error) {
  }
}

export class TodoToggle implements Action {
  readonly type = TodoActionTypes.Toggle;

  constructor(public payload: Todo) {
  }
}

export class TodoToggleSuccess implements Action {
  readonly type = TodoActionTypes.ToggleSuccess;

  constructor(public payload: Todo) {
  }
}

export class TodoToggleFail implements Action {
  readonly type = TodoActionTypes.ToggleFail;

  constructor(public payload: Error) {
  }
}

export class TodoRemove implements Action {
  readonly type = TodoActionTypes.Remove;

  constructor(public payload: number) {
  }
}

export class TodoRemoveSuccess implements Action {
  readonly type = TodoActionTypes.RemoveSuccess;

  constructor(public payload: number) {
  }
}

export class TodoRemoveFail implements Action {
  readonly type = TodoActionTypes.RemoveFail;

  constructor(public payload: Error) {
  }
}

export type TodoActions =
  | TodoGet
  | TodoGetSuccess
  | TodoGetFail
  | TodoAdd
  | TodoAddSuccess
  | TodoAddFail
  | TodoToggle
  | TodoToggleSuccess
  | TodoToggleFail
  | TodoRemove
  | TodoRemoveSuccess
  | TodoRemoveFail;
