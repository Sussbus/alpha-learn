export const START_CREATE_PROJECT = 'START_CREATE_PROJECT'
export const STOP_CREATE_PROJECT = 'STOP_CREATE_PROJECT'

export function createProject() {
    return dispatch => {
        dispatch({
            type: 'START_CREATE_PROJECT'
        })
    }
}

export function closeCreateProject() {
    return dispatch => {
        dispatch({
            type: 'STOP_CREATE_PROJECT'
        })
    }
}
