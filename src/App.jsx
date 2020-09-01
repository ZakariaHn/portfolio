import React from "react";
import HomePage from "./pages/home";
import WorkPage from "./pages/work";
import AboutPage from "./pages/about";
import Cursor from "./cursor";
import ContactPage from "./pages/contact";
import ServicesPage from "./pages/services";
import functions from "./helpers";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

const App = () => {
  const location = useLocation();

  return (
    <main style={{ overflowX: "hidden" }}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </AnimatePresence>
      <Cursor />
    </main>
  );
};

export default App;
