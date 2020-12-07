import { FETCH_DATA, PUT_DATA, TOGGLE_MODE } from './types'

export function fetchData() {

    const initialData = {
            _id: 123,
            userName: 'Андрей Снигирёв',
            userProf: 'UX/UI designer',
            answers: 0,
            views: 0,
            salary: 35000,
            exp: 9,
            conditions: ['полная занятость', 'удаленная работа']
    }
    
//    return async dispatch => {
//    const response = await fetch('/')
//    const json = await response.json()
//    dispatch({ type: FETCH_DATA, payload: json})
//    }

    return { type: FETCH_DATA, payload: initialData}
}

export function putData(userData) {
//    return async dispatch => {
//    const response = await fetch("/" + data._id,{
//        method: 'PUT',
//        body: JSON.stringify(data),
//        headers: {
//            'Content-Type': 'application/json'
//    }
//    }

    return { type: PUT_DATA, payload: userData}
}

export function toggleMode() {
    return {
        type: TOGGLE_MODE
    }
}