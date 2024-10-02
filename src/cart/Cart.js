import React from "react";
import CartContainer from "./CartContainer";
import "./cart.css";
import NavBar from "./NavBar";
import { useGlobalContext } from "./context";

const Cart = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className='loading'></div>
      </main>
    );
  }
  return (
    <div>
      <NavBar />
      <CartContainer />
    </div>
  );
};

export default Cart;
