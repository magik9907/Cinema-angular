import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmRoutingModule } from './film-routing.module';
import { FilmEditComponent } from './film-edit/film-edit.component';
import { FilmAddComponent } from './film-add/film-add.component';
import { FilmEditorComponent } from './film-editor/film-editor.component';
import { FilmPreviewComponent } from './film-preview/film-preview.component';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedModule } from 'src/shared/shared.module';
@NgModule({
  declarations: [
    FilmListComponent,
    FilmEditComponent,
    FilmAddComponent,
    FilmEditorComponent,
    FilmPreviewComponent,
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    CardModule,
    InputTextModule,
    FormsModule,
    SharedModule,
    InputNumberModule,
    ChartModule,
    CalendarModule,
    ButtonModule,
  ],
})
export class FilmModule {}
