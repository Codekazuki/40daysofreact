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
  return (
    <div>
      {" "}
      <button onClick={handleAddClick}>Increment</button> {count}
    </div>
  );
};

export default Test;
