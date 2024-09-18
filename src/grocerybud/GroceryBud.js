import React, { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const GroceryBud = () => {
  const [items, setItems] = useState([]);
  const deleteItem = () => {};
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
