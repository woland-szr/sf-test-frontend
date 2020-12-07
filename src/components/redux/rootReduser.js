import { FETCH_DATA, PUT_DATA, TOGGLE_MODE } from './types'

const initialState = {
    userData: {
        _id: 0,
        userName: '',
        userProf: '',
        answers: 0,
        views: 0,
        salary: 0,
        exp: 0,
        conditions: []
    },
    loader: false,
    viewMode: true
}

export const rootReduser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {...state, userData: action.payload}
        case PUT_DATA:
            return {...state, userData: action.payload}
        case TOGGLE_MODE:
            return {...state, viewMode: !state.viewMode}
        default: return state
    }
}

