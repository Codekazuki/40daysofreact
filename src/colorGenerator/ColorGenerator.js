import React, { useState } from "react";

import SingleColor from "./SingleColor";
import ColorForm from "./ColorForm";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const ColorGenerator = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <ToastContainer position='top-center' />
      <ColorForm addColor={addColor} />
      <SingleColor colors={colors} />
    </div>
  );
};

export default ColorGenerator;
