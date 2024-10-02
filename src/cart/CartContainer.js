import React from "react";
import cartItems from "./data";

const CartContainer = () => {
  const cartArray = [...cartItems];
  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
        {/* {cart items} */}
      </header>
    </section>
  );
};

export default CartContainer;
