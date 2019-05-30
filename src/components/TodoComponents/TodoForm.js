import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({
      item: ""
    });
  };

  deleteItem = () => {
    const removed = this.state.tasks
    removed.filter(element => element.completed !== false)
    this.setState({removed})
  }
    


  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
          placeholder="Enter Todo Item"
        />
        <button>Add Todo</button>
        <button >Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;