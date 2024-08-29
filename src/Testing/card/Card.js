import React from "react";
import "./card.css";

const Card = ({ name, phrase, num, date }) => {
  return (
    <div className='acard'>
      <h1>{phrase}</h1>
      <h3>{num}</h3>
      <h3>{date}</h3>
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
