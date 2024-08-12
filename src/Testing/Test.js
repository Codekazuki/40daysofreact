import React from "react";
import "./test.css";

const Test = () => {
  return (
    <div>
      <BigTeam />
    </div>
  );
};

const Club = () => {
  return <h1>Chelsea</h1>;
};
const Slogan = () => <h2>We are back</h2>;

const BigTeam = () => {
  return (
    <>
      <Club />
      <Slogan />
    </>
  );
};

export default Test;
