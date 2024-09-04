import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl)
.then(() => {
            app.listen(PORT, ()=>{
                console.log(`Server running on port ${PORT}`)
        });
})
.catch((err) => console.log('Error connecting to MongoDB:', err));
