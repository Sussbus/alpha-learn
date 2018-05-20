import { Projects } from '../api/projects/projects'

export const START_DATA_REQUEST = 'START_DATA_REQUEST'
export const STOP_DATA_REQUEST = 'STOP_DATA_REQUEST'

export function requestData(projectID) {
    return dispatch => {
        const project = Projects.find({ _id: projectID }).fetch()[0]
        const projectLoaded = project != undefined || project != null

        dispatch({
            type: 'START_DATA_REQUEST',
            data: {
                project: Projects.find({ _id: projectID }).fetch()[0]
            }
        })
    }
}

export function stopDataRequest() {
    return dispatch => {
        dispatch({
            type: 'STOP_DATA_REQUEST'
        })
    }
}
