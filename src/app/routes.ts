import { Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'app', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeesComponent }
];