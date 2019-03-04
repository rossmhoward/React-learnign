import React, { Component } from 'react';
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Call the standard static header. Render in HTML with <Header />
import Header from './components/layout/Header';
// Call the Component. Render in HTML with <Todos />
import Todos from './components/Todos';
// Call the Add Todo Component. Render in HTML with <AddTodo />
import AddTodo from './components/AddTodo';
import Gangs from './components/Gangs';
import About from './components/pages/About';
// Call the Territory Component. Render in HTML with <Territory />
import Territory from './components/layout/Territory';
// import uuid  from 'uuid';
import Axios from 'axios';

import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      // This is a promise, when the json is loaded, this will happen.
      .then(res => this.setState({ todos: res.data }))
  }

  // Toggle done or not done items
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        // Rather than setting this to true, we use !(not) to set it to the opposite of it's current state to allow us to toggle between true and false
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete a row
  delTodo = (id) => {
    // ${id} = delete request
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      // Spread operator: ... lists what is currently in the array
      // This isn't deleting from a backend database, just a the FE UI. 
      // This is a promise, when the delete has happened, this will follow. 
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  // Add Todo
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      // This is a promise, when the post has happened, this will follow. 
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Gangs />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Territory />
                {/* <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} /> */}
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
