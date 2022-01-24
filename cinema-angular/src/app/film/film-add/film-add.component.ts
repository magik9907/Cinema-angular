import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/service/film/film.service';
import { Film } from 'src/Models/Film';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.scss'],
})
export class FilmAddComponent implements OnInit {
  film: Film = new Film();
  constructor(private filmService: FilmService,private router:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.filmService.addFilm(this.film).subscribe(
      (res) =>{this.router.navigateByUrl('/film')},
      (err) => console.error(err)
    );
  }
}
