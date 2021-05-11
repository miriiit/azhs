import { EnumComp, EnumTabsGroup } from '../../util/intdex';
import * as Actions from './../actions/comp-actions';

import { CompState } from '..';
import { CompModel } from '../models/comp-model';
import { TabModel } from '../models/tab-model';

export type Action = Actions.All;

const defaultState: CompState = {
    components:  new Map<EnumComp, CompModel>()
}

const setActive = (state:CompState = defaultState, newData:any) => {
    let comp    = state.components.get(newData.id);
    let temMap  = new Map<EnumComp, CompModel>();
    let tab     = newData.nav;
    
    let newNav = new Set<TabModel>();

    if(comp){
        let nav = comp.nav;
        if(nav != null){
            let isExist = false;
            nav.forEach((elem: TabModel) => {
                if(elem.groupId == tab.groupId){
                    if(elem.tabTitle !== tab.tabTitle){
                        let obj = Object.assign({}, elem, {status:false})
                        newNav.add(obj);
                    }else { // same root exist if
                        isExist = true;
                    }
                }
            });
           newNav.add(tab);
        }
    }
    //new Array added in newData by refrence
    
    let obj = Object.assign({}, newData, {nav:newNav});
    temMap.set(newData.id, obj);

    let retState = {...state.components, components:temMap};
    return retState;
}

export function CompReducer(state: CompState = defaultState, action: Action): CompState  {
    switch(action.type) {
        case Actions.SET_ACTIVE:
            let newState =  setActive(state, action.payload);
            return newState;
        break;
    }
}