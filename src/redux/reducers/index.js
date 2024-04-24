import { combineReducers } from "redux"
import { photosReducer } from "./photos"
import { userReducer } from "./users"
import { postsByUserReducer } from "./postsByUser"


export const rootReducer = combineReducers({
    photos: photosReducer,
    users: userReducer,
    postsByUser: postsByUserReducer, 
})

