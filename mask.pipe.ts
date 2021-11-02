import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(input:string): string {
    let output:string="";
    let a1= input.substring(0,3)
    let a2= input.substring(3,6)
    let a3= input.substring(6,9)
    a2=a2.replace(/[0-9]/g, "*");
    output=a1+a2+a3;

    return output;
  }

}
