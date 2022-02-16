import { TYPES } from "../actions/types";

const initialState = {
    loading: false,
}

const loadingReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.LOADING:
            return { 
                ...state,
                loading: true,
        }
        case TYPES.STOPLOADING:
            return { 
                ...state,
                loading: false,
        }
        default:
            return state
    }
}

export default loadingReducer