import { Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee';
import { EnumModalAction } from '../models/enum-modal-action';
import { AppService } from './app.service';

@Injectable({ providedIn: 'root' })
export class EmployeeActionService {
  private mode?: EnumModalAction;

  constructor(private appService: AppService) { }

  private employeeEdit() {
    return () =>
      import('../components/employee/employee.component.edit').then(
        m => m.EmployeeComponentEdit
      );
  }

  edit() {
    this.mode = EnumModalAction.edit;
  }
  
  public loadComponent(vcr: ViewContainerRef, mode: EnumModalAction, employee: Employee, cb: any) {
    vcr.clear();
    switch (mode) {
      case EnumModalAction.edit:
         return this.appService.forChild(vcr, {
          loadChildren: this.employeeEdit(),
          data: employee,
          cb: cb
        });
        default:
          return this.appService.forChild(vcr, {
            loadChildren: this.employeeEdit(),
            data: employee,
            cb: cb
          });
        break;
    }

  }
}