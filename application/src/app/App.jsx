import React from "react";
import {Router, Route, browserHistory} from "react-router";
import Home from "./pages/home/Home";
import BudgetContainer from "./pages/budget/BudgetContainer";
import TransactionsContainer from "./pages/transactions/TransactionsContainer";
import TrendsContainer from "./pages/trends/TrendsContainer";
import ProgressContainer from "./pages/progress/ProgressContainer";
import AuthenticationContainer from "./pages/authentication/AuthenticationContainer";
import "./styles/main";
import {findToken} from "./modules/authentication";

const App = () => {
  return <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="Budget" getComponent={getBudgetContainer}/>
      <Route path="Transactions" getComponent={getTransactionsContainer}/>
      <Route path="Trends" getComponent={getTrendsContainer}/>
      <Route path="Progress" getComponent={getProgressContainer}/>
    </Route>
  </Router>;
};

export default App;

const getBudgetContainer = (nextState, callback) => {
  return getSecuredComponent(BudgetContainer, callback);
};

const getTransactionsContainer = (nextState, callback) => {
  return getSecuredComponent(TransactionsContainer, callback);
};

const getTrendsContainer = (nextState, callback) => {
  return getSecuredComponent(TrendsContainer, callback);
};

const getProgressContainer = (nextState, callback) => {
  return getSecuredComponent(ProgressContainer, callback);
};

const getSecuredComponent = (component, callback) => {
  const token = findToken();
  if (token) {
    callback(null, component);
  } else {
    callback(null, authenticationComponent(component));
  }
};

const authenticationComponent = (next) => {
  const Wrapper = () => {
    return <AuthenticationContainer next={next}/>;
  };
  return Wrapper;
};
