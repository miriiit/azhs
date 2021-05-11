import { EnumComp, EnumTabsGroup } from '../../util/intdex';
import { TabModel } from './tab-model';
export interface CompModel {
    id: EnumComp;
    title: string;
    route: string;
    status: boolean;
    nav: Set<TabModel>;
}
