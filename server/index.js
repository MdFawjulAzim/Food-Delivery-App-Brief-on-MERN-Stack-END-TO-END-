import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import userRouter from './route/user.route.js';
import categoryRouter from './route/category.route.js';
import connectDB from './config/connectDB.js';

const app = express();

app.use(cors({
    credentials: true,
    origin: "process.env.FRONTEND_URL"
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(helmet({
    crossOriginEmbedderPolicy: false,
}));

const PORT = 8080|| process.env.PORT;

app.get('/', (request, response) =>{
    //server to client 
    response.json({
        message: "Server to the backend API! " + PORT 
    })
});

app.use('/api/user',userRouter);
app.use("/api/category",categoryRouter)

app.use("/uploads-file",express.static("uploads/avatar"));

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server running on port", PORT);
    })
}); //connect to MongoDB
