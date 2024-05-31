import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";
import navigationReducer from "./navigation";

export default combineReducers({
  cart: cartReducer,
  auth: authReducer,
  navigation: navigationReducer
});
