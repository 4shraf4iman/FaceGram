import { TYPES } from "../actions/types";

const initialState = {
    posts: [],
    test: false,
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.GETPOST:
            return { 
                ...state,
                posts: action.payload,
            }
        case TYPES.GETCOMMENT:
            return { 
                ...state,
                posts: state.posts.map((item, index) => {
                    // Find the item with the matching id
                    if(item.id === 1) {
                      // Return a new object
                      return {
                        ...item,  // copy the existing item
                        comments: action.payload.res // replace the email addr
                      }
                    }
                    // Leave every other item unchanged
                    return item;
                  }
                )
            }
        case TYPES.EDITPOST:
            console.log(action.payload.number)
            return { 
                ...state,
                posts: state.posts.map((item, index) => {
                    // Find the item with the matching id
                    if(item.id == action.payload.number) {
                        // Return a new object
                        return {
                        ...item,  // copy the existing item
                        title: action.payload.res // replace the email addr
                        }
                    }
                    // Leave every other item unchanged
                    return item;
                    })
            }
        case TYPES.DELETEPOST:
            return { 
                ...state,
                posts: state.posts.filter(a => a.id !== action.payload.number)
            }
        default:
            return state
    }
}

export default postReducer