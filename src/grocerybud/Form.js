import React, { useState } from "react";
import { toast } from "react-toastify";
const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("Add Item b4 submission");
      return;
    }
    addItem(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Today's Task</h4>
      <div className='form-control'>
        {/* <label htmlFor='item' name='item'>
          Item
        </label> */}
        <input
          placeholder='input your task'
          id='item'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type='text'
          className='form-input'
        />
        <button className='btn' type='button'>
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
