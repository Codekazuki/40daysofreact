import React, { useState } from "react";
import Reviews from "./Reviews";
import people from "./data";

const RenderedReviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[0];

  return (
    <div>
      <Reviews />
    </div>
  );
};

export default RenderedReviews;
