import React from 'react';


class TodoForm extends React.Component {
  render() {
    return (
        <div>
          <h3>{this.props.taskOnProps.task}</h3>
        </div>
      
    );
  }
}

export default TodoForm;