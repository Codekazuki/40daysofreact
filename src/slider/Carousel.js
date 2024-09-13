import React, { useState } from "react";
import { shortList, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

console.log(shortList);
const Carousel = () => {
  const [people, setPeople] = useState(longList);

  const nextSlide = () => {
    console.log("next");
  };
  const prevSlide = () => {
    console.log("prev");
  };

  return (
    <div className='slider-container'>
      {people.map((person) => {
        const { id, image, name, quote, title } = person;
        console.log(person);
        return (
          <article className='slider next-slide' key={id}>
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='quote'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button className='prev' onClick={() => prevSlide()}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => nextSlide()}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
