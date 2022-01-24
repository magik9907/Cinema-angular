import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Film } from 'src/Models/Film';
@Injectable({
  providedIn: 'root',
})
export class FilmService {
  readonly url: string = '/api/film';

  constructor(private httpClient: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.httpClient
      .get<Film[]>(this.url)
      .pipe(map((x: Film[]) => x.map((x: Film) => new Film(x))));
  }

  addFilm(film: Film) {
    return this.httpClient
      .post<Film>(this.url, film)
      .pipe(map((x: Film) => new Film(x)));
  }

  editFilm(film: Film) {
    return this.httpClient
      .put<Film>(`${this.url}/${film.Id}`, film)
      .pipe(map((x: Film) => new Film(x)));
  }

  getFilm(id: string): Observable<Film> {
    return this.httpClient
      .get<Film>(`${this.url}/${id}`)
      .pipe(map((x: Film) => new Film(x)));
  }

  deleteFilm(id: string) {
    return this.httpClient
      .delete<Film>(`${this.url}/${id}`)
      .pipe(map((x: Film) => new Film(x)));
  }
}
