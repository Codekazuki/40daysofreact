import React, { useState } from "react";
import text from "./data";
import "./lorem.css";

console.log(text);
const Lorem = () => {
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <section className='section-center'>
      <h3>Lorem Ipsium Form</h3>
      <form
        className='lorem-form'
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        <label htmlFor='amount'>Paragraph:</label>
        <input
          name='amount'
          id='amount'
          type='number'
          value={count}
          onChange={handleChange}
          max='8'
          min='1'
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
    </section>
  );
};

export default Lorem;
