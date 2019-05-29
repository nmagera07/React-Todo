import React from 'react';

import { data } from './data';
import TodoForm from './TodoForm';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: data,
      task: '',
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.name,
    };
    this.setState({
      todoData: [...this.state.todoData, newTodo],
      name: '',
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>

        <div>
          {this.state.todoData.map(todoFromMap => (
            <TodoForm taskOnProps={todoFromMap} />
          ))}
        </div>

        <form onSubmit={this.addTodo}>
          <input
            placeholder="Task"
            onChange={this.handleChanges}
            value={this.state.name}
            name="name"
          />

          <button>Add Todo</button>
          
        </form>
        <button>Clear</button>
      </div>
    );
  }
}

export default Todo;
