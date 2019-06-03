import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  console.log(props);
  return (
    <div className="shopping-list">
      {props.taskItems.map(item => {
        return <Todo key={item.id} toggleItem={props.toggleItem} item={item} />;
      })}
    </div>
  );
};

export default TodoList;