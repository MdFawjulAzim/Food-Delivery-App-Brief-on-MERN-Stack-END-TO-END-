import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

if(!process.env.MONGODB_URL){
    throw new Error('No MONGODB_URL provided in the .env file');
}

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');
    }catch(err){
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

export default connectDB;