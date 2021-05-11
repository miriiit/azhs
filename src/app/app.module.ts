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
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { CustomCodeComponent } from './components/custom-code/custom-code.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/index';
import { environment } from 'src/environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProvidersComponent } from './components/providers/providers.component';
import { ChildAComponent } from './components/providers/child-a/child-a.component';
import { ChildBComponent } from './components/providers/child-b/child-b.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    EmployeeDirective,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeComponentEdit,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CustomCodeComponent,
    ProvidersComponent,
    ChildAComponent,
    ChildBComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [ EmployeeService, EmployeeActionService, AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
