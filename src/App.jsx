import React from "react";
import HomePage from "./pages/home";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AboutPage from "./components/aboutPageComponents/about";

const App = () => {
  return (
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
