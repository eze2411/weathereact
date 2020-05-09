import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { city } from './../reducers/city';

const initialState = {};

// Esta funcion es solo para debugging en chrome (react tool developers)
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

// En prod no usar composeEnhacers, directamente applyMiddleware
export const store = createStore(city, initialState, composeEnhacers(applyMiddleware(thunk)));
