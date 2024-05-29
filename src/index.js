import React from "react";
import App from "App/App";
import ScrollTop from "components/ScrollTop/ScrollTop";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import configureStore from "./configureStore";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";

const store = configureStore();

const queryClient = new QueryClient();

ReactDOM.render(
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ScrollTop />
        <App />
      </Provider>
    </QueryClientProvider>
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
