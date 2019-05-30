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
      <form onSubmit={this.addItem}>
        <input
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
      </form>
    );
  }
}

export default TodoForm;
