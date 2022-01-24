import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  declarations: [DurationPipe],
  imports: [],
  exports: [DurationPipe],
})
export class SharedModule {}
