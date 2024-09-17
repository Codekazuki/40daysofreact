import React, { useState } from "react";

import SingleColor from "./SingleColor";
import ColorForm from "./ColorForm";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const ColorGenerator = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  toast.success("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return (
    <div>
      <ToastContainer position='top-center' />
      <ColorForm />
      <SingleColor colors={colors} />
    </div>
  );
};

export default ColorGenerator;
