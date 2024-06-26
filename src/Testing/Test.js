import React, { useState } from "react";
import "./test.css";
const Test = () => {
  const handleClick = () => {
    console.log("I have been clicked");
    console.log("Still on Clicking");
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>

      <Hello />
      <h1 className='test'>Testing</h1>
    </>
  );
};

const Hello = () => {
  const [count, setCount] = useState(0);
  const handleAddClick = () => {
    setCount((c) => c + 1);
  };
  const handleLessClick = () => {
    setCount((c) => c - 1);
  };
  return (
    <div className='count'>
      <button onClick={handleAddClick} className='button'>
        Increment
      </button>
      <span className='num'>{count}</span>
      <button className='button' onClick={handleLessClick}>
        Decrement
      </button>
    </div>
  );
};

export default Test;
