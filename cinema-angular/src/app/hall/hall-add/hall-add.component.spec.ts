import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallAddComponent } from './hall-add.component';

describe('HallAddComponent', () => {
  let component: HallAddComponent;
  let fixture: ComponentFixture<HallAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
