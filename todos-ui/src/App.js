import React, { Component, useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import NewTodo from './components/TodoNew/TodoNew';
import List from './components/List/List';
import UpdateTodo from './components/UpdateTodo/UpdateTodo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

//There are 2 types of components: Functional component and Class component
//We can also use mix of both. It doesn't have to be all class
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [pageLoad, setPageLoad] = useState(false);
  const [formHidden, setFormHidden] = useState(true);


//   //There are 2 objects which store data for a component. 1. props object 2. state object
//   //Properties: Something which is passed by the component, something which is received by the component
//   //State: The data which is owned by that component. We can update it
//   constructor(props){
//     super(props);
//     this.state = {
//       todos: []
//     }
//   }
  function formChange() {
    if (formHidden == true) {
      setFormHidden(false);
    }
    else {
      setFormHidden(true);
    }
  }

//   //This is used to fetch the data from the Web API
//     componentDidMount() {
//         fetch("data/todo.json").then((response) => response.json())
//         .then((todos) => {
//           this.setState(({todos}));
//         });
//     }

  const fetchAllTodos = () => {
    fetch("http://localhost:3001/todo").then(res=>res.json()).then((result)=>{
      setTodos(result)
    })
  }

  const addTodo = (newTodo) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
  };
    fetch("http://localhost:3001/todo", requestOptions).then(fetchAllTodos);
  }

  function fetchTodo(id) {
    fetch("http://localhost:3001/todo/" + id).then(res => res.json()).then((result) => {
      setTodo(result);
    });
  }

  function listUpdate(id, newTodoJson) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodoJson)
    };
    fetch("http://localhost:3001/todo/" + id, requestOptions).then(fetchAllTodos);
  }
  
  if(!pageLoad){
    setPageLoad(true);
    fetchAllTodos();
  }

  

  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={
              <div>
              <Navbar/>
              <List addFormHidden={formHidden} toggleAddNew={formChange} saveTodoUpdate={fetchTodo} listUpdate={listUpdate} todos={todos} />
              <NewTodo formHidden={formHidden} addNew={addTodo} todos={todos} />
              </div>
            }/>
            <Route path="/update" element={
              <UpdateTodo listUpdate={listUpdate} todoItem={todo}/>
            }/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
