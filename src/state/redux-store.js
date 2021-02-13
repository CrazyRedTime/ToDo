import {combineReducers, createStore, applyMiddleware} from "redux";
import categoriesReducer from "./categoriesReducer";
import toDoListReducer from './toDoListReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  toDoList: toDoListReducer,
  categories: categoriesReducer
});

const configureStore = initialState => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
};



export default configureStore;