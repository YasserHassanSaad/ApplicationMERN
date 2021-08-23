// Importing all the needed libraries. 
import express from 'express'

// Import all the needed modules. 
import { login, register } from '../controllers/user.js'


// Setup the router. 
const router = express.Router()

// Our routes to the user page. 
router.post("/login", login)
router.post("/register", register)

// Exporting the default modules. 
export default router