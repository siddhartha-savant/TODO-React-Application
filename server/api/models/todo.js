// Importing Mongoose for using it as a layer between ExpressJs and MongoDB
import Mongoose from "mongoose";

/**
 * Fixing the Schema for the data to be saved in the database
 * todoSchema having details for the todo list like title, description, createdDate, lastModifiedDate
 */
const TodoSchema = new Mongoose.Schema({
    // adding the title tag for the todo item along with the type: String for the title
    // Making it a required property
    "title": {
        type: String,
        required: "Title is required."
    },

    // adding the description tag for the todo item along with the type: String for the Description 
    // Making it a required property
    "description": {
        type: String,
        required: "Description is required."
    },

    // adding the dueDate tag for the todo item along with the type: Date for the dueDate 
    // Making it a required property
    "dueDate": {
        type: Date,
        required: "Due date is required."
    },

    // adding the dueTime tag for the todo item along with the type: String for the dueTime 
    // Making it a required property
    "dueTime": {
        type: String,
        required: "Time is required."
    },

    // adding the completed tag for the todo item along with the type: Boolean for the completed 
    // Making it a required property
    "done": {
        type: Boolean,
        required: "Done is a required field."
    },

    // adding the createdDate tag for the todo item along with the type: String for the createdDate
    // adding the createdDate using the inbuilt function Date.now
    "createdDate": {
        type: Date,
        default: new Date().toLocaleString()
    },

    // adding the lastModifiedDate tag for the todo item along with the type: Date for the lastModifiedDate
    // adding the lastModifiedDate using the inbuilt function Date.now
    "lastModifiedDate": {
        type: Date,
        default: new Date().toLocaleString()
    }
},
    {
        versionKey: false
    });

const Todo = Mongoose.model('Todo', TodoSchema);
export default Todo;