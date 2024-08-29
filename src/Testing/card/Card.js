import React from "react";

const Card = ({ phrase, num, date }) => {
  return (
    <div>
      <h1>{phrase}</h1>
      <h3>{num}</h3>
      <h3>{date}</h3>
    </div>
  );
};

export default Card;
