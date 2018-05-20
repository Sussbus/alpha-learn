import { USER_LOGGING_IN, USER_DATA, LOG_USER_OUT } from '../actions/auth'

export const initialState = {
    user: {},
    loggingIn: false,
    isLoaded: false
}

export default function auth(state = initialState, action) {
    const { data, type } = action

    switch (type) {
        case USER_DATA:
            return Object.assign({}, state, {
                user: data.user || {},
                isLoaded: data.subscription.ready()
            })
        case USER_LOGGING_IN:
            return Object.assign({}, state, {
                loggingIn: data
            })
        case LOG_USER_OUT:
            return Object.assign({}, state, {
                user: {}
            })
        default:
            return state
    }
}
