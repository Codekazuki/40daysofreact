import React, { useState } from "react";
import SingleGangan from "./SingleGangan";
import { nanoid } from "nanoid";

const SingleColor = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color, index) => {
        return <SingleGangan key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default SingleColor;
