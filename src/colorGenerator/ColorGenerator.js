import React, { useState } from "react";

import SingleColor from "./SingleColor";
import ColorForm from "./ColorForm";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const ColorGenerator = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  toast.error("error");
  return (
    <div>
      <ToastContainer />
      <ColorForm />
      <SingleColor colors={colors} />
    </div>
  );
};

export default ColorGenerator;
