import React from "react";
import HomePage from "./pages/home";
import WorkPage from "./pages/work";
import ServecisPage from "./pages/services";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/work" component={WorkPage} />
      <Route path="/services" component={ServecisPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
