import React from "react";
import HomePage from "./pages/home";
import WorkPage from "./pages/work";
import ServicesPage from "./pages/services";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

const App = () => {
  return (
    <Switch>
      <Route path="/work" component={WorkPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
