import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    // Map Method
    // map(todo) is similar to forEach, each prop from todos is defined as a single 'todo'.
    return this.props.todos.map((todo) => (
      // Todo is now an object. This will print a value for each Todo.
      // Todo is now passing a prop to whichever component wishes to use it (TodoItem)
      // Todo key prevents no unique Key error when mapping out the array
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
