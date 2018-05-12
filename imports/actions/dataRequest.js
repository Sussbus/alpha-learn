export const START_DATA_REQUEST = 'START_DATA_REQUEST'
export const STOP_DATA_REQUEST = 'STOP_DATA_REQUEST'

export function requestData(projectID) {
    return dispatch => {
        dispatch({
            type: 'START_DATA_REQUEST',
            data: {
                user: Meteor.user(),
                projectID: projectID
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
