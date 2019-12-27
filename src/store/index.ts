import { createStore, compose, applyMiddleware } from 'redux'
import {combineReducers} from 'redux-immutable'
import thunk from 'redux-thunk'
import user from './models/user'
import home from './models/home'
import client from './models/client'

const reducer = combineReducers({
  user,
  home,
  client
});


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


export default store;