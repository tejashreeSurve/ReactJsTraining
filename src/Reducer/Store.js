import { createStore, combineReducers } from "redux";
import LoginReducer from "../Reducer/LoginReducer";

const Store = createStore(
  LoginReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
