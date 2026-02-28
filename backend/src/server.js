import { app } from "./app.js";

import dotenv from "dotenv";
import { connectDB } from "./db/MongoDB.js";
dotenv.config();

const port = process.env.PORT;

connectDB().then(() => {
    app.listen(port, () => {
    console.log("server running on a " + port)
})
}).catch((err) => {
    console.log("MongoDb connection failed",err.message)
})