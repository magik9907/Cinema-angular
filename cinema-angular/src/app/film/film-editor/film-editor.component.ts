import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Film } from 'src/Models/Film';

@Component({
  selector: 'app-film-editor',
  templateUrl: './film-editor.component.html',
  styleUrls: ['./film-editor.component.scss'],
})
export class FilmEditorComponent implements OnInit {
  @Input() film?: Film;
  @Output() filmChange: EventEmitter<Film> = new EventEmitter();
  @Output() exec: EventEmitter<Film> = new EventEmitter();
  filmModel!: Film;
  constructor() {}

  ngOnInit(): void {
    if (this.film) this.filmModel = this.film;
    else {
      this.filmModel = new Film();
      this.filmChange.emit(this.filmModel);
    }
  }

  onSubmit(event: SubmitEvent, form: NgForm) {
    event.preventDefault();
    if (form.valid && this.filmModel.Length > 0) this.exec.emit();
  }
}
