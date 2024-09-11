import React from "react";

const Tour = ({ id, image, info, name, price }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <span>${price}</span>
      <div>
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
      <button className='btn'>continue reading</button>
    </div>
  );
};

export default Tour;
