import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeansEditorComponent } from './seans-editor.component';

describe('SeansEditorComponent', () => {
  let component: SeansEditorComponent;
  let fixture: ComponentFixture<SeansEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeansEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeansEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
