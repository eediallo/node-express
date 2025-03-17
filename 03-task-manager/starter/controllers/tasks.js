const getAllTasks = (req, res) => {
  res.send("All items");
};


const createTask = (req, res) =>{
    const {task} = req.body
    if(!task){
        res.status(400).json({success: false, msg: 'Fail to create task'})
    }
    res.status(201).json({success: true, task: task})
}
const getSingleTask = (req, res) =>{
    res.send('Get single  task')
}
const updateTask = (req, res) =>{
    res.send('Update task')
}
const deleteTask = (req, res) =>{
    res.send('delete task')
}



export {getAllTasks, createTask, getSingleTask, updateTask, deleteTask}