import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import lengthReducer from "./reducers/rows";

export const initialState = {
    lengthOfRows: 0,
    lengthOfCols: 0,
  },
  configureStore = () => createStore(lengthReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default configureStore;