import React, { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import "./groceryBud.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  }
};
const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const GroceryBud = () => {
  getLocalStorage();
  const [items, setItems] = useState([]);

  const deleteItem = (itemId) => {
    const newList = items.filter((sorted) => sorted.id !== itemId);
    setItems(newList);
    setLocalStorage(newList);
  };
  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items deleteItem={deleteItem} items={items} />
    </section>
  );
};

export default GroceryBud;
