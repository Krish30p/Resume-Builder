import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
 

const app = express();
const port = 4000;

app.use(cors())

// connect db 
connectDB();

// middlewares
app.use(express.json())


// error due to this!! (userRouter)
app.use("/api/auth", userRouter)

// routes
app.get('/', (req, res) =>{
    res.send('api working')
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})