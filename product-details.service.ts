import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  products:product[]=[
    {pid:1,pname:"product1",price:400,category:"c1",qty:1000},
    {pid:2,pname:"product2",price:300,category:"c2",qty:10002},
    {pid:3,pname:"product3",price:4400,category:"c3",qty:10020}
  ]
  constructor() { }
  get_products():product[]{
      return this.products;
  }
  add_products(data:product[]){
    this.products=data;
  }
  remove_products(pid:number){
    let index  =  this.products.findIndex(   item =>  item.pid == pid    );
    this.products.splice(index,  1);
   // this.clearFields();
  }
}
export class product{
  pid:number=0;
  pname:string="";
  price:number=0;
  category:string="";
  qty:number=0;

}

