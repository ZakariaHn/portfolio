import React from "react";
import HomePage from "./pages/home";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WorkPage from "./components/work/work";

const App = () => {
  return (
    <Switch>
      <Route path="/work" component={WorkPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
