// Importing all the needed libraries. 

// Importing all the needed modules. 
import * as api from '../api'
import { AUTH } from '../constants/actionTypes'


// Creating action creator that return actions. 
export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData)
        dispatch({ type: AUTH, data })
        history.push("/")
    } catch (error) {
        console.log(error)
    }
}

// Creating action creator that return actions. 
export const register = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.register(formData)
        dispatch({ type: AUTH, data })
        history.push("/")
    } catch (error) {
        console.log(error)
    }
}