import {
    OPEN_PROJECT_OVERVIEW,
    CLOSE_PROJECT_OVERVIEW,
    EDIT_PROJECT_TITLE,
    EDIT_PROJECT_BODY,
    ARCHIVE_PROJECT,
    UNARCHIVE_PROJECT
} from '../actions/projectOverview'

export const initialState = {
    project: {},
    isProjectOpen: false
}

export default function projectOverview(state = initialState, action) {
    const { data, type } = action

    switch (type) {
        case OPEN_PROJECT_OVERVIEW:
            return Object.assign({}, state, {
                project: data.project || {},
                isProjectOpen: true
            })
        case CLOSE_PROJECT_OVERVIEW:
            return Object.assign({}, state, {
                isProjectOpen: false
            })
        case EDIT_PROJECT_TITLE:
            return Object.assign({}, state, {
                project: {
                    ...state.project,
                    project_title: action.newTitle
                }
            })
        case EDIT_PROJECT_BODY:
            return Object.assign({}, state, {
                project: {
                    ...state.project,
                    project_body: action.newBody
                }
            })
        case ARCHIVE_PROJECT:
            return Object.assign({}, state, {
                project: {
                    ...state.project,
                    isArchived: true
                }
            })
        case UNARCHIVE_PROJECT:
            return Object.assign({}, state, {
                project: {
                    ...state.project,
                    isArchived: false
                }
            })
        default:
            return state
    }
}
