import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';

import path from 'path'
import { fileURLToPath } from 'url';
import resumeRoutes from'./routes/resumeRoutes.js'
import aiRoutes from './routes/aiRoutes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4000;

const allowedOrigins = [
    'http://localhost:5173',
    'https://easy-resume-phi.vercel.app'
];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

// connect db 
connectDB();

// middlewares
app.use(express.json())


// error due to this!! (userRouter)      part of middleware
app.use('/api/auth', userRouter)
app.use('/api/resume', resumeRoutes)
app.use('/api/ai', aiRoutes)

app.use('/uploads', express.static(path.join(__dirname, 'uploads'),{
    setHeaders:(res, _path)=>{
        const origin = res.req?.headers?.origin;
        if (allowedOrigins.includes(origin)) {
            res.set('Access-Control-Allow-Origin', origin);
        }
    }
}))

// routes
app.get('/', (req, res) =>{
    res.send('api working')
})

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`server started on http://localhost:${port}`);
    });
}

export default app;