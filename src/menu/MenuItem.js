import React from "react";

const MenuItem = ({ title, category, price, img, desc }) => {
  console.log(img);
  return (
    <article className='menu-item'>
      <img src={img} alt={title} />
    </article>
  );
};

export default MenuItem;
