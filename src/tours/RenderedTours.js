import React, { useState } from "react";
import Tours from "./Tours";

const RenderedTours = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  return (
    <div>
      <Tours />
    </div>
  );
};

export default RenderedTours;
