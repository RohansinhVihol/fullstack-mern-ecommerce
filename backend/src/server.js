import { app } from "./app.js";
import fs from "fs"

import dotenv from "dotenv";
import { connectDB } from "./db/MongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
dotenv.config();

const port = process.env.PORT;

connectCloudinary()

connectDB().then(() => {
    app.listen(port, () => {
        console.log("server running on a " + port)
})
}).catch((err) => {
    console.log("MongoDb connection failed",err.message)
})

