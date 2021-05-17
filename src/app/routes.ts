import { Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';

import { CustomCodeComponent } from './components/custom-code/custom-code.component';
import { EnumTabsGroup } from './util/intdex';
import { ProvidersComponent } from './components/providers/providers.component';

import { ChildAComponent as codeChildA } from './components/custom-code/child-a/child-a.component';
import { ChildBComponent as codeChildB } from './components/custom-code/child-b/child-b.component';

export const routes: Routes = [
    { path: 'employees', component: EmployeesComponent },
    { path:'code', component: CustomCodeComponent,
      children:[
        { path: 'child-a', component: codeChildA},
        { path: 'child-b', component: codeChildB, groupId: EnumTabsGroup.TabsCodeManagement }
        ]
    },
    { path:'provider', component:ProvidersComponent,
     /* children:[
        { path: 'child-a', component: ChildAComponent},
        { path: 'child-b', component: ChildBComponent, groupId: EnumTabsGroup.TabsCodeManagement }
        ]*/
    }
];