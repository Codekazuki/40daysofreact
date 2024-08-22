import React from "react";
import "./birthday.css";

const Birthday = ({ image, name, date, department, contact }) => {
  return (
    <section className='big-container'>
      {image ? (
        <img src={image} alt='image' />
      ) : (
        <h2>Photo suppose show here</h2>
      )}
      <div className='small-container'>
        {name ? (
          <h1 className='name'>{name}</h1>
        ) : (
          <h1>No name for this member</h1>
        )}
        <h2 className='date'>{date}</h2>
        <h2
          className='department
        '
        >
          {department}
        </h2>
        <h3 className='contact'>{contact}</h3>
      </div>
    </section>
  );
};

export default Birthday;
