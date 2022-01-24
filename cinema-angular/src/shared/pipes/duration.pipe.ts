import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) value = 0;
    let hours:number = Math.floor(value / 60);
    let minutes :number= value % 60;
    let string:string = '';
    if (hours)
      switch (hours) {
        case 1:
          string = '1 godzina ';
          break;
        case 2:
        case 3:
        case 4:
          string = `${hours} godziny `;
          break;
        default:
          string = `${hours} godzin `;
          break;
      }

    if (minutes)
      switch (minutes) {
        case 1:
          string += '1 minuta';
          break;
        case 2:
        case 3:
        case 4:
          string += `${minutes} minuty`;
          break;
        case 0:
        default:
          string += `${minutes} minut`;
          break;
      }
    return string;
  }
}
