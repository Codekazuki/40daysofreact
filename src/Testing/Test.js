import React, { useEffect, useState } from "react";
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
  const handleClick = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      {" "}
      <button onClick={handleClick}></button> {count}
    </div>
  );
};

export default Test;
