import React, { useState } from "react";
import data from "./data";
import "./lorem.css";

const Lorem = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    const generate = data.slice(0, amount);
    setText(generate);
  };
  return (
    <section className='section-center'>
      <h3>Lorem Ipsium Form</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
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
      {text.map((item, index) => {
        return <p key={item.index}>{item} </p>;
      })}
    </section>
  );
};

export default Lorem;
