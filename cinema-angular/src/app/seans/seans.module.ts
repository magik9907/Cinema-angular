import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeansListComponent } from './seans-list/seans-list.component';
import { SeansPreviewComponent } from './seans-preview/seans-preview.component';
import { SeansAddComponent } from './seans-add/seans-add.component';
import { SeansEditComponent } from './seans-edit/seans-edit.component';
import { SeansEditorComponent } from './seans-editor/seans-editor.component';
import { SeansRoutingModule } from './seans-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SeansDateValidatorDirective } from './directive/seans-date-validator.directive';
import { TicketsModule } from '../tickets/tickets.module';
import { SharedModule } from 'src/shared/shared.module';
import { CheckboxModule } from 'primeng/checkbox';
import { DisableDirective } from './directive/disable.directive';
@NgModule({
  declarations: [
    SeansListComponent,
    SeansPreviewComponent,
    SeansAddComponent,
    SeansEditComponent,
    SeansEditorComponent,
    SeansDateValidatorDirective,
    DisableDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SeansRoutingModule,
    TicketsModule,
    TableModule,
    CheckboxModule,
    CardModule,
    ScrollingModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    InputNumberModule,
  ],
})
export class SeansModule {}
