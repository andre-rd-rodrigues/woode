import { configureStore } from "@reduxjs/toolkit";
import activateNotification from "store/middleware/activateNotification";
import getUserSession from "store/middleware/getUserSession";
import reducer from "./store/rootReducer";

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(getUserSession(), activateNotification)
  });
}
