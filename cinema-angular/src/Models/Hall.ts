export class Hall {
  private _id?: string;
  private capacity: number = 0;
  private number: number = 0;
  private isDelete: boolean = false;

  constructor(data?: Hall) {
    if (data) {
      this._id = data._id;
      this.capacity = data.capacity;
      this.number = data.number;
      this.isDelete = data.isDelete;
    }
  }

  get Capacity(): number {
    return this.capacity as number;
  }
  set Capacity(value: number) {
    this.capacity = value;
  }

  get Number(): number {
    return this.number as number;
  }
  set Number(value: number) {
    this.number = value;
  }

  get Id(): string {
    return this._id as string;
  }
  set Id(value: string) {
    this._id = value;
  }

  get Deleted(): boolean {
    return this.isDelete;
  }
}
