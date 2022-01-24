import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilmService } from 'src/app/service/film/film.service';
import { SeansService } from 'src/app/service/seans/seans.service';
import { Popular } from 'src/Models/Popular';

@Component({
  selector: 'app-film-preview',
  templateUrl: './film-preview.component.html',
  styleUrls: ['./film-preview.component.scss'],
  providers: [DatePipe],
})
export class FilmPreviewComponent implements OnInit {
  @Input() id!: string;
  basicData?: any;
  basicOptions: any;
  dateRange = '';
  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  constructor(
    private seansService: SeansService,
    private datepipe: DatePipe,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: 'white',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: 'white',
          },
          grid: {
            color: 'white',
          },
        },
        y: {
          ticks: {
            color: 'white',
          },
          grid: {
            color: 'white',
          },
        },
      },
    };
    this.fetchData();
  }

  changeDate(date: any) {
    const start:string|null = this.datepipe.transform(date[0], 'yyyy-MM-dd');
    const end:string|null = this.datepipe.transform(date[1], 'yyyy-MM-dd');
    this.fetchData(start, end);
  }

  fetchData(start?: string | null, end?: string | null) {
    this.seansService.getPopularity(this.id, start, end).subscribe(
      (res: Popular[]) => {
        const labels: string[] = [];
        const data: number[] = [];
        res.forEach((x: Popular) => {
          labels.push(x._id);
          data.push(x.count);
        });
        if (data.length === 1) {
          labels.push(res[0]._id);
          data.push(res[0].count);
        }

        this.basicData = {
          labels,
          datasets: [
            {
              label: 'Popularność',
              data,
              fill: false,
              borderColor: '#42A5F5',
              tension: 0.4,
            },
          ],
        };
      },
      (err) => {
        console.error(err);
      }
    );
  }

  delete() {
    this.filmService.deleteFilm(this.id).subscribe(
      (res) => {
        this.onDelete.emit(this.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
