import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAdmin'
})
export class FilterAdminPipe implements PipeTransform {

  transform(values: any[], field: string, filter: Object): any {
    if(values == null){
      return null;
    }else{
      return values.filter(v => v[field].toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1);
    }
  }
}
