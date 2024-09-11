import React, { useState } from "react";
import Reviews from "./Reviews";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const RenderedReviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[0];

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt={name} />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <h4 className='job'>{job}</h4>
        <h4 className='info'>{text}</h4>
      </article>

      <FaChevronLeft />
      <FaChevronRight />
      <Reviews />
    </main>
  );
};

export default RenderedReviews;
