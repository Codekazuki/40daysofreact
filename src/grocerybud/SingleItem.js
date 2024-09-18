import React, { useState } from "react";

const SingleItem = ({ item, deleteItem }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className=' grocery'>
      <input
        className='check'
        type='checkbox'
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        className='grocery-item'
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button className='btn remove-btn' onClick={() => deleteItem(item.id)}>
        remove
      </button>
    </div>
  );
};

export default SingleItem;
