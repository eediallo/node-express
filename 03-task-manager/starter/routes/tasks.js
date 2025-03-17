import express from 'express'
import { getTasks } from '../controllers/tasks.js'

const tasksRouter = express.Router()

tasksRouter.get('/',getTasks)


export{tasksRouter}