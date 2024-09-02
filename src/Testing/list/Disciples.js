import React from "react";
import { disciples } from "./disciplesData";
import Disciple from "./Disciple";

const Disciples = () => {
  const listOfDisciples = disciples.map((disciple) => {
    const { name, occupation, knownFor, mannerOfDeath, placeOfOrigin } =
      disciple;
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
  return <li className='list'>{listOfDisciples}</li>;
};

export default Disciples;
