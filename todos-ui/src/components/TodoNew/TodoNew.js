import React, {useRef} from "react";
import "./TodoNew.scss"

//Functional component to add new a todo list
//Onclick submit function is used to add the todo with new details.
const NewTodo = (props) => {
    const newTitle = useRef(null);
    const newDescription = useRef(null);
    const newDate = useRef(null);
    const newTime = useRef(null);

    const submitToDoHandler = (e) =>{
        e.preventDefault();
        let newTodo={
            "title":newTitle.current.value,
            "description":newDescription.current.value,
            "dueTime":newTime.current.value,
            "dueDate":newDate.current.value,
            "done":"true"
        }
        props.addNew(newTodo);
    }
    return (
        <div className="div-form">
        <form className={(props.formHidden)==true?"new-to-do-form-hidden":"new-to-do-form-show"} id="new-to-do-form">
            <h2>Add a new Todo Item:</h2>
            <input className="new-input" ref={newTitle} id="to-do-add-title" placeholder="Enter Title" /><br/>
            <textarea rows="4" cols="50" ref={newDescription} id="to-do-add-details" className="new-input" placeholder="Enter Description"></textarea><br/>
            <input className="new-input" ref={newTime} type="time" id="to-do-add-time" name="appt" min="00:00" max="23:59" /><br/>
            <input className="new-input" ref={newDate} type="date" id="to-do-date" name="to-do-date" value="2018-07-22" min="2018-01-01" max="2018-12-31" /><br/>
            <button onClick={submitToDoHandler} id="to-do-add-new" className="button-1" type="submit">Submit</button>
        </form>
        </div>
    );
}

export default NewTodo;