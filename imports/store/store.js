import { createStore, compose } from 'redux';

import reducer from '../reducers/index';

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, undefined, enhancers);

console.log(store.getState());

export default store;
