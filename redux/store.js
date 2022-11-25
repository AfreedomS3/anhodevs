import { createStore, applyMiddleware } from 'redux';
import { compooseWithDevtools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
