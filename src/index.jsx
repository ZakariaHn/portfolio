import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./scss/main.scss";

ReactDOM.render(
  <BrowserRouter history={window.hashHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
