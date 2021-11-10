import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldriven-eg',
  templateUrl: './modeldriven-eg.component.html',
  styleUrls: ['./modeldriven-eg.component.css']
})
export class ModeldrivenEgComponent implements OnInit {
  departments: any = ['sd', 'hr', 'dv', 'dp']
  customerForm : FormGroup = new FormGroup({
    fname :  new FormControl('', Validators.required),
    lname :  new FormControl('', Validators.required),
    city :  new FormControl('',  [Validators.minLength(3), Validators.maxLength(10)]),
    email :  new FormControl('', Validators.email),
    pincode :  new FormControl('', Validators.pattern("\\d{6}")),
    checkbx :  new FormControl('', Validators.requiredTrue),
    dept_drop:new FormControl('', Validators.required)

  });


  result:string  = "";

  constructor() { }

  ngOnInit(): void {
  }
  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
      console.log(this.customerForm.value);
      this.result = this.customerForm.value;
  }

}
