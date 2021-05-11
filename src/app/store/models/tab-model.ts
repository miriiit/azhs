import { EnumTabsGroup } from '../../util/intdex';
export interface TabModel {
    groupId: EnumTabsGroup;
    tabIndex: string;
    tabTitle: string;
    tabId: string;
    route: string;
    status: boolean;
}
