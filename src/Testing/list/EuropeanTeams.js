import React from "react";
import { europeanFootballTeams } from "./footballTeams";
import Team from "./Team";

const EuropeanTeams = (team) => {
  const listOfEuropeanTeams = europeanFootballTeams.map((team) => {
    const {
      name,
      league,
      europeanTitles,
      mostFamousCoach,
      highestVictory,
      highestDefeat,
    } = team;
    return (
      <Team
        name={name}
        league={league}
        europeanTitls={europeanTitles}
        mostFamousCoach={mostFamousCoach}
        highestVictory={highestVictory}
        highestDefeat={highestDefeat}
      />
    );
  });
  return <div>{listOfEuropeanTeams}</div>;
};

export default EuropeanTeams;
