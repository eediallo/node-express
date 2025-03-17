import { tasks } from "../data.js";

// get all tasks
const getAllTasks = (req, res) => {
  res.send("All items");
};

// create a task
const createTask = (req, res) => {
  const { task } = req.body;
  if (!task) {
   return res.status(400).json({ success: false, msg: "Fail to create task" });
  }
  res.status(201).json({ success: true, task: task });
};

// get single task
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


const deleteTask = (req, res) => {
  res.send("delete task");
};

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
