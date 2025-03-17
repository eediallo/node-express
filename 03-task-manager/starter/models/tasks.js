import mongoose from 'mongoose'

// schema
const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

// model
const Task = mongoose.model('Task', TaskSchema)
export {Task}