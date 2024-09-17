import React, { useState } from "react";

const ColorForm = () => {
  const [color, setColor] = useState("#871005");
  const handleChange = (e) => {};
  return (
    <section className='container'>
      <h4>Color generator</h4>

      <form action=''>
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
