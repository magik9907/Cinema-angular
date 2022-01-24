import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallEditorComponent } from './hall-editor.component';

describe('HallEditorComponent', () => {
  let component: HallEditorComponent;
  let fixture: ComponentFixture<HallEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
