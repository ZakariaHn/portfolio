import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Router } from "react-router-dom";
import "./scss/main.scss";
let hashHistory = BrowserRouter.hashHistory;
ReactDOM.render(
  <BrowserRouter history={hashHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
