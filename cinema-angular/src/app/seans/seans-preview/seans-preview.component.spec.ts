import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { SeansService } from 'src/app/service/seans/seans.service';

import { SeansPreviewComponent } from './seans-preview.component';

describe('SeansPreviewComponent', () => {
  let component: SeansPreviewComponent;
  let fixture: ComponentFixture<SeansPreviewComponent>;

  beforeEach(async () => {
    const seansService: jasmine.SpyObj<SeansService> = jasmine.createSpyObj(
      'SeansService',
      ['']
    );

    const navigate: jasmine.SpyObj<Router> = jasmine.createSpyObj('Router', []);
    const router: jasmine.SpyObj<ActivatedRoute> = jasmine.createSpyObj(
      'ActivatedRoute',
      ['navigateByUrl']
    );
    await TestBed.configureTestingModule({
      declarations: [SeansPreviewComponent],
      providers: [
        { provider: SeansService, useValue: seansService },
        { provider: ActivatedRoute, useValue: router },
        { provider: Router, useValue: navigate },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeansPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
