import React from "react";

const MenuItem = ({ title, category, price, img, desc }) => {
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='img' />
      {/* <h1>{title}</h1> */}
    </article>
  );
};

export default MenuItem;
