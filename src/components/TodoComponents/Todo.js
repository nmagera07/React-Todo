import React from "react";

import { data } from "./data";
import Todo from "./Todo";

class HogwartsStudents extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: data,
      task: ""
    };
  }

  addTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.name
    };
    this.setState({
      todoData: [...this.state.todoData, newTodo],
      task: ""
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
            <Todo taskOnProps={todoFromMap} />
          ))}
        </div>

        <form onSubmit={this.addTodo}>
          <input
            placeholder="Task"
            onChange={this.handleChanges}
            value={this.state.name}
            name="name"
          />

          <button>Add a Todo</button>
        </form>
        <button>Clear</button>
      </div>
    );
  }
}

export default HogwartsStudents;
