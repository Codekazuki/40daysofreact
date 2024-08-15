import React from "react";
import pix from "../images/pix.png";
import phone from "../images/call.png";
import agent from "../images/agent.png";
import "./test.css";

const Card = () => {
  return (
    <section className='card'>
      <img src={pix} className='cardImage' alt='pix' />
      <h1>Temitope Agbowuro</h1>
      <div>
        <img src={phone} alt='call' />
        <p>08069477780</p>
      </div>
      <div>
        <img src={agent} alt='agent' />
        <p>12345678910</p>
      </div>
      <div></div>
    </section>
  );
};

export default Card;
