import { tasks } from "../data.js";
import { Task } from "../models/tasks.js";

const fetchTasksFromDB = async () => {
  try {
    const tasksData = await Task.find({});
    return tasksData;
  } catch (err) {
    console.error(err.message);
  }
};

// get all tasks
const getAllTasks = async (req, res) => {
  const tasks = await fetchTasksFromDB();
  if (tasks.length === 0) {
    return res.status(404).json({ success: false, msg: "No task found." });
  }
  res.status(200).json({ success: true, tasks });
};

// create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, task: task });
  } catch (err) {
    res.status(404).json({ success: false, msg: "Failed to create task" });
  }
};

// get single task
const getSingleTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `Task with id ${taskID} not found` });
    }
    res.status(200).json({ success: true, task: task });
  } catch (err) {
    res.status(404).json({ success: false, msg: err });
  }
};

// update task
const updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  const oldTask = tasks.find((t) => t.id === Number(id));
  if (!oldTask) {
    return res
      .status(404)
      .json({ success: false, msg: `Task with id ${id} not found` });
  }

  const updatedTasks = tasks.map((t) => {
    if (t.id === Number(id)) {
      t.task = task;
    }
    return t;
  });

  res.status(200).json({ success: true, tasks: updatedTasks });
};

// delete task
const deleteTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === Number(id));
  if (!task) {
    return res
      .status(404)
      .json({ success: false, msg: `Task with ${id} not found` });
  }
  const updatedTasks = tasks.filter((t) => t.id !== Number(id));
  res.status(201).json({ success: false, tasks: updatedTasks });
};

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
