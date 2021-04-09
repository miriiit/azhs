import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adModal]',
})
export class EmployeeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}