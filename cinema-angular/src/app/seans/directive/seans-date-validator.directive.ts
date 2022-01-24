import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { SeansService } from 'src/app/service/seans/seans.service';
import { Seans } from 'src/Models/Seans';

@Directive({
  selector: '[appSeansDateValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: SeansDateValidatorDirective,
      multi: true,
    },
  ],
})
export class SeansDateValidatorDirective implements AsyncValidator {
  @Input() appSeansDateValidator?: Seans;
  constructor(private seansService: SeansService) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    if (!this.appSeansDateValidator?.Film.Id)
      return of({ filmRequired: 'Film is required' });
    if (!this.appSeansDateValidator?.Hall.Id)
      return of({ HallRequired: 'Hall is required' });
    const val = new Date(control.value);
    return this.seansService
      .getSeansInDateRange(val, this.appSeansDateValidator)
      .pipe(
        map((seans: Seans[]) => {
          let i: number = seans.findIndex((s: Seans) => {
            const classSeans = new Seans(s);
            return classSeans.Id === this.appSeansDateValidator?.Id;
          });
          if (seans.length > 0 && i === -1)
            return {
              reservedError: 'Date and time is reserved for seans in that hall',
            };
          return null;
        }),
        catchError(() => of({ requestError: 'Server error' }))
      );
  }
}
