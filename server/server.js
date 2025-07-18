import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/UserRoutes.js'
import imageRouter from './routes/ImageRoutes.js'

const port = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(express.static('dist')); // or 'build', depending on Vite output

app.use(cors())
await connectDB()



app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/',(req,res)=> res.send("API WORKING"))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});


app.listen(port, ()=> console.log("Server running on port " + port))