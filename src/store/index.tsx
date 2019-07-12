import { createStore } from "redux";
import { rootReducer } from "./symbiotes";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export { RootReducer } from "./symbiotes";
