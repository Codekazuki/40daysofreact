import React, { useState } from "react";

const SingleItem = ({ item, deleteItem, editStatus }) => {
  return (
    <div className=' grocery'>
      <input
        checked={item.completed}
        className='check'
        type='checkbox'
        onChange={() => editStatus(item.id)}
      />
      <p className="{item.completed? 'completed':'grocery-item'}">
        {item.name}
      </p>
      <button className='btn remove-btn' onClick={() => deleteItem(item.id)}>
        remove
      </button>
    </div>
  );
};

export default SingleItem;
