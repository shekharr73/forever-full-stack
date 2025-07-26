import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoute.js'

const app = express()   
const PORT = process.env.PORT || 8000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req,res)=>{
    res.end("API working")
})

app.listen(PORT, ()=> console.log(`Server started at PORT:${PORT}`))