import {NgModule} from '@angular/core';
import {TodosRoutingModule} from '@app/todos/todos-routing.module';
import {SharedModule} from '@shared/shared.module';
import {TodoPageComponent} from '@app/todos/pages';
import {TodoAddComponent, TodoComponent, TodoListComponent} from '@app/todos/components';


@NgModule({
  imports: [
    SharedModule,
    TodosRoutingModule,
  ],
  declarations: [TodoComponent, TodoListComponent, TodoAddComponent, TodoPageComponent]
})
export class TodosModule {
}
