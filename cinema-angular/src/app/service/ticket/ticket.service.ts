import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, map, Observable } from 'rxjs';
import { Ticket } from 'src/Models/Ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private readonly url: string = '/api/ticket';
  constructor(private httpClient: HttpClient) {}

  getTicketsForSeans(id: string): Observable<Ticket[]> {
    return this.httpClient
      .get<Ticket[]>(`${this.url}/seans?seans=${id}`)
      .pipe(map((x: Ticket[]) => x.map((x: Ticket) => new Ticket(x))));
  }

  async buyTicket(ticket: Ticket): Promise<boolean> {
    try {
      const t = new Ticket(
        await lastValueFrom(this.httpClient.post<Ticket>(this.url, ticket))
      );
      return t instanceof Ticket;
    } catch (e) {
      return false;
    }
  }
}
