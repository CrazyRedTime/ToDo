import {combineReducers, createStore } from "redux";
import categoriesReducer from "./categoriesReducer";
import toDoListReducer from './toDoListReducer';

const reducers = combineReducers({
  toDoList: toDoListReducer,
  categories: categoriesReducer
});

const store = createStore(reducers);

export default store;