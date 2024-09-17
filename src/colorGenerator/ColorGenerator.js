import React from "react";
import SingleColor from "./SingleColor";
import ColorForm from "./ColorForm";
import "./colorGenerator.css";

const ColorGenerator = () => {
  return (
    <div>
      <h3>Color Generator</h3>
      <ColorForm />
      <SingleColor />
    </div>
  );
};

export default ColorGenerator;
