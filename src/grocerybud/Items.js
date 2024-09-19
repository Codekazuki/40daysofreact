import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ deleteItem, items, editStatus, clearList }) => {
  return (
    <div className='items'>
      {items.map((singleItem) => {
        return (
          <>
            <SingleItem
              key={singleItem.id}
              deleteItem={deleteItem}
              item={singleItem}
              editStatus={editStatus}
              clearList={clearList}
            />
          </>
        );
      })}
      <button className='btn' onClick={() => clearList([])}>
        ClearList
      </button>
    </div>
  );
};

export default Items;
