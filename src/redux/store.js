import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(todoReducer,composeEnhancer(applyMiddleware(thunk)))