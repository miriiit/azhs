import { EnumTabsGroup } from './../../util/enum.tabs.group';
import { Route } from '@angular/compiler/src/core';
export interface TabModel {
    groupId: EnumTabsGroup.TabsCodeManagement;
    tabIndex: string;
    tabTitle: string;
    tabId: string;
    tabRoute: string;
    status: boolean;
}
