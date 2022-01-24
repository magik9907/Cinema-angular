import { HttpClient } from '@angular/common/http';
import { SeansService } from 'src/app/service/seans/seans.service';
import { Seans } from 'src/Models/Seans';
import { SeansDateValidatorDirective } from './seans-date-validator.directive';

describe('SeansDateValidatorDirective', () => {
  let directive: SeansDateValidatorDirective;
  let testSeans = new Seans();
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    testSeans = new Seans();
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'post',
      'get',
      'delete',
      'put',
    ]);

    directive = new SeansDateValidatorDirective(
      new SeansService(httpClientSpy)
    );
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
