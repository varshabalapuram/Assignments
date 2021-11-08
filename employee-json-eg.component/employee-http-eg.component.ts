import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-http-eg',
  templateUrl: './employee-http-eg.component.html',
  styleUrls: ['./employee-http-eg.component.css']
})
export class EmployeeHttpEgComponent implements OnInit {
  userArray:any[]=[];
  url:string  = "http://localhost:3000/data";
  emp_id: number  = 0;
  ename  :string  = "";
  age  :number  = 0;
  esal:number=0;
  dept_no:number=0;
  isDisabled :boolean = false;

  constructor(private httpObj:HttpClient) { }

  ngOnInit(): void {
  }
  getemps_click()
  {
    this.httpObj.get<any[]>(this.url).subscribe( (response:any[]) =>{
      this.userArray = response;
    });
  }
  addemp_click()
  {
    let empObj:emp = new emp();
    empObj.id = this.emp_id;
    empObj.employee_name = this.ename;
    empObj.employee_age = this.age;
    empObj.employee_salary = this.esal;
    empObj.dept_num = this.dept_no;


    this.httpObj.post<any>(this.url,  empObj).subscribe( (response:any) =>{
      console.log("New emp details are added to server.");
      alert("New emp details are added to server.");
      this.clearFields();
      this.getemps_click();  // to get all the updated results
    });
  }
 
  removeemp_click(dno:number)
  {
    this.httpObj.delete<any>(this.url + "/" + dno).subscribe( (response:any) =>{
      console.log("Requested emp details are deleted from  server.");
      alert("Requested emp details are deleted from  server.");
      this.getemps_click();  // to get all the updated results
      this.clearFields();

    });
  }


  selectemp_click(dno:number)
  {
    this.httpObj.get<any>(this.url + "/" + dno).subscribe( (response:any) =>{

      let empObj = response;
      this.emp_id =   empObj.id;
      this.ename =   empObj.employee_name;
      this.age 		=  empObj.employee_age;
      this.esal=empObj.employee_salary;
      this.dept_no=empObj.dept_num
      this.isDisabled = true;
    });

  }

  updateemp_click()
  {
    let empObj:emp = new emp();
    empObj.id = this.emp_id;
    empObj.employee_name = this.ename;
    empObj.employee_age = this.age;
    empObj.employee_salary = this.esal;
    empObj.dept_num = this.dept_no;


    this.httpObj.put<any>(this.url + "/" +  empObj.id,  empObj).subscribe( (response:any) =>{
      console.log("Requested emp details are updated to server.");
      alert("Requested emp details are updated to server.");
      this.clearFields();
      this.getemps_click();  // to get all the updated results
    });

  }

  clearFields()
  {
      this.isDisabled = false;
      this.emp_id = 0;
      this.ename  = "";
      this.age  = 0;
      this.dept_no=0;
      this.esal=0;
  }
}


class emp
{
  id:number=0;
  employee_name:string="";
  employee_salary:number=0;
  employee_age:number=0;
  dept_num:number=0;

 
}