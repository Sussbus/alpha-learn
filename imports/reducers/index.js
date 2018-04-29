import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import auth from './auth';

export default combineReducers({
	auth,
	routing: routerReducer
});
