import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TicketService } from 'src/app/service/ticket/ticket.service';
import { Seans } from 'src/Models/Seans';
import { Ticket } from 'src/Models/Ticket';

@Component({
  selector: 'app-tickets-purchase',
  templateUrl: './tickets-purchase.component.html',
  styleUrls: ['./tickets-purchase.component.scss'],
})
export class TicketsPurchaseComponent implements OnInit {
  @Input() reserved!: Ticket[];
  @Input() seans!: Seans;
  toBuy: Ticket[] = [];
  available: Ticket[] = [];
  surname: string = '';
  name: string = '';
  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    for (let index = 1; index <= this.seans.Hall.Capacity; index++) {
      if (!this.reserved.find((x) => x.SeatNo == index)) {
        const t = new Ticket();
        t.SeatNo = index;
        this.available.push(t);
      }
    }
  }

  async submit(event: SubmitEvent, form: NgForm) {
    if (!form.valid || this.toBuy.length === 0) return;
    for (let a = 0; a < this.toBuy.length; a++) {
      const x = this.toBuy[a];
      x.Seans = this.seans;
      x.Name = this.name;
      x.Surname = this.surname;
      if (await this.ticketService.buyTicket(x)) {
        let i = this.available.findIndex((t: Ticket) => x.SeatNo === t.SeatNo);
        if (i > -1) {
          this.available.splice(i, 1);
        }
        this.toBuy.splice(a, 1);
        a--;
      }
    }
    this.toBuy = [...this.toBuy];
  }

  checkDate(): boolean {
    const now = new Date();
    const datePipe = new DatePipe('en');
    const date = datePipe.transform(now, 'yyyy-MM-dd');
    const time = datePipe.transform(now, 'HH:mm');
    if (!(date && time)) return false;
    return (
      (this.seans.Date.Date > date ||
        (this.seans.Date.Date == date && this.seans.Date.Time > time)) &&
      !this.seans.Hall.Deleted
    );
  }
}
