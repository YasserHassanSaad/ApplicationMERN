// Importing all the needed libraries. 
import mongoose from 'mongoose'


// Create mongoose schema. 
const postSchema = mongoose.Schema({
    title: String, 
    message: String, 
    creator: String, 
    tags: [String], 
    selectedFile: String, 
    likeCount: {
        type: Number, 
        default: 0
    }, 
    createdAt: {
        type: Date, 
        default: new Date()
    }, 
})

// Convert your mongoose schema into mongoose model. 
const PostMessage = mongoose.model("PostMessage", postSchema)

// Exporting the default modules. 
export default PostMessage