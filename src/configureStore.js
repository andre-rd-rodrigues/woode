import { configureStore } from "@reduxjs/toolkit";
import reducer from "./store/rootReducer";
import activateNotification from "store/middleware/activateNotification";

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(activateNotification)
  });
}
