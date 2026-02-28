import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Conneted DB HOST : ${connection.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB Connection Error" , error.message)
        process.exit(1);
    }
}
export {connectDB}