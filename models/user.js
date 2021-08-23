// Importing all the needed libraries. 
import mongoose from 'mongoose'


// Create mongoose schema. 
const userSchema = mongoose.Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true }, 
    password: { type: String, required: true }, 
    id: { type: String }
})

// Convert your mongoose schema into mongoose model. 
const User = mongoose.model("User", userSchema)

// Exporting the default modules. 
export default User