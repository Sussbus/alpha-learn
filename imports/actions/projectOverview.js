import { Projects } from '../api/projects/projects'

export const OPEN_PROJECT_OVERVIEW = 'OPEN_PROJECT_OVERVIEW'
export const CLOSE_PROJECT_OVERVIEW = 'CLOSE_PROJECT_OVERVIEW'
export const EDIT_PROJECT_TITLE = 'EDIT_PROJECT_TITLE'
export const EDIT_PROJECT_BODY = 'EDIT_PROJECT_BODY'
export const ARCHIVE_PROJECT = 'ARCHIVE_PROJECT'
export const UNARCHIVE_PROJECT = 'UNARCHIVE_PROJECT'

export function openProjectOverview(projectID) {
    return dispatch => {
        const project = Projects.find({ _id: projectID }).fetch()[0]
        const projectLoaded = project != undefined || project != null

        dispatch({
            type: 'OPEN_PROJECT_OVERVIEW',
            data: {
                project: Projects.find({ _id: projectID }).fetch()[0]
            }
        })
    }
}

export function closeProjectOverview() {
    return dispatch => {
        dispatch({
            type: 'CLOSE_PROJECT_OVERVIEW'
        })
    }
}

export function editProjectTitle(newTitle) {
    return dispatch => {
        dispatch({
            type: 'EDIT_PROJECT_TITLE',
            newTitle
        })
    }
}

export function editProjectBody(newBody) {
    return dispatch => {
        dispatch({
            type: 'EDIT_PROJECT_BODY',
            newBody
        })
    }
}

export function archiveProject() {
    return dispatch => {
        dispatch({
            type: 'ARCHIVE_PROJECT'
        })
    }
}

export function unarchiveProject() {
    return dispatch => {
        dispatch({
            type: 'UNARCHIVE_PROJECT'
        })
    }
}
