import React from "react";
import Item from "../Todo/Todo";
import './List.scss';

function List(props) {
    function listUpdate(id, newJson) {
        props.listUpdate(id, newJson);
    }
    function saveTodoUpdate(id) {
        props.saveTodoUpdate(id);
    }

    // export class List extends React.Component{

    //     constructor(props){
    //         super(props);
    //         this.onChangeTitle = this.onChangeTitle.bind(this);
    //         this.onChangeDescription = this.onChangeDescription.bind(this);
    //         this.getTodo = this.getTodo.bind(this);
    //         this.updateTodo = this.updateTodo.bind(this);
    //         this.deleteTodo = this.deleteTodo.bind(this);
    
    //         this.state = {
    //             currentTodo: {
    //               id: null,
    //               title: "",
    //               description: "",
    //             },
    //             message: ""
    //         };
    //     }

    // render() {
    //     const {currentTodo} = this.state;
    //     return (
    //       <div>
    //         {currentTodo ? (
    //           <div>
    //             <h4>Todo</h4>
    //             <form>
    //               <div>
    //                 <label htmlFor="title">Title</label>
    //                 <input
    //                   type="text"
    //                   id="title"
    //                   value={currentTodo.title}
    //                   onChange={this.onChangeTitle}
    //                 />
    //               </div>
    //               <div>
    //                 <label htmlFor="description">Description</label>
    //                 <input
    //                   type="text"
    //                   id="description"
    //                   value={currentTodo.description}
    //                   onChange={this.onChangeDescription}
    //                 />
    //               </div>
    //             </form>
    
    //             <button
    //               className="badge badge-danger mr-2"
    //               onClick={this.deleteTodo}>
    //               Delete
    //             </button>
    
    //             <button
    //               type="submit"
    //               className="badge badge-success"
    //               onClick={this.updateTodo}>
    //               Update
    //             </button>

    //             <p>{this.state.message}</p>
    //           </div>
    //         ) : (
    //           <div>
    //             <br />
    //             <p>Please click on a Todo</p>
    //           </div>
    //         )}
    //       </div>
    //     );
    //   }

    return (

        <div>
            <div className="container">
                <div className="header">
                    <div id="heading">ToDo List</div>
                </div>
            </div>
            <h2>
                Yet to Complete List:
            </h2>
            <div>
                {props.todos.map(item => {
                    if (item.done == false) { return (<Item updateText="Completed" listUpdate={listUpdate} saveTodoUpdate={saveTodoUpdate} todo={item} />); }
                })}
            </div>
            <h2>
                Completed Todo List:
            </h2>
            <div>
                {props.todos.map(item => {
                    if (item.done !== false) { return (<Item updateText={"Yet to do"} saveTodoUpdate={saveTodoUpdate} listUpdate={listUpdate} todo={item} />); }
                })}
            </div>
            <br /><br /><br />
            <div className="add-btn">
                <button className="toggle-button add-btn-color" onClick={props.toggleAddNew}>{(props.addFormHidden) == true ? "Add New" : "Done"}</button>
            </div>
        </div>

    );
}

export default List;