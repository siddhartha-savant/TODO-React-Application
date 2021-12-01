import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./UpdateTodo.scss"


//Functional component to update a todo list
//Onclick submit function is used to update the todo with new details.
const UpdateTodo = (props) =>{
    const newTitle = useRef(null);
    const newDescription = useRef(null);
    const newDate = useRef(null);
    const newTime = useRef(null);
    let navigate = useNavigate();

    function onClickSubmit(e) {
        e.preventDefault();
        let newTodo = {
            "title": newTitle.current.value,
            "description": newDescription.current.value,
            "dueTime": newTime.current.value,
            "dueDate": newDate.current.value,
            "done": "true",
        };
        console.log(props.todoItem._id);
        props.listUpdate(props.todoItem._id, newTodo);
        alert("Updated the todo successfully");
        navigate("/");
    }
    return(
        <div className="div-form">
        <form className="new-to-do-form" id="new-to-do-form">
            <h2>Update a todo item:</h2>
            <input className="new-input" ref={newTitle} id="to-do-add-title" placeholder="Enter Title" type="text" defaultValue={props.todoItem.title}/><br/>
            <textarea rows="4" cols="50" ref={newDescription} id="to-do-add-details" className="new-input" placeholder="Enter Description" defaultValue={props.todoItem.description}></textarea><br/>
            <input className="new-input" ref={newTime} type="time" id="to-do-add-time" name="appt" value={props.todoItem.time} min="00:00" max="23:59" /><br/>
            <input className="new-input" ref={newDate} type="date" id="to-do-date" name="to-do-date" defaultValue={props.todoItem.dueDate} min="2018-01-01" max="2018-12-31" /><br/>
            <button onClick={onClickSubmit} id="to-do-add-new" className="button-1" type="submit">Update</button>
        </form>
        </div>
    )
}

export default UpdateTodo;