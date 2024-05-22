import React, { useEffect, useState } from "react";
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
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    });
  }, []);
  return <h1>hello</h1>;
};

export default Test;
