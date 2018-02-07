import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromTodo from './todo.reducer';

export interface State {
  todos: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodo.reducer
};

export const todosModuleSelector = createFeatureSelector<State>('@todos');

export const todoSelector = createSelector(todosModuleSelector, state => state.todos);
export const selectAllTodos = createSelector(todoSelector, fromTodo.selectAllTodos);
