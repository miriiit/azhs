import { createSelector } from "@ngrx/store";
import { AppState, NavState } from "./../";

export const setlectTabState = (state: AppState) => state.navState;


export const selectTabsGroup = createSelector(
    setlectTabState,
    (state: NavState) => state?.navs
);