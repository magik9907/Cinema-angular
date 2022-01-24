import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hall } from 'src/Models/Hall';

@Injectable({
  providedIn: 'root',
})
export class HallService {
  readonly url: string = '/api/hall';
  constructor(private httpClient: HttpClient) {}

  getHalls():Observable<Hall[]> {
    return this.httpClient
      .get<Hall[]>(this.url)
      .pipe(map((x: Hall[]) => x.map((x) => new Hall(x))));
  }

  getHall(id: string):Observable<Hall> {
    return this.httpClient
      .get<Hall>(`${this.url}/id/${id}`)
      .pipe(map((x) => new Hall(x)));
  }

  getHallsByNumber(number: number) :Observable<Hall[]>{
    return this.httpClient
      .get<Hall[]>(`${this.url}/number/${number}`)
      .pipe(map((x: Hall[]) => x.map((x) => new Hall(x))));
  }

  deleteHall(id: string) {
    return this.httpClient.delete<Hall>(`${this.url}/id/${id}`)
    .pipe(map((x) => new Hall(x)));
  }

  addHall(hall: Hall) {
    return this.httpClient
      .post<Hall>(this.url, hall)
      .pipe(map((x) => new Hall(x)));
  }

  updateHall(hall: Hall) {
    return this.httpClient
      .put<Hall>(`${this.url}/id/${hall.Id}`, hall)
      .pipe(map((x) => new Hall(x)));
  }
}
