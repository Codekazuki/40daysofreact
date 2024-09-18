import React, { useState } from "react";

const GroceryBud = () => {
  const [items, setItems] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      <h1>Grocery Board</h1>
      <form>
        <label htmlFor='item' name='item'>
          Item
        </label>
        <input
          placeholder='input your item'
          id='item'
          value={items}
          onChange={(e) => e.target.value}
          type='text'
        />
        <button type='submit' onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default GroceryBud;
