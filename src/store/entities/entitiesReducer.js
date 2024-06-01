import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";
import navigationReducer from "./navigation";
import productsReducer from "./products";

export default combineReducers({
  cart: cartReducer,
  auth: authReducer,
  navigation: navigationReducer,
  products: productsReducer
});
