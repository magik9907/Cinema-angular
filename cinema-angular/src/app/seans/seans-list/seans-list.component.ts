import { Component, OnInit } from '@angular/core';
import { SeansService } from 'src/app/service/seans/seans.service';
import { StoreService } from 'src/app/service/store.service';
import { Seans } from 'src/Models/Seans';
import { SeansList } from 'src/Models/SeansList';

@Component({
  selector: 'app-seans-list',
  templateUrl: './seans-list.component.html',
  styleUrls: ['./seans-list.component.scss'],
})
export class SeansListComponent implements OnInit {
  date!: Date;
  seanses: SeansList[] = [];
  constructor(
    private seansService: SeansService,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.date = this.store.Date;
    this.seansService.getSeanses(this.Date).subscribe({
      error: (e) => {
        console.error(e);
      },
      next: (e: SeansList[]) => {
        this.seanses = e;
      },
    });
  }

  changeDate(event: Date) {
    this.store.Date = event;
    this.date = event;
    this.seansService.getSeanses(this.Date).subscribe({
      error: (e) => {
        console.error(e);
      },
      next: (e: SeansList[]) => {
        this.seanses = e;
      },
    });
  }

  get Date(): Date {

    return this.date;
  }

  get Now(): boolean {
    return this.store.Now;
  }

  set Now(v: boolean) {
    this.store.Now = v;
    this.date = this.store.Date;
    this.seansService.getSeanses(this.Date).subscribe({
      error: (e) => {
        console.error(e);
      },
      next: (e: SeansList[]) => {
        this.seanses = e;
      },
    });
  }
}
