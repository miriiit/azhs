import { EnumTabsGroup } from '../../util/enum.tabs.group';
import * as TabActions from './../actions/tab-actions';

import { TabModel } from './../models/tab-model';
import { NavState } from '..';

export type Action = TabActions.All;

const defaultState: NavState = {
    navs:  new Map<EnumTabsGroup, TabModel[]>()
}

const TabSwitch = (state:NavState = defaultState, newData:TabModel) => {
    let nav  = state.navs.get(newData.groupId);
    let temMap = new Map<EnumTabsGroup, TabModel[]>();
    let newArr = [newData];
   
    if(nav){
        let arr = state.navs.get(newData.groupId);
        if(arr != null && arr.length){
            arr.forEach((elem: TabModel) =>{
                if(elem.tabTitle !== newData.tabTitle){
                    let obj = Object.assign({}, elem, {status:false})
                    newArr.push(obj);
                }
            });
        }
    }
    temMap.set( newData.groupId, newArr);
    let retState = {...state.navs, navs:temMap};
    return retState;
}

export function TabReducer(state: NavState = defaultState, action: Action): NavState  {
    switch(action.type) {
        case TabActions.TAB_SWITCH:
            let newState =  TabSwitch(state, action.payload);
            return newState;
        break;
    }
}