import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <div>
      <h1>Our Tours</h1>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
