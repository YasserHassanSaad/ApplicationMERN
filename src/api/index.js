// Importing all the needed libraries. 
import axios from 'axios'


// Setting our API connection string. 
const API = axios.create({ baseURL: "http://localhost:5000" })
//const url = "https://memories-mernapplication.herokuapp.com/posts"

// Creating API interceptor to make backend middleware works fine. 
API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req
})

// Exporting API get request to fetch posts. 
export const fetchPosts = (page) => {
    return API.get(`/posts?page=${page}`)
}

// Exporting API get request to fetch posts. 
export const fetchPost = (id) => {
    return API.get(`/posts/${id}`)
}

// Exporting API get request to fetch posts by search tag. 
export const fetchPostsBySearch = (searchQuery) => {
    return API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
}

// Exporting API post request to create a new post. 
export const createPost = (newPost) => {
    return API.post("/posts", newPost)
}

// Exporting API patch request to update an existing post. 
export const updatePost = (id, updatedPost) => {
    return API.patch(`/posts/${id}`, updatedPost)
}

// Exporting API delete request to delete an existing post. 
export const deletePost = (id) => {
    return API.delete(`/posts/${id}`)
}

// Exporting API patch request to update like counts of an existing post. 
export const likePost = (id) => {
    return API.patch(`/posts/${id}/likePost`)
}

// Exporting API post request to login user. 
export const login = (formData) => {
    return API.post("/users/login", formData)
}

// Exporting API post request to create a new user. 
export const register = (formData) => {
    return API.post("/users/register", formData)
}