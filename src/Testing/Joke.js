import React from "react";

const Joke = ({ joke, punchline }) => {
  return (
    <div>
      <h1>{joke}</h1>
      <h2>{punchline}</h2>
    </div>
  );
};

export default Joke;
