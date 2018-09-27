import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json'
import './components/TodoForms'
import TodoForm from './components/TodoForms';


class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
  }
  handleAddTodo=(todo)=>{
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }
  handleRemoteTask=(index)=>{
    // console.log(i);
    if(window.confirm('estas seguro que deseas eliminar esta tarea')){ 
    this.setState({
      todos:this.state.todos.filter((e, i)=>{
        return i !== index
      })
    })
   }
  }
  render() {
    const todos = this.state.todos.map((todo, i)=>{
      return(
        // console.log(todo)
        <div className= "col-md-4"> 
           <div className="card mt-4">
              <div className="card-header">
                 <h3>{todo.title}</h3>
               <span className="badge badge-pill badge-danger ml-2"> 
                 { todo.priority }
               </span>
               </div>
           <div className="card-body">     
                 <p>{ todo.responsible }</p>
                 <p>{ todo.description }</p>
              </div>
              <div className="card-footer">
                <button className= "btn btndanger" onClick={ this.handleRemoteTask.bind(this, i)}>Delete</button>
              </div>
          </div>
      </div>
      )
    })
    return (

      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              <span className="badge badge-pill badge-danger ml-2">
                { this.state.todos.length}
              </span>
             Tasks
            </a>
          </nav>
          <div className= "container">
            <div className="row">
            { todos }
            </div>
            <div className = " form-group ">
            <TodoForm onAddTodo ={ this.handleAddTodo}/>
            </div>
          </div>

        
          <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

export default App;
