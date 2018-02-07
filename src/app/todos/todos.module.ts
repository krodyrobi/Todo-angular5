import {NgModule} from '@angular/core';
import {TodosRoutingModule} from '@app/todos/todos-routing.module';
import {SharedModule} from '@shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {TodoPageComponent} from '@app/todos/pages';
import {TodoAddComponent, TodoComponent, TodoListComponent} from '@app/todos/components';
import {TodoEffects} from '@app/todos/effects';
import {reducers} from '@app/todos/reducers';


@NgModule({
  imports: [
    SharedModule,
    TodosRoutingModule,
    StoreModule.forFeature('@todos', reducers),
    EffectsModule.forFeature([TodoEffects])
  ],
  declarations: [TodoComponent, TodoListComponent, TodoAddComponent, TodoPageComponent]
})
export class TodosModule {
}
