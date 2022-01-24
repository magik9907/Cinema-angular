import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FilmService } from 'src/app/service/film/film.service';
import { Film } from 'src/Models/Film';
import { ActivatedRouteStub } from 'testing/activated-route-stub';

import { FilmEditComponent } from './film-edit.component';

describe('FilmEditComponent', () => {
  let component: FilmEditComponent;
  let fixture: ComponentFixture<FilmEditComponent>;
  let activatedRoute: ActivatedRouteStub;
  beforeEach(async () => {
    activatedRoute = new ActivatedRouteStub();
    const service: jasmine.SpyObj<FilmService> = jasmine.createSpyObj(
      'FilmService',
      ['getFilms']
    );
    const router: jasmine.SpyObj<Router> = jasmine.createSpyObj('Router', [
      'navigateByUrl',
    ]);

    const navigate: jasmine.SpyObj<ActivatedRoute> = jasmine.createSpyObj(
      'ActivatedRoute',
      ['snapshot']
    );

    let getFilms = service.getFilms.and.returnValue(of([new Film()]));

    activatedRoute.setParamMap({ id: '1' });
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FilmEditComponent],
      providers: [
        { provide: FilmService, useValue: service },
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(FilmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
