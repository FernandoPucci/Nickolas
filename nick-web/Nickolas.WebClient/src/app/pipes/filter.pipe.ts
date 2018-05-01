import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterPipe implements PipeTransform {

  public transform(values: any[], field: string, filter: Object): any[] {

    return values.filter(v => v[field].toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1);
  }
}
