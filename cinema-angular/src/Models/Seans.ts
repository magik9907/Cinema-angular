import { DateTime } from './DateTime';
import { Film } from './Film';
import { Hall } from './Hall';

export class Seans {
  private _id?: string;
  private hall: Hall = new Hall();
  private film: Film = new Film();
  private date: DateTime = new DateTime();
  private endDate: DateTime = new DateTime();
  private ticketPrice: number = 0.0;
  private isDelete?: boolean;

  constructor(data?: Seans) {
    if (data) {
      this._id = data._id;
      this.hall = new Hall(data.hall);
      this.film = new Film(data.film);
      this.date = new DateTime(data.date);
      this.endDate = new DateTime(data.endDate);
      this.ticketPrice = data.ticketPrice;
      this.isDelete = data.isDelete;
    }
  }
  setDates({
    startDate,
    endDate,
    startTime,
    endTime,
  }: {
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
  }) {
    this.date.Date = startDate;
    this.date.Time = startTime;
    this.endDate.Date = endDate;
    this.endDate.Time = endTime;
  }

  get Id(): string {
    return this._id as string;
  }

  get Hall(): Hall {
    return this.hall;
  }

  get Film(): Film {
    return this.film;
  }

  get Date(): DateTime {
    return this.date;
  }

  get EndDate(): DateTime {
    return this.endDate;
  }

  get Price(): number {
    return this.ticketPrice;
  }

  set Id(value: string) {
    this._id = value;
  }

  set Hall(value: Hall) {
    this.hall = value;
  }

  set Film(value: Film) {
    this.film = value;
  }

  set Date(value: DateTime) {
    this.date = value;
  }

  set EndDate(value: DateTime) {
    this.endDate = value;
  }

  set Price(price: number) {
    this.ticketPrice = price;
  }
}
