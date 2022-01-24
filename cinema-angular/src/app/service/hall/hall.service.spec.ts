import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HallService } from './hall.service';

describe('HallService', () => {
  let service: HallService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HallService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
