import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

   
  transform(input:number): number[] {
    let output:number[] = [];

  if( input==1 )  output= Array.from(Array(1).keys())  
  if( input==2 )  output =Array.from(Array(2).keys()) 
  if( input==3 )  output =Array.from(Array(3).keys()) 
  if( input==4 )  output =Array.from(Array(4).keys()) 
  if( input==5 )  output =Array.from(Array(5).keys()) 
    return output
}


}
