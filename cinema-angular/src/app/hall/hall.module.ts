import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallRoutingModule } from './hall-routing.module';
import { HallListComponent } from './hall-list/hall-list.component';
import { HallEditorComponent } from './hall-editor/hall-editor.component';
import { HallPreviewComponent } from './hall-preview/hall-preview.component';
import { HallEditComponent } from './hall-edit/hall-edit.component';
import { HallAddComponent } from './hall-add/hall-add.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ForbiddenHallNumberDirective } from './directive/forbidden-hall-Number.directive';

@NgModule({
  declarations: [
    HallListComponent,
    HallEditorComponent,
    HallPreviewComponent,
    HallEditComponent,
    HallAddComponent,
    ForbiddenHallNumberDirective,
  ],
  imports: [
    CommonModule,
    HallRoutingModule,
    CardModule,
    ButtonModule,
    FormsModule,
    InputNumberModule,
  ],
})
export class HallModule {}
