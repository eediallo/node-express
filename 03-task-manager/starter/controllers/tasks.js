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
    res.status(500).json({ success: false, msg: err });
  }
};

// update task
const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  const { name } = req.body;

  try {
    const oldTask = await Task.findOne({ _id: taskID });
    if (!oldTask) {
      return res
        .status(404)
        .json({ success: false, msg: `Task with id ${taskID} not found` });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      taskID,
      { name },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, task: updatedTask });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

// delete task
const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `Task with id ${taskID} not found` });
    }
    res.status(200).json({ success: true, task: task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
