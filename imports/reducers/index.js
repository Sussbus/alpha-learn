import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import auth from './auth'
import training from './training'

export default combineReducers({
    auth,
    training,
    routing: routerReducer
})
