import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const groceries = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries
    };
  }

  toggleItem = id => {
    this.setState(prevState => {
      return {
        groceries: prevState.groceries.map(item => {
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
      name: itemName,
      id: Date.now(),
      purchased: false
    };
    this.setState(prevState => {
      return {
        groceries: [...prevState.groceries, newItem]
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          groceryItems={this.state.groceries}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default List;
