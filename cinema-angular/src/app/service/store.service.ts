import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private nowSubject: Subject<boolean> = new Subject();
  private now: boolean = true;
  private date: Date = new Date();
  constructor() {}

  get NowSubject(): Subject<boolean> {
    return this.nowSubject;
  }

  get Now(): boolean {
    return this.now;
  }

  set Now(isNow: boolean) {
    if (isNow) this.date = new Date();
    this.now = isNow;

    this.nowSubject.next(this.now);
  }

  get Date(): Date {
    if (this.now) this.date = new Date();
    return this.date;
  }

  set Date(date: Date) {
    this.Now = false;
    this.date = date;
    this.nowSubject.next(this.now);
  }
}
