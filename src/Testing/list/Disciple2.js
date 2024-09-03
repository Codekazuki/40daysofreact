import React from "react";
import { disciples } from "./disciplesData";
import Disciple from "./Disciple";

const Disciple2 = () => {
  const listOfDisciple2 = disciples.map((dis) => {
    const { name, occupation, knownFor, mannerOfDeath, placeOfOrigin } = dis;
    return (
      <Disciple
        name={name}
        occupation={occupation}
        knownFor={knownFor}
        mannerOfDeath={mannerOfDeath}
        placeOfOrigin={placeOfOrigin}
      />
    );
  });
  return <div className='list'>{listOfDisciple2}</div>;
};

export default Disciple2;
