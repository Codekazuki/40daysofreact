import React, { useState } from "react";
import SingleColor from "./SingleColor";
import ColorForm from "./ColorForm";
import Values from "values.js";

const ColorGenerator = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(9));

  return (
    <div>
      <ColorForm />
      <SingleColor colors={colors} />
    </div>
  );
};

export default ColorGenerator;
