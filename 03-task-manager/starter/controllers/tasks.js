import { tasks } from "../data.js";

const getAllTasks = (req, res) => {
  res.send("All items");
};

const createTask = (req, res) => {
  const { task } = req.body;
  if (!task) {
   return res.status(400).json({ success: false, msg: "Fail to create task" });
  }
  res.status(201).json({ success: true, task: task });
};

const getSingleTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    return res
      .status(404)
      .json({ success: false, msg: `Task with id ${Number(id)} not found` });
  }
  res.status(200).json({ success: true, task: task });
};

const updateTask = (req, res) => {
  res.send("Update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
