import express from "express";
import {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";

const tasksRouter = express.Router();

tasksRouter.get("/", getAllTasks);
tasksRouter.post('/', createTask);
tasksRouter.put('/:id', updateTask)
tasksRouter.delete('/:id', deleteTask)
tasksRouter.get('/:id', getSingleTask)

export { tasksRouter };
