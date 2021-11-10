import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetailforroute-eg',
  templateUrl: './userdetailforroute-eg.component.html',
  styleUrls: ['./userdetailforroute-eg.component.css']
})
export class UserdetailforrouteEgComponent implements OnInit {

  empObj:any = {};
  emps:any[] = [];
  // emps:any[] = [
  //   {empno: 1, ename : "Scott", job : "Manager", sal : 56000},
  //   {empno: 2, ename : "Smith", job : "Sr.Manager", sal : 65000},
  //   {empno: 3, ename : "Sandy", job : "Lead", sal : 45000},
  //   {empno: 4, ename : "Sam", job : "Group Manager", sal : 75000},
  // ];


  constructor(private activatedRoute: ActivatedRoute,private httpObj:HttpClient) { }

  ngOnInit(): void {
    
    let url:string  = "https://reqres.in/api/users";
    this.httpObj.get(url).subscribe( (result:any) => {
        console.log(result.data);
        this.emps = result.data;
        let eno = this.activatedRoute.snapshot.params["id"];
        console.log('eno',eno)
        this.empObj = this.emps.find(item => item.id == eno);
        console.log(this.empObj)
    });
   
    console.log(this.empObj)
  }
}
