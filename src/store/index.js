
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { novels } from './reducer';



const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const reducers = { novels}

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, composedEnhancer);