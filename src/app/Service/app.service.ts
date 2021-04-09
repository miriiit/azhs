import {
    Injectable,
    ComponentFactoryResolver,
    ViewContainerRef
  } from '@angular/core';
  import { from } from 'rxjs';
  import { map, tap } from 'rxjs/operators';
import { Employee } from '../models/employee';
  
  export interface ComponentLoader {
    loadChildren: () => Promise<any>;
    data: any;
    cb:any;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class AppService {
    constructor(private cfr: ComponentFactoryResolver) {}
  
    forChild(vcr: ViewContainerRef, cl: ComponentLoader) {
      console.log(cl.loadChildren);
      return from(cl.loadChildren()).pipe(
        map((component: any) => this.cfr.resolveComponentFactory(component)),
        tap(componentFactory => {
          const componentRef = vcr.createComponent(componentFactory);
          (<any>componentRef.instance).employee = cl.data;
          (<any>componentRef.instance).action.subscribe((res: any) => {
            cl.cb(res);
          });
          //console.log("Dynamic component created!");
        })
      );
    }
  }