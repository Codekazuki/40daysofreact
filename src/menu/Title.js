import React from "react";

const Title = ({ text }) => {
  return (
    <section className='title'>
      <div>{text || "Default title"}</div>
      <div className='title-underline'></div>
    </section>
  );
};

export default Title;
