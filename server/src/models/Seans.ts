import { DateTime } from './DateTime';
import { Film } from './film';
import { Hall } from './Hall';

export class Seans {
  hall: Hall = new Hall();
  film: Film = new Film();
  date: DateTime = new DateTime();
  endDate: DateTime = new DateTime();
  ticketPrice: Number = 0.0;
  isDelete?: boolean = false;

}
