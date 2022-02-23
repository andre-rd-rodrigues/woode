import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "App/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./configureStore";
import ScrollTop from "components/ScrollTop/ScrollTop";

const store = configureStore();

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <ScrollTop />
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
