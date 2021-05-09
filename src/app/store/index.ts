import { TabReducer } from './reducers/tab-reducer';
import { ActionReducerMap } from '@ngrx/store';
import { TabModel } from './models/tab-model';
import { EnumTabsGroup } from '../util/enum.tabs.group';


export const rootReducer = {};

export interface NavState {
    navs: Map<EnumTabsGroup, TabModel[]>;
};

export interface AppState{
    navState: NavState
}

export const reducers: ActionReducerMap<AppState, any> = {
    navState: TabReducer
};