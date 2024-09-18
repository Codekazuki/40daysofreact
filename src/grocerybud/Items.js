import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ deleteItem, items }) => {
  return (
    <div className='items'>
      {items.map((singleItem) => {
        return (
          <SingleItem
            key={singleItem.id}
            deleteItem={deleteItem}
            item={singleItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
