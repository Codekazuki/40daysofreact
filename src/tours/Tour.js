import React from "react";
import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className='tour'>
      <img className='tour-image' src={image} alt={name} />
      <span className='tour-price'>${price}</span>
      <div>
        <h5 className='tour-name'>{name}</h5>
        <p className='tour-info'>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
            className='btn'
          >
            continue reading
          </button>
        </p>
      </div>

      <button onClick={() => removeTour(id)}>RemoveTour</button>
    </div>
  );
};

export default Tour;
