import {Component, OnInit, ViewContainerRef, ViewChild} from '@angular/core';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../../models/employee';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { EmployeeDirective } from '../../directive/employee.directive';
import { EnumModalAction } from 'src/app/models/enum-modal-action';
import { EmployeeActionService } from 'src/app/Service/employee-action.service';

@Component({
    selector:'app-employees',
    templateUrl: './employees.component.html'
   // styleUrl: ['./css/employees.sass']

})

export class EmployeesComponent implements OnInit {
  employees: Employee[];
  @ViewChild(EmployeeDirective, {static : true}) adModal!: EmployeeDirective;

  constructor(private employeeService: EmployeeService, private modalActionService: EmployeeActionService) {
    this.employees = [];
  }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe((res: Employee[]) => {
      this.employees = res;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    )
  }

  openModal(obj: any){
    const viewContainerRef = this.adModal.viewContainerRef;
    console.log(obj.mode);
    this.modalActionService.loadComponent(viewContainerRef, obj.mode, obj.employee, this.actionCb).subscribe();
  }

  actionCb(employee: Employee) {
    console.log("Call backed")
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.employeeService.addEmployee(name, ""+this.employees.length +1)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee.id).subscribe();
  }

}