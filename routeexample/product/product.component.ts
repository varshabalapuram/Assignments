import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  isdisabled:boolean=false;
  prod_id:number=0;
  prod_name:string="";
  prod_price:number=0;
  category:string=""
  qty:number=0;
  result:string=""
  products:product[]=[]
  constructor(private serviceObj:ProductDetailsService) { }

  ngOnInit(): void {
  }
  get_product(){
      this.products=this.serviceObj.get_products();
  }
  remove_product(pid:number){
      this.serviceObj.remove_products(pid)
          this.clearFields();
  }
  add_product(){
    if(this.prod_id!=0 && this.prod_name!="" && this.prod_price!=0 && this.category!="" && this.qty!=0)
    {
      this.products.push({pid:this.prod_id,pname:this.prod_name,price:this.prod_price,category:this.category,qty:this.qty})
      this.serviceObj.add_products(this.products)
      this.result=""

  }
    else{
        this.result="please enter all the product details"
    }

  }
  clearFields()
  {
      
      this.prod_id = 0;
      this.prod_name  = "";
      this.prod_price  = 0;
      this.category  = "";
      this.qty=0;

  }


}
class product{
    pid:number=0;
    pname:string="";
    price:number=0;
    category:string="";
    qty:number=0;

}