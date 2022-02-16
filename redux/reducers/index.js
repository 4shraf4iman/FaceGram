import { combineReducers } from 'redux'
import postReducer from './post'
import loginReducer from './login'
import loadingReducer from './loading'
import commentReducer from './comment'


export default combineReducers({
    postReducer,
    loginReducer,
    loadingReducer,
    commentReducer
})