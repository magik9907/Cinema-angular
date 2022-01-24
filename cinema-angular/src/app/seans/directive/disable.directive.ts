import { Directive, ElementRef } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';

@Directive({
  selector: '[appDisable]',
})
export class DisableDirective {
  constructor(private ref: ElementRef, private store: StoreService) {
    ref.nativeElement.disabled = this.store.Now;

    this.store.NowSubject.subscribe((x) => {
      ref.nativeElement.disabled = x;
    });
  }
}
