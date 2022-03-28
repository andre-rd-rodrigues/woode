import { combineReducers } from "redux";
import notificationReducer from "./notifications";

export default combineReducers({
  notifications: notificationReducer
});
