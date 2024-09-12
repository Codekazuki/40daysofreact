import React from "react";

const Title = ({ text }) => {
  return (
    <section className='title'>
      <h2>{text || "Default title"}</h2>
      <div className='underline'></div>
    </section>
  );
};

export default Title;
