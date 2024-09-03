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
      <h1>Name: {name}</h1>
      <h1>Occupation:{occupation}</h1>
      <h1>Place of origin: {placeOfOrigin}</h1>
      <h1>Known for: {knownFor}</h1>
      <h1>Manner of: {mannerOfDeath}</h1>
    </div>
  );
};

export default Disciple;
