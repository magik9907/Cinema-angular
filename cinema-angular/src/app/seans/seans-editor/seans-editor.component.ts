import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmService } from 'src/app/service/film/film.service';
import { HallService } from 'src/app/service/hall/hall.service';
import { DateTime } from 'src/Models/DateTime';
import { Film } from 'src/Models/Film';
import { Hall } from 'src/Models/Hall';
import { Seans } from 'src/Models/Seans';

@Component({
  selector: 'app-seans-editor',
  templateUrl: './seans-editor.component.html',
  styleUrls: ['./seans-editor.component.scss'],
})
export class SeansEditorComponent implements OnInit {
  @Input() seans?: Seans;
  @Output() seansChange: EventEmitter<Seans> = new EventEmitter();
  @Output() exec: EventEmitter<Seans> = new EventEmitter();
  dateModel: Date = new Date();
  readonly NOW: Date = new Date();
  halls: Hall[] = [];
  films: Film[] = [];

  seansModel!: Seans;
  constructor(
    private filmService: FilmService,
    private hallService: HallService
  ) {}

  ngOnInit(): void {
    if (this.seans) {
      this.seansModel = this.seans;
      this.dateModel = new Date(this.seans.Date.Date);
      const time: string[] = this.seans.Date.Time.split(':') || [];
      this.dateModel.setHours(Number.parseInt(time[0]));
      this.dateModel.setMinutes(Number.parseInt(time[1]));
    } else {
      this.seansModel = new Seans();
      this.seansChange.emit(this.seans);
    }

    this.filmService.getFilms().subscribe(
      (res: Film[]) => {
        this.films = res;
      },
      (err) => console.error(err)
    );
    this.hallService.getHalls().subscribe(
      (res: Hall[]) => {
        this.halls = res;
      },
      (err) => console.error(err)
    );
  }
  onSubmit(event: SubmitEvent, form: NgForm) {
    event.preventDefault();
    if (form.valid && this.seansModel.Film && this.seansModel.Hall)
      this.exec.emit(this.seansModel);
  }
}
