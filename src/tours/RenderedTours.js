import React, { useEffect, useState } from "react";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const RenderedTours = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <div>
      <Tours />
    </div>
  );
};

export default RenderedTours;
