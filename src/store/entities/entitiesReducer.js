import { combineReducers } from "redux";
import cartReducer from "./cart";
import authReducer from "./auth";

export default combineReducers({
  cart: cartReducer,
  auth: authReducer
});
