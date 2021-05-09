import { Action } from '@ngrx/store';
import { TabModel } from './../models/tab-model';

export const TAB_SWITCH = '[TabModel] ActiveRoute';

export class TabsActiveRoute implements Action {
 readonly type = TAB_SWITCH;
 constructor(public payload: TabModel) { }
}

export type  All = TabsActiveRoute;     