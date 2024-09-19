import React, { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import "./groceryBud.css";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};
const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const GroceryBud = () => {
  const [items, setItems] = useState(getLocalStorage());
  const clearList = () => {
    setItems([]);
    setLocalStorage([]);
    toast.success("List cleared successfully ✅");
  };

  const deleteItem = (itemId) => {
    const newList = items.filter((sorted) => sorted.id !== itemId);
    setItems(newList);
    setLocalStorage(newList);
    toast.success("Item deleted suvvessfully");
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
    toast.success("Item Added successfully ✅");
  };
  const editStatus = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-left' />
      <Form addItem={addItem} />
      <Items
        clearList={clearList}
        deleteItem={deleteItem}
        items={items}
        editStatus={editStatus}
      />
    </section>
  );
};

export default GroceryBud;
