import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour, clearTours }) => {
  return (
    <section>
      <h1 className='tour-name'>Our Tours</h1>
      <div className='tour-list'>
        {tours.map((tour) => {
          return <Tour removeTour={removeTour} key={tour.id} {...tour} />;
        })}
      </div>
      <div>
        <button onClick={clearTours}>Clear Tour</button>
      </div>
    </section>
  );
};

export default Tours;
