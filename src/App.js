import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const tasks = [
  {
    task: "Mow the lawn",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Vacuum the floor",
    id: 15288170843745,
    completed: false
  },
  {
    task: "Buy food",
    id: 15288170843897,
    completed: false
  },
  {
    task: "Clean garage",
    id: 15288170843333,
    completed: false
  }
];

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  toggleItem = id => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    });
  };

  addItem = itemName => {
    // add an item from the form to our list
    const newItem = {
      task: itemName,
      id: Date.now(),
      purchased: false
    };
    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, newItem]
      };
    });
  };

  deleteItem = () => {
    this.setState(prevState => {
      return {tasks: prevState.tasks.filter(todo => !todo.completed)}
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} deleteItem={this.deleteItem}/>
        </div>
        <TodoList taskItems={this.state.tasks} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default List;
