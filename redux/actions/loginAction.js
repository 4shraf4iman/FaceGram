import { TYPES } from './types'
import axios from 'axios'


export const loginAuth = (data) => async (dispatch) => {
    try {
        if(data.username === 'admin' && data.password === 'admin'){
            dispatch({type: TYPES.ADMINLOGIN, payload: data})
        } else if(data.username === 'user' && data.password === 'user'){
            dispatch({type: TYPES.USERLOGIN, payload: data})
        } else {
            dispatch({type: TYPES.WRONGCRED})
        }
    } catch (err) {
        console.log(err)
    }
}

export const logout = (data) => async (dispatch) => {
    
    try {
        dispatch({type: TYPES.LOGOUT})
    } catch (err) {
        console.log(err)
    }
}