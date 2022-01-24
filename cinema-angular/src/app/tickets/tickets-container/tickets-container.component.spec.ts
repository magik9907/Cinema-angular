import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeansService } from 'src/app/service/seans/seans.service';
import { TicketService } from 'src/app/service/ticket/ticket.service';

import { TicketsContainerComponent } from './tickets-container.component';

describe('TicketsContainerComponent', () => {
  let component: TicketsContainerComponent;
  let fixture: ComponentFixture<TicketsContainerComponent>;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: TicketService;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TicketService(httpClientSpy);

    await TestBed.configureTestingModule({
      declarations: [TicketsContainerComponent],
      providers: [{ provide: TicketService, useValue: service }, HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
