import React from "react";
import App from "App/App";
import ScrollTop from "components/ScrollTop/ScrollTop";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import configureStore from "./configureStore";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

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
