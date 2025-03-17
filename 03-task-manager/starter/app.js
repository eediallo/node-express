import express, { application } from "express";
import { tasksRouter } from "./routes/tasks.js";
const app = express();

// parse json
app.use(express.json())

const port = 3000;

tasksRouter.get('/hello', (req, res)=> {
res.send('Task Manager App')
})

// setup tasks router
app.use('/api/v1/tasks', tasksRouter)

app.listen(port, () => console.log(`Sever is listening on port ${port}...`));
