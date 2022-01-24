import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeansListComponent } from './seans-list.component';

describe('SeansListComponent', () => {
  let component: SeansListComponent;
  let fixture: ComponentFixture<SeansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeansListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
