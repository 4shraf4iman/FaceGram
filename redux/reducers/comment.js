import { TYPES } from "../actions/types";

const initialState = {
    comments: [],
}

const commentReducer = (state = initialState, action) => {

    switch(action.type){
        
        case TYPES.GETCOMMENT:
            return { 
                ...state,
                comments: action.payload.res
            }
        case TYPES.EDITCOMMENT:
            console.log(action.payload.number)
            return { 
                ...state,
                comments: state.comments.map((item, index) => {
                    // Find the item with the matching id
                    if(item.id == action.payload.number) {
                      // Return a new object
                      return {
                        ...item,  // copy the existing item
                        body: action.payload.res // replace the email addr
                      }
                    }
                    // Leave every other item unchanged
                    return item;
                  })
            }
        case TYPES.DELETECOMMENT:
            return { 
                ...state,
                comments: [
                    ...state.comments.slice(0, action.payload),
                    ...state.comments.slice(action.payload + 1)
                ],
            }
        default:
            return state
    }
}

export default commentReducer