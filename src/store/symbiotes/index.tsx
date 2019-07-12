import { combineReducers, Reducer } from "redux";

import { summaryReducer, InitialState as SummaryState } from "./summary";

export type RootReducer = {
  summaryReducer: SummaryState;
};

export const rootReducer: Reducer<RootReducer> = combineReducers({
  summaryReducer
});
