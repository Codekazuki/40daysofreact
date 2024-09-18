import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ deleteItem, items }) => {
  console.log(deleteItem, items);
  return (
    <div>
      {items.map((singleItem) => {
        return <SingleItem deleteItem={deleteItem} item={items} />;
      })}
    </div>
  );
};

export default Items;
