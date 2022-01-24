import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsPurchaseComponent } from './tickets-purchase.component';

describe('TicketsPurchaseComponent', () => {
  let component: TicketsPurchaseComponent;
  let fixture: ComponentFixture<TicketsPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
