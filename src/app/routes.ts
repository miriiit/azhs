import { Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { CustomCodeComponent } from './components/custom-code/custom-code.component';
import { EnumTabsGroup } from './util/intdex';
import { ProvidersComponent } from './components/providers/providers.component';
import { ChildBComponent } from './components/providers/child-b/child-b.component';
import { ChildAComponent } from './components/providers/child-a/child-a.component';

export const routes: Routes = [
    { path: 'employees', component: EmployeesComponent },
    { path:'code', component: CustomCodeComponent,
      children:[
        { path: 'first', component: FirstComponent},
        { path: 'second', component: SecondComponent, groupId: EnumTabsGroup.TabsCodeManagement }
        ]
    },
    { path:'provider', component:ProvidersComponent,
      children:[
        { path: 'child-a', component: ChildAComponent},
        { path: 'child-b', component: ChildBComponent, groupId: EnumTabsGroup.TabsCodeManagement }
        ]
    }
];