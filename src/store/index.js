import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { characterReducers } from './reducers/characterReducers';
import { uiReducer } from './reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
	characters: characterReducers,
	auth: authReducer,
	ui: uiReducer
});

const configureStore = (initialState) => createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
