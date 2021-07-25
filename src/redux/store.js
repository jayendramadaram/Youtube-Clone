import { createStore , applyMiddleware , combineReducers } from "redux"
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from "./reducer/auth.reducer"
import { homereducer } from "./reducer/home.reducer"



const reducer =  combineReducers({
    auth : authReducer,
    homereducer : homereducer

})


const store = createStore( reducer , {} , composeWithDevTools(applyMiddleware(thunk)))

export default store