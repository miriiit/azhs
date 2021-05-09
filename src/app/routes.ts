import { Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { CustomCodeComponent } from './components/custom-code/custom-code.component';
import { EnumTabsGroup } from './util/enum.tabs.group';

export const routes: Routes = [
    { path: 'employees', component: EmployeesComponent },
    { path:'code', component:CustomCodeComponent,
      children:[
        { path: 'first', component: FirstComponent},
        { path: 'second', component: SecondComponent, tabGroupId: EnumTabsGroup.TabsCodeManagement }
        ]
    }
];