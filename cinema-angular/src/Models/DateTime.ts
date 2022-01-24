export class DateTime {
  private time: string = '';
  private date: string = '';

  constructor(data?: DateTime) {
    if (data) {
      this.time = data.time;
      this.date = data.date;
    }
  }

  set Time(time: string) {
    this.time = time;
  }

  get Time() {
    return this.time;
  }

  set Date(date: string) {
    this.date = date;
  }

  get Date() {
    return this.date;
  }
}
