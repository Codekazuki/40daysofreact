import React from "react";

const Disciple = (props) => {
  const { name, occupation, knownFor, mannerOfDeath, placeOfOrigin, number } =
    props;
  const handleName = () => {
    alert(name);
  };
  return (
    <div className='disciple'>
      <p className='number'>{number + 1}</p>
      <h1>Name : {name}</h1>
      <h1>Occupation:{occupation}</h1>
      <h1>Place of origin: {placeOfOrigin}</h1>
      <h1>Known for: {knownFor}</h1>
      <h1>Manner of death: {mannerOfDeath}</h1>
      <button onClick={handleName}>Show name</button>
    </div>
  );
};

export default Disciple;
