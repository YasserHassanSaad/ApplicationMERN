// Importing all the needed libraries. 

// Importing all the needed modules. 
import { AUTH, LOGOUT } from '../constants/actionTypes'


// Posts reducer that accept state and action, to change state based on action type. 
const reducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data }
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null }
        default:
            return state
    }
}

export default reducer