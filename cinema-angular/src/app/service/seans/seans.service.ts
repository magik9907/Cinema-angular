import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seans } from 'src/Models/Seans';
import { Popular } from 'src/Models/Popular';
import { SeansList } from 'src/Models/SeansList';
import { DatePipe } from '@angular/common';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeansService {
  private datePipe = new DatePipe('en-US');
  private readonly url: string = '/api/seans';

  constructor(private httpClient: HttpClient) {}

  getSeanses(date: Date): Observable<SeansList[]> {
    const fullYear = date.getFullYear();
    const minutes = date.getMinutes();
    const hour = date.getHours();
    const month = date.getMonth() + 1;
    const days = date.getDate();
    let dateString = `${fullYear}-${month < 10 ? `0${month}` : month}-${
      days < 10 ? `0${days}` : days
    }`;
    let time = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;

    return this.httpClient
      .get<SeansList[]>(`${this.url}?date=${dateString}&time=${time}`)
      .pipe(
        map((res: SeansList[]) => res.map((x: SeansList) => new SeansList(x)))
      );
  }

  getSeans(id: string): Observable<Seans> {
    return this.httpClient
      .get<Seans>(`${this.url}/id?id=${id}`)
      .pipe(map((res: Seans) => new Seans(res)));
  }

  updateSeans(seans: Seans) {
    return this.httpClient
      .put<Seans>(`${this.url}/id?id=${seans.Id}`, seans)
      .pipe(map((res: Seans) => new Seans(res)));
  }

  deleteSeans(id: string) {
    return this.httpClient
      .delete<Seans>(`${this.url}/id?id=${id}`)
      .pipe(map((res: Seans) => new Seans(res)));
  }

  addSeans(seans: Seans) {
    return this.httpClient
      .post<Seans>(`${this.url}`, seans)
      .pipe(map((res: Seans) => new Seans(res)));
  }

  getPopularity(
    id: string,
    start?: string | null,
    end?: string | null
  ): Observable<Popular[]> {
    return this.httpClient.get<Popular[]>(
      `${this.url}/popular?id=${id}&start=${start || ''}&end=${end || ''}`
    );
  }

  getSeansInDateRange(date: Date, seans: Seans) :Observable<Seans[]>{
    const query: {
      startDate: string;
      startTime: string;
      endDate: string;
      endTime: string;
    } = this.convert(date, seans.Film?.Length as number);
    seans.setDates(query);
    return this.httpClient
      .get<Seans[]>(
        `${this.url}/date?startDate=${query.startDate}&startTime=${query.startTime}&endTime=${query.endTime}&endDate=${query.endDate}&id=${seans.Hall.Id}`
      )
      .pipe(map((res: Seans[]) => res.map((x: Seans) => new Seans(x))));
  }

  private convert(
    date: Date,
    length: number
  ): {
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
  } {
    const startDate: string = this.datePipe.transform(date, 'yyyy-MM-dd') || '';
    const startTime: string = this.datePipe.transform(date, 'HH:mm') || '';
    const eDate: Date = new Date(date);
    eDate.setMinutes(eDate.getMinutes() + length);
    const endDate: string = this.datePipe.transform(eDate, 'yyyy-MM-dd') || '';
    const endTime: string = this.datePipe.transform(eDate, 'HH:mm') || '';

    return { startDate, startTime, endDate, endTime };
  }
}
