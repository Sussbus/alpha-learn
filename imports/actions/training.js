export const START_TRAINING = 'START_TRAINING'
export const STOP_TRAINING = 'STOP_TRAINING'

export function startTraining(postId) {
    return dispatch => {
        dispatch({
            type: 'START_TRAINING',
            data: {
                user: Meteor.user(),
                postId: postId,
                isTraining: true
            }
        })
    }
}

export function stopTraining() {
    return dispatch => {
        dispatch({
            type: 'STOP_TRAINING'
        })
    }
}
