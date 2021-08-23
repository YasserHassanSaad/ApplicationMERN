// Importing all the needed libraries. 

// Importing all the needed modules. 
import * as api from '../api'
import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from '../constants/actionTypes'


// Creating action creator that return actions. 
export const getPosts = (page) => async(dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPosts(page)
        dispatch({ type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message)
    }
}

// Creating action creator that return actions. 
export const getPost = (id) => async(dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPost(id)
        dispatch({ type: FETCH_POST, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message)
    }
}

// Creating action creator that return actions. 
export const getPostsBySearch = (searchQuery) => async(dispatch) => {
    try {
        console.log("Actions 1")
        dispatch({ type: START_LOADING })
        console.log("Actions 2")
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery)
        console.log("Actions 3")
        dispatch({ type: FETCH_BY_SEARCH, payload: data })
        console.log("Actions 4")
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message)
    }
}

// Creating and exporting action creator that returns actions. 
export const createPost = (post, history) => async(dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createPost(post)
        history.push(`/posts/${data._id}`)
        dispatch({ type: CREATE, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message)
    }
}

// Creating and exporting action creator that returns actions. 
export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

// Creating and exporting action creator that returns actions. 
export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}

// Creating and exporting action creator that returns actions. 
export const likePost = (id) => async(dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}