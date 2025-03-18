import express from "express";
import { connectDB } from "./db/connection.js";
import { tasksRouter } from "./routes/tasks.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const publicDir = new URL('./public', import.meta.url).pathname

// serves static files
app.use(express.static(publicDir))

// parse json
app.use(express.json())

const port = 3000;

// setup tasks router
app.use('/api/v1/tasks', tasksRouter)

// ensure that connection to db is successful before running the server
const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Sever is listening on port ${port}...`));
    }catch(err){

    }
}

start()

