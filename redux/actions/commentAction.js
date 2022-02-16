import { TYPES } from './types'
import axios from 'axios'

export const getComment = (data) => async (dispatch) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}/comments`)
        let resOb = {
            res: res.data,
            number: 1-1
        }
        dispatch({type: TYPES.GETCOMMENT, payload: resOb})
    } catch (err) {
        console.log(err)
    }
}