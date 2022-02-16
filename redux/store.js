import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import combineReducers from "./reducers"
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]

const makeStore = () => createStore(combineReducers, composeWithDevTools(compose(applyMiddleware(...middleware))))


export const wrapper = createWrapper(makeStore)