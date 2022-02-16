import { TYPES } from './types'
import axios from 'axios'


export const getPost = (data) => async (dispatch) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch({type: TYPES.GETPOST, payload: res.data})
    } catch (err) {
        console.log(err)
    }
}

