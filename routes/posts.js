// Importing all the needed libraries. 
import express from 'express'

// Import all the needed modules. 
import { getPosts, getPost, createPost, updatePost, deletePost, likePost, getPostsBySearch } from '../controllers/posts.js'
import auth from '../middleware/auth.js'


// Setup the router. 
const router = express.Router()

// Our routes to the posts page. 
router.get("/", getPosts)
router.get("/:id", getPost)
router.get("/search", getPostsBySearch)
router.post("/", auth, createPost)
router.patch("/:id", auth, updatePost)
router.delete("/:id", auth, deletePost)
router.patch("/:id/likePost", auth, likePost)

// Exporting the default modules. 
export default router