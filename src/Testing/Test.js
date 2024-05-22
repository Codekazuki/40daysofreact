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
    const counter = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(counter);
  }, []);
  console.log(count);
  return <h1>It's now {count} seconds</h1>;
};

export default Test;
