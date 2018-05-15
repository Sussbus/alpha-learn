import { Projects } from '../api/projects/projects'

export const OPEN_PROJECT_OVERVIEW = 'OPEN_PROJECT_OVERVIEW'
export const CLOSE_PROJECT_OVERVIEW = 'CLOSE_PROJECT_OVERVIEW'

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
