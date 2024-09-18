import React, { useState } from "react";
import Form from "./Form";

const GroceryBud = () => {
  const [items, setItems] = useState([]);

  return (
    <section>
      <Form />
    </section>
  );
};

export default GroceryBud;
