import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsContainerComponent } from './tickets-container/tickets-container.component';
import { TicketsPurchaseComponent } from './tickets-purchase/tickets-purchase.component';

import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TicketsContainerComponent, TicketsPurchaseComponent],
  imports: [
    CommonModule,
    PickListModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [TicketsContainerComponent],
})
export class TicketsModule {}
