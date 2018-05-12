import {
    OPEN_PROJECT_OVERVIEW,
    CLOSE_PROJECT_OVERVIEW
} from '../actions/projectOverview'

export const initialState = {
    projectID: '',
    isProjectOpen: false
}

export default function projectOverview(state = initialState, action) {
    const { data, type } = action

    switch (type) {
        case OPEN_PROJECT_OVERVIEW:
            return Object.assign({}, state, {
                projectID: data.projectID || '',
                isProjectOpen: true
            })
        case CLOSE_PROJECT_OVERVIEW:
            return Object.assign({}, state, {
                isProjectOpen: false
            })
        default:
            return state
    }
}
