import React from "react";
import "../Testing/ath.css";

const Athlete = ({ img, rating, reviewcount, country, title, price }) => {
  const names = ["ayodele", "babafemi", "toyin"];
  const capitalisedNames = names.map((name) => name.toUpperCase());
  console.log(names);
  console.log(capitalisedNames);
  return (
    <div className='athlete'>
      <div>
        <img src={img} alt={title} />
      </div>
      <div className='first'>
        <span className='span1'>
          {rating}({reviewcount})
        </span>
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
