import React from "react";
import "./test.css";

const Card = ({
  profileimage,
  name,
  phoneicon,
  phonenumber,
  agenticon,
  number,
}) => {
  return (
    <section className='card'>
      <img src={profileimage} className='cardImage' alt='pix' />
      <h1>{name}</h1>
      <div>
        <img src={phoneicon} alt='call' />
        <p>{phonenumber}</p>
      </div>
      <div>
        <img src={agenticon} alt='agent' />
        <p>{number}</p>
      </div>
      <div></div>
    </section>
  );
};

export default Card;
