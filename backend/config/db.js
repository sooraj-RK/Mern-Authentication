import mongoose from 'mongoose'
import dotenv from 'dotenv'

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect("mongodb+srv://soorajrk007:SRK5566@cluster0.zurfnyj.mongodb.net/mernauth?retryWrites=true&w=majority");
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB