import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/film' },
  {
    path: 'film',
    loadChildren: () => import('./film/film.module').then((m) => m.FilmModule),
  },
  {
    path: 'hall',
    loadChildren: () => import('./hall/hall.module').then((m) => m.HallModule),
  },
  {
    path: 'seans',
    loadChildren: () => import('./seans/seans.module').then((m) => m.SeansModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
