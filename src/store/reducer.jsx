import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./slice/AuthSlice";
import { authApi } from "services";
import ToastReducer from "./slice/ToasterSlice";
const rootReducer = combineReducers({
  //Shared Reducers
  toasts: ToastReducer,

  auth: AuthReducer,
  [authApi.reducerPath]: authApi.reducer,
});
export default rootReducer;
