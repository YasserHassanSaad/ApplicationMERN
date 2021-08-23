// Importing all the needed libraries. 
import mongoose from 'mongoose'

// Import all the needed modules. 
import PostMessage from '../models/postMessage.js'


// the '/' get request route handler. 
export const getPosts = async (req, res) => {
    const { page } = req.query

    try {
        const LIMIT = 8
        const startIndex = (Number(page) - 1) * LIMIT
        const total = await PostMessage.countDocuments({})
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex)
        res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT) })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// the '/:id' get request route handler. 
export const getPost = async (req, res) => {
    const { id } = req.params

    try {
        const post = await PostMessage.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// the '/search' get request route handler. 
export const getPostsBySearch = async (req, res) => {
    console.log("Controller 1")
    const { searchQuery, tags } = req.query
    console.log("Controller 2")

    try {
        console.log("Controller 3")
        const title = new RegExp(searchQuery, "i")
        console.log("Controller 4")
        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]})
        console.log("Controller 5")
        res.json({ data: posts })
    } catch (error) {   
        console.log("Controller Error")
        res.status(404).json({ message: error.message });
    }
}

// the '/' post request route handler. 
export const createPost = async (req, res) => {
    const post = req.body
    const newPost = PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

// the '/' patch request route handler. 
export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id")

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true })

    res.json(updatedPost)
}

// the '/' delete request route handler. 
export const deletePost = async (req, res) => {
    const { id } = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

    const deletedPost = await PostMessage.findByIdAndRemove(id)

    res.json({ message: "Post deleted successfully" })
}

// the '/likePost' patch request route handler. 
export const likePost = async (req, res) => {
    const { id } = req.params

    if(!req.userId) { return res.json({ message: "Unauthenticated" }) }

    if(!mongoose.Types.ObjectId.isValid(id)) { return res.status(404).send("No post with that id") }

    const post = await PostMessage.findById(id)
    const index = post.likes.findIndex((id) => id === String(req.userId))

    if(index === -1) {
        post.likes.push(req.userId)
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId))
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })

    res.json(updatedPost)
}