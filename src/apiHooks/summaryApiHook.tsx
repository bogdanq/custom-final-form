import { bindActionCreators, ActionCreatorsMapObject } from "redux";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { actions, TSummary, Actions } from "../store/symbiotes/summary";
import { useMemo } from "react";
import { RootReducer } from "../store";

type TSelected = {
  summaryList: Array<TSummary>;
  currentSummary?: TSummary;
};

export const useSummary = (): [TSelected, ActionCreatorsMapObject<Actions>] => {
  const summaryState = useSelector<RootReducer, TSelected>(
    state => ({
      summaryList: state.summaryReducer.summaryList,
      currentSummary: state.summaryReducer.currentSummary
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const actionsList = useMemo(
    () =>
      bindActionCreators(
        {
          ...actions
        },
        dispatch
      ),
    [dispatch]
  );

  return [summaryState, actionsList];
};
