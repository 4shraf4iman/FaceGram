import { TYPES } from "../actions/types";

const initialState = {
    login: false,
    wrongCred: false,
    authority: ""
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.USERLOGIN:
            return { 
                ...state,
                login: true,
                wrongCred: false,
                authority: action.payload.username
        }
        case TYPES.ADMINLOGIN:
            return { 
                ...state,
                login: true,
                wrongCred: false,
                authority: action.payload.username
        }
        case TYPES.LOGOUT:
            return { 
                ...state,
                login: false,
                authority: ""
        }
        case TYPES.WRONGCRED:
            return { 
                ...state,
                wrongCred: true,
        }
        default:
            return state
    }
}

export default loginReducer