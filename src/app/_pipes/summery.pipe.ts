import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery'
})
export class SummeryPipe implements PipeTransform {
  transform(value: string, limit?: any): any {
    const actualLimit = (limit) ? limit : 90;
    return value.substr(0, actualLimit);
  }
}
