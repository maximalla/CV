import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateColor',
})
export class RateColorPipe implements PipeTransform {
  transform(rate: number): string {
    if (rate < 5) return '<span color="red">rate</span>';
    else if (rate < 7.5) return '<span color="orange">rate</span>';
    else {
      return '<span color="green">rate</span>';
    }
  }
}
