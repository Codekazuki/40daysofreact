import React, { useState } from "react";

const ColorForm = () => {
  const [color, setColor] = useState("");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(color);
  };
  return (
    <section className='container'>
      <h4>Color generator</h4>

      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='#051087'
          onChange={handleChange}
          value={color}
        />
        <button className='btn' style={{ background: color }}>
          Generate Color
        </button>
      </form>
    </section>
  );
};

export default ColorForm;
