import { START_DATA_REQUEST, STOP_DATA_REQUEST } from '../actions/dataRequest'

export const initialState = {
    projectID: '',
    isRequestingData: false
}

export default function requestData(state = initialState, action) {
    const { data, type } = action

    switch (type) {
        case START_DATA_REQUEST:
            return Object.assign({}, state, {
                projectID: data.projectID || '',
                isRequestingData: true
            })
        case STOP_DATA_REQUEST:
            return Object.assign({}, state, {
                isRequestingData: false
            })
        default:
            return state
    }
}
