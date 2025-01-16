import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'; 
import userRoutes from './route/user.route.js';
import bookRoutes from './route/book.route.js'; 
import userModel from './model/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import postRoutes from './route/post.route.js';  

const app = express();

dotenv.config();
const URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
  origin: process.env.URL, 
  credentials: true,
}));
app.use(cookieParser());

try {
  mongoose.connect(URI)
} catch (error) {
  console.log(" Error: ", error);
}

app.use('/book', bookRoutes);
app.use('/user', userRoutes);
app.use('/post', postRoutes);  

app.get('/', (req, res) => {
  res.send('hello')
});
app.listen(3000,()=>{
    console.log(`app listening on port 3000`);
});