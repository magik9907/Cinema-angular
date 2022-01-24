import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeansEditComponent } from './seans-edit.component';

describe('SeansEditComponent', () => {
  let component: SeansEditComponent;
  let fixture: ComponentFixture<SeansEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeansEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeansEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
