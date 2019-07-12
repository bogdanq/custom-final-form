import { createSymbiote } from "redux-symbiote";

type THistory = {
  companyName: string;
  description: string;
};

export type TSummary = {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  history: Array<THistory>;
};

export type InitialState = {
  summaryList: Array<TSummary>;
  currentSummary?: TSummary;
};

export type Actions = {
  createSummary: (data: TSummary) => void;
  deleteSummary: (id: number) => void;
  updateSummary: (data: TSummary) => void;
};

type Reducers = {
  createSummary: (state: InitialState, data: TSummary) => InitialState;
  deleteSummary: (state: InitialState, id: number) => InitialState;
  updateSummary: (state: InitialState, data: TSummary) => InitialState;
};

const initialState: InitialState = {
  currentSummary: undefined,
  summaryList: [
    {
      id: 1,
      firstName: "Bogdan",
      lastName: "Shelomanov",
      login: "bogdanq",
      password: "********",
      history: [
        {
          companyName: "Intelaxy",
          description: "front-dev"
        }
      ]
    }
  ]
};

let nextSummaryId = 3;

const symbiotes: Reducers = {
  createSummary: (state, data) => ({
    ...state,
    summaryList: [...state.summaryList, { id: nextSummaryId++, ...data }]
  }),
  deleteSummary: (state, id) => ({
    ...state,
    summaryList: state.summaryList.filter(item => item.id !== id)
  }),
  updateSummary: (state, data) => ({
    ...state,
    summaryList: state.summaryList.map(item =>
      item.id === Number(data.id) ? { ...item, ...data } : item
    )
  })
};

export const { actions, reducer: summaryReducer } = createSymbiote<
  InitialState,
  Actions
>(initialState, symbiotes, "summaryReducer");
