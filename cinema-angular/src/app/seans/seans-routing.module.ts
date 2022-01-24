import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeansAddComponent } from './seans-add/seans-add.component';
import { SeansEditComponent } from './seans-edit/seans-edit.component';
import { SeansListComponent } from './seans-list/seans-list.component';
import { SeansPreviewComponent } from './seans-preview/seans-preview.component';
const routes: Routes = [
  {
    path: '',
    component: SeansListComponent,
  },
  {
    path: 'add',
    component: SeansAddComponent,
  },
  {
    path: ':id',
    component: SeansPreviewComponent,
  },
  {
    path: ':id/edit',
    component: SeansEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeansRoutingModule {}
