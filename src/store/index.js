import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { _RickmortiReducers } from './reducers/_RickmortiReducers';
import { uiReducer } from './reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
	characters: _RickmortiReducers,
	auth: authReducer,
	ui: uiReducer
});

const configureStore = (initialState) => createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
