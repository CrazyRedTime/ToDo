import {combineReducers, createStore } from "redux";
import toDoListReducer from './toDoListReducer';

const reducers = combineReducers({
  toDoList: toDoListReducer,
});

const store = createStore(reducers);

export default store;