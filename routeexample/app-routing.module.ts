import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpDetailsPipeComponent } from './emp-details-pipe/emp-details-pipe.component';
import { ModeldrivenEgComponent } from './modeldriven-eg/modeldriven-eg.component';
import { UserdetailforrouteEgComponent } from './userdetailforroute-eg/userdetailforroute-eg.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'\product',component:ProductComponent},
  {path:'student',component:StudentComponent},
  {path:'emps',component:EmpDetailsPipeComponent},
  {path:'login',component:ModeldrivenEgComponent},
  { path :  "details/:id", component: UserdetailforrouteEgComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
