import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";
import "./Todo.scss"

//Functional component to display a todo item
function Item(props) {
    const [classContentDes, setClassContentDes] = useState("content-hidden");
    let navigate = useNavigate();

    const listUpdate = () => {
        props.saveTodoUpdate(props.todo._id);
        navigate("/update");
    };

    function viewChange() {
        if (classContentDes === "content-hidden") {
            setClassContentDes("content-show");
        }
        else {
            setClassContentDes("content-hidden");
        }
    }

    const viewChangeTodo = () => {
        let done = false;
        if (props.todo.done == false) {
            done = true;
        }
        let newTodo = {
            "title": props.todo.title,
            "description": props.todo.description,
            "dueTime": props.todo.dueTime,
            "dueDate": props.todo.dueDate,
            "done": done,
        };
        props.listUpdate(props.todo._id, newTodo);
    };
    
    return (
        <div className="todo-list">
            <div className="todo-block">
                <button className="collapsible" onClick={viewChange}>{props.todo.title}</button>
                <button className={classContentDes}>{props.todo.description} <br />Due Date: {props.todo.dueDate} <br />Due Time: {props.todo.dueTime}</button>
            </div>
            <button className="toggle-button" onClick={viewChangeTodo}>{props.updateText}</button>
            <button className="toggle-button" onClick={listUpdate}>Update</button>

        </div>
    );
}

export default Item;