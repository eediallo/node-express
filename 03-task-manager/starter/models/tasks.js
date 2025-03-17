import mongoose from 'mongoose'

// schema
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must not be empty'],
        trim: true,
        maxLength: [20, 'Name must be no more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// model
const Task = mongoose.model('Task', TaskSchema)
export {Task}