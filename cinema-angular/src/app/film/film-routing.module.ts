import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmAddComponent } from './film-add/film-add.component';
import { FilmEditComponent } from './film-edit/film-edit.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmPreviewComponent } from './film-preview/film-preview.component';

const routes: Routes = [
  {
    path: '',
    component: FilmListComponent,
  },
  {
    path: 'add',
    component: FilmAddComponent,
  },
  {
    path: ':id/edit',
    component: FilmEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmRoutingModule {}
