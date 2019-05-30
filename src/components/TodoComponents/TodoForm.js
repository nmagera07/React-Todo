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

  render() {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
            placeholder="Enter Todo Item"
          />
          <button class="first-btn">Add Todo</button>
        </form>
        <div className="btn">
        <button onClick={this.props.deleteItem} >
          Clear Completed
        </button>
        <button onClick={this.props.deleteAll}>Clear All</button>
        </div>
        
      </div>
    );
  }
}

export default TodoForm;
