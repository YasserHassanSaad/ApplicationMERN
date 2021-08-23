// Importing all the needed libraries. 
import { combineReducers } from 'redux'

// Importing all the needed modules. 
import posts from './posts'
import auth from './auth'


// Exporting all the combined reducers. 
export default combineReducers({
    posts, auth
})