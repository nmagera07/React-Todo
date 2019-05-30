import React from "react";

import GroceryItem from "./Todo";

const GroceryList = props => {
  console.log(props);
  return (
    <div className="shopping-list">
      {props.groceryItems.map(item => {
        return (
          <GroceryItem
            key={item.id}
            toggleItem={props.toggleItem}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default GroceryList;
