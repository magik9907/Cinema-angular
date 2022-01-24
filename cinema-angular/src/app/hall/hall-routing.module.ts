import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallAddComponent } from './hall-add/hall-add.component';
import { HallEditComponent } from './hall-edit/hall-edit.component';
import { HallListComponent } from './hall-list/hall-list.component';
import { HallPreviewComponent } from './hall-preview/hall-preview.component';
const routes: Routes = [
  {
    path: '',
    component: HallListComponent,
  },
  {
    path: 'add',
    component: HallAddComponent,
  },
  {
    path: ':id',
    component: HallPreviewComponent,
  },
  {
    path: ':id/edit',
    component: HallEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HallRoutingModule {}
