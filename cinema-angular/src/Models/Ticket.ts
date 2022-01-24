import { Seans } from './Seans';

export class Ticket {
  private name: string = '';
  private surname: string = '';
  private seans: Seans = new Seans();
  private seatNo: number = 0;
  private isDelete?: boolean = false;

  constructor(data?: Ticket) {
    if (data) {
      this.name = data.name;
      this.surname = data.surname;
      this.seans = new Seans(data.seans);
      this.seatNo = data.seatNo;
      this.isDelete = data.isDelete;
    }
  }

  set Name(name: string) {
    this.name = name;
  }

  get Name(): string {
    return this.name;
  }
  set Surname(surname: string) {
    this.surname = surname;
  }

  get Surname(): string {
    return this.surname;
  }
  set Seans(seans: Seans) {
    this.seans = seans;
  }

  get Seans(): Seans {
    return this.seans;
  }
  set SeatNo(seatNo: number) {
    this.seatNo = seatNo;
  }

  get SeatNo(): number {
    return this.seatNo;
  }
}
