import React from "react";
import ReactDOM from "react-dom";
import App from "App/App";
import { HashRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
