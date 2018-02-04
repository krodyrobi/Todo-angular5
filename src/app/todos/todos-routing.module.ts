import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoPageComponent} from '@app/todos/pages';


const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {
}
