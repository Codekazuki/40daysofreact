import React, { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";

const GroceryBud = () => {
  const [items, setItems] = useState([]);
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
    </section>
  );
};

export default GroceryBud;
