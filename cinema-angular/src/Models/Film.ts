export class Film {
  private _id?: string;
  private title: string = '';
  private length: number = 0;
  private director?: string;
  constructor(data?: Film) {
    if (data) {
      this._id = data._id;
      this.director = data.director;
      this.length = data.length;
      this.title = data.title;
    }
  }
  get Id(): string {
    return this._id as string;
  }
  set Id(value: string) {
    this._id = value;
  }
  get Title(): string {
    return this.title as string;
  }
  set Title(value: string) {
    this.title = value;
  }
  get Length(): number {
    return this.length as number;
  }
  set Length(value: number) {
    this.length = value;
  }
  get Director(): string {
    return this.director as string;
  }
  set Director(value: string) {
    this.director = value;
  }
}
