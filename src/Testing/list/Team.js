import React from "react";

const Team = ({
  name,
  league,
  europeanTitls,
  mostFamousCoach,
  highestVictory,
  highestDefeat,
}) => {
  return (
    <div className='team'>
      <h1>Name:{name}</h1>
      <h1>Plays in :{league}</h1>
      <h1>Has {europeanTitls} european titles</h1>
      <h1>
        the most famous coach of {name}is {mostFamousCoach}
      </h1>
      <h1>{highestVictory}</h1>
      <h1>{highestDefeat}</h1>
    </div>
  );
};

export default Team;
