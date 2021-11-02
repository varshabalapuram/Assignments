import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyshadow]'
})
export class MyshadowDirective implements OnInit {
  @Input() appMyshadow:string='10px 5px 6px blue'
  constructor(private elem:ElementRef) {
    console.log("cons",this.appMyshadow)
    this.elem.nativeElement.style.boxShadow =this.appMyshadow; 
      
   }
   ngOnInit(){
     console.log("sadsa",this.appMyshadow)
        this.elem.nativeElement.style.boxShadow ='10px 5px 6px blue'; 

      this.elem.nativeElement.style.boxShadow =this.appMyshadow
   }

}
