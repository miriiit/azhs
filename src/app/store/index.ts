
import { ActionReducerMap } from '@ngrx/store';
import { TabModel } from './models/tab-model';
import { EnumComp, EnumTabsGroup } from '../util/intdex';
import { CompModel } from './models/comp-model';
import { CompReducer } from './reducers/comp-reducer';


export const rootReducer = {};

export interface CompState {
    components:  Map<EnumComp, CompModel>;
}


export interface NavState {
    navs: Map<EnumTabsGroup, TabModel[]>;
};

export interface AppState{
    compState: CompState
}

export const reducers: ActionReducerMap<AppState, any> = {
    compState: CompReducer
};