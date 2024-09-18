import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className='form-control'>
        {/* <label htmlFor='item' name='item'>
          Item
        </label> */}
        <input
          placeholder='input your item'
          id='item'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type='text'
          className='form-input'
        />
        <button className='btn' type='submit'>
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
