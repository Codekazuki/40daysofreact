import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import ToursLoading from "./ToursLoading";

const url = "https://www.course-api.com/react-tours-project";

const RenderedTours = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const clearTours = () => {
    setTours([]);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return <ToursLoading />;
  }
  if (tours.length === 0) {
    return (
      <div>
        <h1>No Tours Left</h1>
        <button onClick={fetchTours}>Fetch Tours again</button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} clearTours={clearTours} removeTour={removeTour} />
    </div>
  );
};

export default RenderedTours;
