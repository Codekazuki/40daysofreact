import React from "react";

const Disciple = ({
  name,
  occupation,
  knownFor,
  mannerOfDeath,
  placeOfOrigin,
}) => {
  return (
    <div className='disciple'>
      <p>Some Apostles are</p>
      <h1>{name}</h1>
      <h1>{occupation}</h1>
      <h1>{placeOfOrigin}</h1>
      <h1>{knownFor}</h1>
      <h1>{mannerOfDeath}</h1>
    </div>
  );
};

export default Disciple;
