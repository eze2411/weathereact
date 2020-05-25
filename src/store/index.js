import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    city: 'Buenos Aires,ar'
};

// Esta funcion es solo para debugging en chrome (react tool developers)
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// En prod no usar composeEnhacers, directamente applyMiddleware
export const store = createStore(reducers, initialState, composeEnhacers(applyMiddleware(thunk)));
