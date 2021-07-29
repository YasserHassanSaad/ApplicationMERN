// Importing all the needed libraries. 
import mongoose from 'mongoose'

// Import all the needed modules. 
import PostMessage from '../models/postMessage.js'


// the '/' get request route handler. 
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        //console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// the '/' post request route handler. 
export const createPost = async (req, res) => {
    const post = req.body
    const newPost = PostMessage(post)
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

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id")

    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

    res.json(updatedPost)
}