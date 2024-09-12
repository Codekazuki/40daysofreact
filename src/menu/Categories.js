import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button type='button' className='filter-btn' key={category}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
