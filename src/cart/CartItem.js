import React, { useState } from "react";
import cartItems from "./data";

const CartItem = () => {
  const [data, setData] = useState(cartItems);
  const handleDelete = (id) => {
    const newList = data.filter((sorted) => sorted.id !== id);
    setData(newList);
    console.log(id);
  };
  return (
    <div>
      {data.map((item) => {
        const { id, title, price, amount, img } = item;
        return (
          <ul className='cart-item' key={id}>
            <li>
              <h2>{title}</h2>
              <span>{price}</span>
              <img src={img} alt={title} />
              <button onClick={() => handleDelete(id)} className='btn'>
                delete
              </button>
              <hr />
            </li>
          </ul>
        );
      })}

      {data.length === 0 ? (
        <>
          <h4>The List is empty at the moment</h4>
          <button className='btn' onClick={() => setData(cartItems)}>
            Fetch List Again
          </button>
        </>
      ) : (
        <button className='btn' onClick={() => setData([])}>
          ClearList
        </button>
      )}
    </div>
  );
};

export default CartItem;
