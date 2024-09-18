import React, { useState } from "react";
const SingleItem = ({ item, deleteItem }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className='single-item'>
      <input type='checkbox' onChange={() => setIsChecked(!isChecked)} />
      <p>{item.name}</p>
      <button className='btn remove-btn'>remove</button>
    </div>
  );
};

export default SingleItem;
