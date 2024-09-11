import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import ToursLoading from "./ToursLoading";

const url = "https://www.course-api.com/react-tours-project";

const RenderedTours = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

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
  return (
    <div>
      <Tours tours={tours} />
    </div>
  );
};

export default RenderedTours;
