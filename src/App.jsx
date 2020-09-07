import React from "react";
import HomePage from "./pages/home";
import WorkPage from "./pages/work";
import AboutPage from "./pages/about";
import Cursor from "./cursor";
import ContactPage from "./pages/contact";
import ServicesPage from "./pages/services";
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
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            component={ContactPage}
          />
          <Route
            path={process.env.PUBLIC_URL + "/about"}
            component={AboutPage}
          />
          <Route path={process.env.PUBLIC_URL + "/work"} component={WorkPage} />
          <Route
            path={process.env.PUBLIC_URL + "/services"}
            component={ServicesPage}
          />
          <Route path={process.env.PUBLIC_URL + "/"} component={HomePage} />
        </Switch>
      </AnimatePresence>
      <Cursor />
    </main>
  );
};

export default App;
