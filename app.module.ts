import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpDetailsPipeComponent } from './emp-details-pipe/emp-details-pipe.component';
import { GradesPipe } from './grades.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { StarPipe } from './star.pipe';
import { SalaryPipe } from './salary.pipe';
import { MaskPipe } from './mask.pipe';
import { MyshadowDirective } from './myshadow.directive';
import { IsadminDirective } from './isadmin.directive';


@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    ProductComponent,
    StudentComponent,
    EmpDetailsComponent,
    EmployeeComponent,
    EmpDetailsPipeComponent,
    GradesPipe,
    CustomPipeComponent,
    StarPipe,
    SalaryPipe,
    MaskPipe,
    MyshadowDirective,
    IsadminDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
