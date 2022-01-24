import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeansAddComponent } from './seans-add.component';

describe('SeansAddComponent', () => {
  let component: SeansAddComponent;
  let fixture: ComponentFixture<SeansAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeansAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeansAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
