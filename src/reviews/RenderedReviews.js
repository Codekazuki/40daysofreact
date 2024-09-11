import React, { useState } from "react";
import Reviews from "./Reviews";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const checkIndex = (number) => {
  if (number > people.length - 1) {
    return 0;
  }
  if (number < 0) {
    return people.length - 1;
  }
  return number;
};

const RenderedReviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const prevPerson = () => {
    setIndex((c) => {
      const newIndex = c - 1;
      return checkIndex(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((c) => {
      const newIndex = c + 1;
      return checkIndex(newIndex);
    });
  };
  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    setIndex(checkIndex(randomNumber));
  };

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
        <div className='btn-container'>
          <button onClick={prevPerson} className='prev-btn'>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
          Random Person
        </button>
      </article>
    </main>
  );
};

export default RenderedReviews;
