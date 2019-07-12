import React from "react";
import ReactDOM from "react-dom";
import { Catalog, CreateForm, UpdateForm } from "./pages";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { history } from "./history";
import "./styles.css";

const store = configureStore();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/create" component={CreateForm} />;
        <Route path="/update/:name/:id" component={UpdateForm} />;
        <Route path="/" component={Catalog} />;
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
