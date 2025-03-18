import { Task } from "../models/tasks.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/customError.js";

const fetchTasksFromDB = async () => {
  try {
    const tasksData = await Task.find({});
    return tasksData;
  } catch (err) {
    console.error(err.message);
  }
};

// get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await fetchTasksFromDB();
  if (tasks.length === 0) {
    return next(createCustomError("No task available. Please add one", 404));
  }
  res.status(200).json({ success: true, tasks });
});

// create a task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ success: true, task: task });
});

// get single task
const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
   return next(createCustomError(`Task with id ${taskID} not found`, 404))
  }
  res.status(200).json({ success: true, task });
});

// delete task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`Task with id ${taskID} not found`, 404));
  }
  res.status(200).json({ success: true, task });
});

// update task
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const { name } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(
    taskID,
    { name },
    { new: true, runValidators: true }
  );

  res.status(200).json({ success: true, updatedTask });
});

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
