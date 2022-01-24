import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/service/film/film.service';
import { Film } from 'src/Models/Film';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.scss'],
})
export class FilmEditComponent implements OnInit {
  film!: Film;
  constructor(
    private filmService: FilmService,
    private router: ActivatedRoute,
    private navigate: Router
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((pmap) => {
      let id = pmap.get('id');
      if (id)
        this.filmService.getFilm(id).subscribe((film: Film) => {
          this.film = film;
        });
    });
  }

  onSubmit() {
    this.filmService.editFilm(this.film).subscribe(
      (res: Film) => {
        this.navigate.navigateByUrl('/film');
      },
      (err) => console.error(err)
    );
  }
}
