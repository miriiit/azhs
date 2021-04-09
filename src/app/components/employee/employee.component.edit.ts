import { Component, OnInit,  Input, Output, EventEmitter, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/employee';
@Component({
  selector: 'app-employee-edit',
  template: `<ng-template #content let-modal>
  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
    <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  Name : {{employee?.name}}
    <form>
      <div class="form-group">
        <label for="dateOfBirth"></label>
        <div class="input-group">
          <input id="dateOfBirth" class="form-control" placeholder="yyyy-mm-dd" name="dp">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary calendar" type="button"></button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)="actionHandler()">Save</button>
    <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Exit</button>
  </div>
</ng-template>`,
  //styleUrls: ['./employee.component.sass']
})
export class EmployeeComponentEdit implements AfterViewInit{

  @ViewChild('content') templateRef!: TemplateRef<any>;
  closeResult = '';
  modalRef!: NgbModal;

  @Input() employee!: Employee;
  @Output() action = new EventEmitter;
  constructor(private modalService: NgbModal) {}

  ngAfterViewInit() {
    this.open(this.templateRef);
  }

  actionHandler(){
    this.action.emit(this.employee);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}


