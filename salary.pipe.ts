import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {
  
  transform(input:any[],max:number, min:number): any[] {
    let output:any[] = [];
    output=input.filter((item)=>(item.sal<=max && item.sal>=min))
    return output
  }

}
