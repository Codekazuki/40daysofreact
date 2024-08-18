import React from "react";
import "./test.css";

const Joke = ({ joke, punchline, isPun }) => {
  return (
    <div className='ajoke'>
      {joke ? (
        <h1>Setup: {joke}</h1>
      ) : (
        <h1>There is suppose to be a set up here</h1>
      )}

      {punchline && (
        <p>
          <span>Punchline :</span> {punchline}
        </p>
      )}
      {isPun ? <h1>THIS IS PUN</h1> : <h1>THIS IS NOT PUN</h1>}
    </div>
  );
};

export default Joke;
