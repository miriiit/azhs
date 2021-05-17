import { Action } from '@ngrx/store';
import { Employee } from 'src/app/models/employee';
import { CompModel } from '../models/comp-model';


export const SET_ACTIVE = '[CompModel] SetActive';
export const SAVE_EMPLOYEE = '[CompModel] SaveEmployee';

export class SetActive implements Action {
 readonly type = SET_ACTIVE;
 constructor(public payload: CompModel) { }
}

export class SaveEmployee implements Action {
 readonly type = SAVE_EMPLOYEE;
 constructor(public payload: any) { }
}

export type  All = SetActive
| SaveEmployee;