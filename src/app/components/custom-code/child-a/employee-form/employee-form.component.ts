import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { AppState } from 'src/app/store';
import { selectComponents } from 'src/app/store/selectors';
import { EnumComp } from 'src/app/util/intdex';
import * as Actions from '../../../../store/actions/comp-actions';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.sass']
})
export class EmployeeFormComponent implements AfterViewInit {
  
    employee: Employee = {
    id: "1",
    name: "N/A",
    email: "",
    jobTitle: "Software Engineer",
    phone: "0",
    imageUrl: "",
    code: "021"
  };

  subscription?: Subscription;

  constructor(private store: Store<AppState>) { 
   
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
    let compState  = this.store.select(selectComponents)
    if(compState)
    {
       this.subscription = compState.subscribe(state => {
        if (state) {
          let comp = state.get(EnumComp.CodeComp);
          //EnumTabsGroup.TabsCodeManagement
          if (comp) {
            this.employee = comp.formData;
          }
        }
      });
    }
    }, 10);
  }
  onSubmit(empForm: NgForm) {
    let json = empForm.value;

    this.employee = {
      id: "1",
      name: json.name,
      email: json.email,
      jobTitle: "Software Engineer",
      phone: json.phone,
      imageUrl: "",
      code: "021"
    }
    this.store.dispatch(new Actions.SaveEmployee({id:EnumComp.CodeComp, employee: this.employee}));
  }
  saveForm() {
    console.log(this.employee?.email);
  
  }

  ngOnDestory(){
    this.subscription?.unsubscribe();
  }

}
