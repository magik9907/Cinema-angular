import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { HallService } from 'src/app/service/hall/hall.service';
import { Hall } from 'src/Models/Hall';

@Directive({
  selector: '[appForbiddenHallNumber]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ForbiddenHallNumberDirective,
      multi: true,
    },
  ],
})
export class ForbiddenHallNumberDirective implements AsyncValidator {
  @Input() appForbiddenHallNumber?: Hall;
  constructor(private hallService: HallService) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.hallService.getHallsByNumber(control.value).pipe(
      map((halls) => {
        return halls.length === 0 ||
          halls.some((x: Hall) => x.Id === this.appForbiddenHallNumber?.Id)
          ? null
          : { hallNumberError: 'Hall number exist' };
      }),
      catchError(() => of({ requestError: 'Server error' }))
    );
  }
}
