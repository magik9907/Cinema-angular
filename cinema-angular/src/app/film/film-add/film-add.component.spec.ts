import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FilmService } from 'src/app/service/film/film.service';
import { Film } from 'src/Models/Film';

import { FilmAddComponent } from './film-add.component';

describe('FilmAddComponent', () => {
  let component: FilmAddComponent;
  let fixture: ComponentFixture<FilmAddComponent>;

  beforeEach(async () => {
    const service: jasmine.SpyObj<FilmService> = jasmine.createSpyObj(
      'FilmService',
      ['getFilms']
    );
    const router: jasmine.SpyObj<Router> = jasmine.createSpyObj('Router', [
      'navigateByUrl',
    ]);

    let getFilms = service.getFilms.and.returnValue(of([new Film()]));

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FilmAddComponent],
      providers: [
        { provide: FilmService, useValue: service },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(FilmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
