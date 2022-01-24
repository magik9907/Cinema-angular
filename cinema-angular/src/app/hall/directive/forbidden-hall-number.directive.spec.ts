import { HttpClient } from '@angular/common/http';
import { HallService } from 'src/app/service/hall/hall.service';
import { Hall } from 'src/Models/Hall';
import { ForbiddenHallNumberDirective } from './forbidden-hall-Number.directive';

describe('ForbiddenHallNumberDirective', () => {
  let httpClientSpy: any;
  let testHall = new Hall();
  let directive:ForbiddenHallNumberDirective;
  beforeEach(() => {
    testHall = new Hall();
    testHall.Capacity = 5;
    testHall.Id = '1';
    testHall.Number = 1;
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'post',
      'get',
      'delete',
      'put',
    ]);

    httpClientSpy.post.and.returnValue({
      status: 200,
      data: [Object.assign({}, testHall)],
    });
    httpClientSpy.get.and.returnValue({
      status: 200,
      data: Object.assign({}, testHall),
    });
    httpClientSpy.delete.and.returnValue({
      status: 200,
      data: Object.assign({}, testHall),
    });
    httpClientSpy.put.and.returnValue({
      status: 200,
      data: Object.assign({}, testHall),
    });
    directive = new ForbiddenHallNumberDirective(
      new HallService(httpClientSpy)
    );
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
