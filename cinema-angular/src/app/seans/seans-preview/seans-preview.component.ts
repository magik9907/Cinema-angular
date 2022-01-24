import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SeansService } from 'src/app/service/seans/seans.service';
import { Seans } from 'src/Models/Seans';

@Component({
  selector: 'app-seans-preview',
  templateUrl: './seans-preview.component.html',
  styleUrls: ['./seans-preview.component.scss'],
})
export class SeansPreviewComponent implements OnInit {
  seans?: Seans;
  constructor(
    private seansService: SeansService,
    private router: ActivatedRoute,
    private navigate: Router
  ) {}

  ngOnInit(): void {
    const id: string = this.router.snapshot.paramMap.get('id') as string;
    this.seansService.getSeans(id).subscribe(
      (res: Seans) => {
        this.seans = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  delete() {
    this.seansService.deleteSeans(this.seans?.Id as string).subscribe(
      (res:Seans) => {
        this.navigate.navigateByUrl('/seans');
      },
      (err) => {
        console.error(err);
      }
    );
  }

  
  checkDate(): boolean {
    const now = new Date();
    const datePipe = new DatePipe('en');
    const date = datePipe.transform(now, 'yyyy-MM-dd');
    const time = datePipe.transform(now, 'HH:mm');
    if (!(date && time)) return false;
    return (
      (this.seans && this.seans.Date.Date > date ||
        (this.seans?.Date.Date == date && this.seans?.Date.Time > time)) &&
      !this.seans?.Hall.Deleted
    );
  }
}
