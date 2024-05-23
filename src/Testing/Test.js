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
  return <h1>Hello</h1>;
};

export default Test;
