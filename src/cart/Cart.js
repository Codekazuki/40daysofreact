import React from "react";
import CartContainer from "./CartContainer";
import CartItem from "./CartItem";
import "./cart.css";
import NavBar from "./NavBar";

const Cart = () => {
  return (
    <div>
      <NavBar />
      <CartContainer />
      <CartItem />
    </div>
  );
};

export default Cart;
