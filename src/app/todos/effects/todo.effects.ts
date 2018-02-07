import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, flatMap, map, tap} from 'rxjs/operators';

import {TodoService} from '@core/services';
import {ToastrService} from 'ngx-toastr';

import {
  TodoActionTypes,
  TodoAdd,
  TodoAddFail,
  TodoAddSuccess,
  TodoGet,
  TodoGetFail,
  TodoGetSuccess,
  TodoRemove,
  TodoRemoveFail,
  TodoRemoveSuccess,
  TodoToggle,
  TodoToggleFail,
  TodoToggleSuccess
} from '@app/todos/actions';


@Injectable()
export class TodoEffects {
  @Effect()
  get$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.Get),
    flatMap((action: TodoGet) =>
      this.todoService.all().pipe(
        map(data => new TodoGetSuccess(data)),
        catchError(error => of(new TodoGetFail(error)))
      )
    )
  );

  @Effect()
  add$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.Add),
    flatMap((action: TodoAdd) =>
      this.todoService.create(action.payload).pipe(
        map(data => new TodoAddSuccess(data)),
        catchError(error => of(new TodoAddFail(error)))
      )
    )
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.Toggle),
    flatMap((action: TodoToggle) =>
      this.todoService.update(action.payload).pipe(
        map(data => new TodoToggleSuccess(data)),
        catchError(error => of(new TodoToggleFail(error)))
      )
    )
  );

  @Effect()
  remove$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.Remove),
    flatMap((action: TodoRemove) =>
      this.todoService.remove(action.payload).pipe(
        map(() => new TodoRemoveSuccess(action.payload)),
        catchError(error => of(new TodoRemoveFail(error)))
      )
    )
  );

  @Effect({dispatch: false})
  failures$: Observable<Action> = this.actions$.pipe(
    ofType(
      TodoActionTypes.GetFail,
      TodoActionTypes.AddFail,
      TodoActionTypes.ToggleFail,
      TodoActionTypes.RemoveFail,
    ),
    tap((action: any) =>
      this.toastService.error(action.payload.message)
    )
  );

  constructor(private actions$: Actions,
              private todoService: TodoService,
              private toastService: ToastrService) {
  }
}
