import React from "react";

const Tour = ({ id, image, info, name, price }) => {
  return (
    <div className='tour'>
      <img className='tour-image' src={image} alt={name} />
      <span className='tour-price'>${price}</span>
      <div>
        <h5 className='tour-name'>{name}</h5>
        <p className='tour-info'>{info}</p>
      </div>
      <button className='btn'>continue reading</button>
    </div>
  );
};

export default Tour;
