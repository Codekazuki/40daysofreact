import React from "react";
import "./test.css";

const Card = (props) => {
  return (
    <section className='card'>
      <img src={props.profileimage} className='cardImage' alt='pix' />
      <h1>{props.name}</h1>
      <div>
        <img src={props.phoneicon} alt='call' />
        <p>{props.phonenumber}</p>
      </div>
      <div>
        <img src={props.agenticon} alt='agent' />
        <p>{props.number}</p>
      </div>
      <div></div>
    </section>
  );
};

export default Card;
