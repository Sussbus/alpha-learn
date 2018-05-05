import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import auth from './auth'
import training from './training'
import dataRequest from './dataRequest'

export default combineReducers({
    auth,
    training,
    dataRequest,
    routing: routerReducer
})
