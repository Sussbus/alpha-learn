import { START_TRAINING, STOP_TRAINING } from '../actions/training'

export const initialState = {
    user: {},
    postId: '',
    isTraining: false
}

export default function training(state = initialState, action) {
    const { data, type } = action

    switch (type) {
        case START_TRAINING:
            return Object.assign({}, state, {
                user: data.user || {},
                postId: data.postId || '',
                isTraining: true
            })
        case STOP_TRAINING:
            return Object.assign({}, state, {
                isTraining: false
            })
        default:
            return state
    }
}
