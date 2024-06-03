import { configureStore } from "@reduxjs/toolkit";
import activateNotification from "store/middleware/activateNotification";
import reducer from "./store/rootReducer";

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(activateNotification)
  });
}
