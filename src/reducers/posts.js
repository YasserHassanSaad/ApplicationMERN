// Importing all the needed libraries. 

// Importing all the needed modules. 
import { CREATE, UPDATE, DELETE, FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from '../constants/actionTypes'


// Posts reducer that accept state and action, to change state based on action type. 
const reducer = (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING: 
            return { ...state, isLoading: true }
        case END_LOADING: 
            return { ...state, isLoading: false }
        case FETCH_ALL:
            return {
                ...state, 
                posts: action.payload.data, 
                currentPage: action.payload.currentPage, 
                numberOfPages: action.payload.numberOfPages
            }
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload.data }
        case FETCH_POST:
            return { ...state, post: action.payload.post }
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] }
        case UPDATE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) }
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) }
        default:
            return state
    }
}

// Exporting all the needed modules. 
export default reducer