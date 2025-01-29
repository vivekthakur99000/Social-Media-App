import cors from "cors"
import express from "express"
import  dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./utils/db.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

// middlewares 
app.use(cors())
app.use(express.json())
app.use(cookieParser())


// connection

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`)
    
})



