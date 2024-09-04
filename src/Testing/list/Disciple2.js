import React from "react";
import { disciples } from "./disciplesData";
import Disciple from "./Disciple";

const Disciple2 = () => {
  const listOfDisciple2 = disciples.map((dis) => {
    return <Disciple {...dis} />;
  });
  return (
    <div className='list'>
      <form action=''>
        <h1>Disciples Form</h1>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' placeholder='name' /> <br />
        <label htmlFor='occupation'>occupation: </label>
        <input type='text' name='occupation' placeholder='occupation' /> <br />
        <label htmlFor='name'>Place Of Origin: </label>
        <input
          type='text'
          name='Place Of Origigin'
          placeholder='Place Of Origigin'
        />{" "}
        <br />
        <label htmlFor='name'>Known For: </label>
        <input type='text' name='Known For' placeholder='Known For' /> <br />
        <label htmlFor='name'>Manner Of Death: </label>
        <input
          type='text'
          name='Manner Of Death'
          placeholder='Manner Of Death'
        />
      </form>{" "}
      <br />
      {listOfDisciple2}
    </div>
  );
};

export default Disciple2;
