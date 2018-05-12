import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import auth from './auth'
import training from './training'
import dataRequest from './dataRequest'
import projectOverview from './projectOverview'

export default combineReducers({
    auth,
    training,
    dataRequest,
    projectOverview,
    routing: routerReducer
})
