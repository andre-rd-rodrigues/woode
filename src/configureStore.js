import { configureStore } from "@reduxjs/toolkit";
import reducer from "./store/rootReducer";

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
  });
}
