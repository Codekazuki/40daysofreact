import React from "react";
import "../Testing/ath.css";

const Athlete = ({ img, rating, reviewcount, country, title, price }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <div>
        <span>{rating}</span>
        <span> {country} </span>
      </div>
      <h3>{title}</h3>
      <div>
        <h1>
          From $<span>{price}</span>
        </h1>
        <span>/person</span>
      </div>
    </div>
  );
};

export default Athlete;
