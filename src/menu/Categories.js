import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            onClick={() => filterItems(category)}
            type='button'
            className='filter-btn'
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
