import express from "express";
import { connectDB } from "./db/connection.js";
import { tasksRouter } from "./routes/tasks.js";
import dotenv from 'dotenv';
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
dotenv.config();

const app = express();

const publicDir = new URL('./public', import.meta.url).pathname

// serves static files
app.use(express.static(publicDir))

// parse json
app.use(express.json())

const port = process.env.PORT || 3000;

// setup tasks router
app.use('/api/v1/tasks', tasksRouter)

// not found router
app.use(notFound)

// parse error handler
app.use(errorHandler)

// ensure that connection to db is successful before running the server
const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Sever is listening on port ${port}...`));
    }catch(err){

    }
}

start()

