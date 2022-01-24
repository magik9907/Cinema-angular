import { Seans } from './Seans';

export class SeansList {
  private _id: string;
  private seans: Seans[];
  constructor(data?: SeansList) {
    this._id = data?._id as string;
    this.seans = data?.seans.map((x: Seans) => new Seans(x)) || [];
  }

  get Id(): string {
    return this._id as string;
  }

  get Seanses(): Seans[] {
    return this.seans;
  }
}
