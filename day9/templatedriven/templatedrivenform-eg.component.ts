import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform-eg',
  templateUrl: './templatedrivenform-eg.component.html',
  styleUrls: ['./templatedrivenform-eg.component.css']
})
export class TemplatedrivenformEgComponent implements OnInit {

  public  fname:string   = "";
	public  lname:string   = "";
	public  city:string   = "";
	public  email:string   = "";
	public  pincode:string   = "";
  constructor() { }

  ngOnInit(): void {
  }
  public register_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
  }

}
