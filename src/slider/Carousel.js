import React, { useEffect, useState } from "react";
import { shortList, longList, roleList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(roleList);
  const [currPerson, setCurrPerson] = useState(0);

  const nextSlide = () => {
    setCurrPerson((c) => {
      const result = (c + 1) % people.length;
      return result;
    });
  };
  const prevSlide = () => {
    setCurrPerson((c) => {
      const result = (c - 1 + people.length) % people.length;
      return result;
    });
  };
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currPerson]);

  return (
    <div className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, image, name, quote, title } = person;
        console.log(person);
        return (
          <article
            className='slider'
            style={{
              transform: `translateX(${100 * (personIndex - currPerson)}%)`,
              opacity: personIndex === currPerson ? 1 : 0,
            }}
            key={id}
          >
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
