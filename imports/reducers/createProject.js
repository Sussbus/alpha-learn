import {
    START_CREATE_PROJECT,
    STOP_CREATE_PROJECT
} from '../actions/createProject'

export const initialState = {
    isCreatingProject: false
}

export default function createProject(state = initialState, action) {
    const { data, type } = action

    switch (type) {
        case START_CREATE_PROJECT:
            return Object.assign({}, state, {
                isCreatingProject: true
            })
        case STOP_CREATE_PROJECT:
            return Object.assign({}, state, {
                isCreatingProject: false
            })
        default:
            return state
    }
}
