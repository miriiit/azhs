import { createSelector } from "@ngrx/store";
import { AppState, CompState, NavState } from "./../";

//export const setlectTabState = (state: AppState) => state.navState;
export const setlectComponentState = (state: AppState) => state.compState;

export const selectComponents = createSelector(
    setlectComponentState,
    (state: CompState) => state?.components
);