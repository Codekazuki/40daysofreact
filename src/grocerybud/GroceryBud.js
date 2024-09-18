import React, { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import "./groceryBud.css";

const GroceryBud = () => {
  const [items, setItems] = useState([]);

  const deleteItem = (itemId) => {
    const newList = items.filter((sorted) => sorted.id !== itemId);
    setItems(newList);
  };
  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  return (
    <section>
      <Form addItem={addItem} />
      <Items deleteItem={deleteItem} items={items} />
    </section>
  );
};

export default GroceryBud;
