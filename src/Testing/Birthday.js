import React from "react";
import "./birthday.css";

const Birthday = ({ image, name, date, department, contact }) => {
  return (
    <div className='small-container'>
      {image ? (
        <img src={image} alt='userimage' className='img' />
      ) : (
        <h2 className='img'>Photo suppose show here</h2>
      )}
      {name ? (
        <h1 className='name'>{name}</h1>
      ) : (
        <h1>No name for this member</h1>
      )}

      <h2 className='date'>{date}</h2>
      <h2 className='department'>{department}</h2>
      <h3 className='contact'>{contact}</h3>
    </div>
  );
};

export default Birthday;
