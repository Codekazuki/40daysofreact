import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ deleteItem, items, editStatus }) => {
  return (
    <div className='items'>
      {items.map((singleItem) => {
        return (
          <SingleItem
            key={singleItem.id}
            deleteItem={deleteItem}
            item={singleItem}
            editStatus={editStatus}
          />
        );
      })}
    </div>
  );
};

export default Items;
