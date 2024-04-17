import express  from "express";
import dotenv from 'dotenv';
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
dotenv.config();

const port = process.env.PORT || 5000;

import UserRoutes from './routes/userRoutes.js'

connectDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api/users',UserRoutes)

app.get('/',(req,res)=>res.send('server is ready'));

app.use(notFound)
app.use(errorHandler)
app.listen(port,()=> console.log(`server started at ${port}`))