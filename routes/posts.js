// Importing all the needed libraries. 
import express from 'express'

// Import all the needed modules. 
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'


// Setup the router. 
const router = express.Router()

// Our routes to the posts page. 
router.get("/", getPosts)
router.post("/", createPost)
router.patch("/:id", updatePost)
router.delete("/:id", deletePost)
router.patch("/:id/likePost", likePost)

// Exporting the default modules. 
export default router