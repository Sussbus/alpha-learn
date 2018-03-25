import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import reducer from '../reducers/index';

const middleware = [thunk, logger]
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, applyMiddleware(...middleware), enhancers);

console.log(store.getState());

export default store;
