import { Projects } from '../api/projects/projects'

export const START_TRAINING = 'START_TRAINING'
export const STOP_TRAINING = 'STOP_TRAINING'

export function startTraining(postId) {
    return dispatch => {
        Tracker.autorun(() => {
            const project = Projects.find({ _id: postId }).fetch()[0]
            const projectLoaded = project != undefined || project != null

            dispatch({
                type: 'START_TRAINING',
                data: {
                    project: Projects.find({ _id: postId }).fetch()[0],
                    projectLoaded: projectLoaded
                }
            })
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
