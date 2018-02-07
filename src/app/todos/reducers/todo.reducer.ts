import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import {Todo} from '@app/todos/models';
import {TodoActions, TodoActionTypes} from '@app/todos/actions';

export interface State extends EntityState<Todo> {
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();
export const initialState: State = adapter.getInitialState({});


export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.GetSuccess:
      return adapter.addAll(action.payload, state);

    case TodoActionTypes.AddSuccess:
      return adapter.addOne(action.payload, state);

    case TodoActionTypes.ToggleSuccess:
      action.payload.completed = !action.payload.completed;
      return adapter.updateOne({id: action.payload.id, changes: action.payload}, state);

    case TodoActionTypes.RemoveSuccess:
      return adapter.removeOne(action.payload, state);

    default:
      return state;
  }
}

export const {
  selectAll: selectAllTodos,
} = adapter.getSelectors();
