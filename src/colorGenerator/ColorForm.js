import React, { useState } from "react";

const ColorForm = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className='container'>
      <h4>Color generator</h4>

      <form className='color-form' onSubmit={handleSubmit}>
        <input type='color' onChange={handleChange} value={color} />
        <input
          type='text'
          placeholder='#051087'
          onChange={handleChange}
          value={color}
        />
        <button className='btn' type='submit' style={{ background: color }}>
          Generate Color
        </button>
      </form>
    </section>
  );
};

export default ColorForm;
