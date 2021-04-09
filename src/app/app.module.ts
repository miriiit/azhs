import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './Service/employee.service';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeComponentEdit } from './components/employee/employee.component.edit';
import { EmployeeActionService } from './Service/employee-action.service';
import { AppService } from './Service/app.service';
import { EmployeeDirective } from './directive/employee.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    EmployeeDirective,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeComponentEdit
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ EmployeeService, EmployeeActionService, AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
