import { Action } from '@ngrx/store';
import { CompModel } from '../models/comp-model';


export const SET_ACTIVE = '[CompModel] SetActive';

export class SetActive implements Action {
 readonly type = SET_ACTIVE;
 constructor(public payload: any) { }
}

export type  All = SetActive;