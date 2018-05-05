export const OPEN_PROJECT_OVERVIEW = 'OPEN_PROJECT_OVERVIEW'
export const CLOSE_PROJECT_OVERVIEW = 'CLOSE_PROJECT_OVERVIEW'

export function openProjectOverview(projectID) {
    return dispatch => {
        dispatch({
            type: 'OPEN_PROJECT_OVERVIEW',
            data: {
                projectID: projectID
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
