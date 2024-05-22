import React from "react";
import "./test.css";
const Test = () => {
  return (
    <>
      <Hello />
      <h1 className='test'>Testing</h1>
    </>
  );
};

const Hello = () => {
  return <h1>hello</h1>;
};

export default Test;
