import React from "react";
import CartContainer from "./CartContainer";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = () => {
  return (
    <div>
      <CartContainer />
      <CartItem />
    </div>
  );
};

export default Cart;
