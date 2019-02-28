import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  
  state = {
    title: ''
  }

  // e.preventDefault prevents the form from trying to submit data to the file. 
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    // After a new todo has been submitted, reset the title value to empty for the next entry
    this.setState({ title: '' });
  }
  
  // [e.target.name]: method will allow you to match multiple input NAME values against the values in the state array above. 
  // If the email field was filled in and had a name of email, it would attempt to match that to a value in the array
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          placeholder="Add Todo ..." 
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: '10', padding: '5px' }}
        />
        <input 
          type="submit" 
          value="Submit"
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
