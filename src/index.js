import App from "App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollTop from "components/ScrollTop/ScrollTop";
import queryClient from "queryClient";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import configureStore from "./configureStore";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();
store.dispatch({ type: "INIT_SESSION" });

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
