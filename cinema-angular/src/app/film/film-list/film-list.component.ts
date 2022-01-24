import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film/film.service';
import { Film } from 'src/Models/Film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
})
export class FilmListComponent implements OnInit {
  films?: Film[];
  selectedId: string | null = null;
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(
      (res: Film[]) => {
        console.log(res);
        this.films = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  showDetails(id: string) {
    this.selectedId = id;
  }

  onDelete(id: string) {
    this.films = this.films?.filter((x: Film) => x.Id != id);
  }
}
