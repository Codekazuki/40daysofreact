import React from "react";
import "../Testing/ath.css";

const Athlete = ({ img, rating, reviewcount, country, title, price }) => {
  return (
    <div className='athlete'>
      <div>
        <img src={img} alt={title} />
      </div>
      <div className='first'>
        <span>{rating}</span>
        <span> {country} </span>
      </div>
      <h3>{title}</h3>
      <div className='second'>
        <h3>
          From $<span>{price}</span>
          <span>/person</span>
        </h3>
      </div>
    </div>
  );
};

export default Athlete;
