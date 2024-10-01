import React from "react";
import cartItems from "./data";

const CartItem = () => {
  return (
    <div>
      {cartItems.map((item) => {
        const { id, title, price, amount, img } = item;
        return (
          <ul>
            <li>
              <span>{amount}</span>
              <h3>{title}</h3>
              <span>{price}</span>
              <img src={img} alt={title} style={{ height: "4rem" }} />
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default CartItem;
