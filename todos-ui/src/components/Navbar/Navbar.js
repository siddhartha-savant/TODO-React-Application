import React from 'react';
import './Navbar.scss';

export class Navbar extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
        <nav>
            <h1 className="title">Todo List Application</h1>
            <span className="developer">By Siddhartha Savant</span>
        </nav>
        );
    }
}

export default Navbar;