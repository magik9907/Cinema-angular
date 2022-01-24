import { Component, Input, OnInit } from '@angular/core';
import { TicketService } from 'src/app/service/ticket/ticket.service';
import { Seans } from 'src/Models/Seans';
import { Ticket } from 'src/Models/Ticket';

@Component({
  selector: 'app-tickets-container',
  templateUrl: './tickets-container.component.html',
  styleUrls: ['./tickets-container.component.scss'],
})
export class TicketsContainerComponent implements OnInit {
  @Input() seans!: Seans;
  tickets?: Ticket[];
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService
      .getTicketsForSeans(this.seans.Id)
      .subscribe((x: Ticket[]) => {
        this.tickets = x;
      });
  }

  getCapacity() {
    return this.seans.Hall.Capacity;
  }

  getOccuped() {
    return this.tickets?.length || 0;
  }

  getFree() {
    return this.getCapacity() - this.getOccuped();
  }
}
