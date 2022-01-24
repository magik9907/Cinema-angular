import { Seans } from './Seans';
import { Discount } from './Discount';

export class Ticket {
  name: string = '';
  surname: string = '';
  discount: Discount = new Discount();
  seans: Seans = new Seans();
  seatNo: number = 0;
  isDelete?: boolean = false;
}
