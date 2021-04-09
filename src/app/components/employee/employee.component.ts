import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EnumModalAction } from 'src/app/models/enum-modal-action';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  public editAction: EnumModalAction = EnumModalAction.edit;
  public deleteAction: EnumModalAction = EnumModalAction.remove;

  @Input() employee?: Employee; 
  @Output() modalAction = new EventEmitter<Employee>();
  constructor() {
  }

  ngOnInit(): void {
  }

  public onOpenModal(mode: EnumModalAction): void {
    let snapshot: any = {
      "employee": this.employee, 
      "mode": mode
    }
    this.modalAction.emit(snapshot);
  }

  public sonOpenModal(mode: EnumModalAction): void {
    const container = document.getElementById("employee-section");
    const button = document.createElement('button');
    button.type= 'button';
    //button.style.display = 'none';
    button.innerText = "popup";
    button.setAttribute('data-toggle', 'modal');
    
    switch(mode){
      case EnumModalAction.add:
        button.setAttribute('data-target', '#modal-employee-add');
        break;
      case EnumModalAction.edit:
        button.setAttribute('data-target', '#modal-employee-edit');
        break;
      case EnumModalAction.remove:
        button.setAttribute('data-target', '#modal-employee-remove');
        break;
    }
    container?.appendChild(button);
    button.click(); 
    
  }

}
