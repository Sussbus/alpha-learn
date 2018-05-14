import { START_TRAINING, STOP_TRAINING } from '../actions/training'

export const initialState = {
    user: {},
    postId: '',
    project: {},
    isTraining: false,
    projectLoaded: false
}

export default function training(state = initialState, action) {
    const { data, type } = action

    switch (type) {
        case START_TRAINING:
            return Object.assign({}, state, {
                user: data.user || {},
                postId: data.postId || '',
                project: data.project || {},
                projectLoaded: data.projectLoaded,
                isTraining: true
            })
        case STOP_TRAINING:
            return Object.assign({}, state, {
                isTraining: false,
                projectLoaded: false,
                project: {},
                postId: ''
            })
        default:
            return state
    }
}
