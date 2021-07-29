// Importing all the needed libraries. 
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

// Importing all the needed modules. 
import postRoutes from './routes/posts.js'


// Intialize our app with express and do some general setup. 
const app = express()
dotenv.config()
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// Use middleware to connect routes to our application, by giving a starting url and routing functions. 
app.use("/posts", postRoutes)

// Make a greating text when access the API. 
app.get("/", (req, res) => {
    res.send("Hello to memories API")
})

// Set the working port. 
const PORT = process.env.PORT || 5000

// Initialize our database connection. 
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false)