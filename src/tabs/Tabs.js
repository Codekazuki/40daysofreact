import React from "react";

const Tabs = ({ jobs }) => {
  return (
    <div className='btn-container'>
      {jobs.map((item) => {
        return (
          <button key={item.id} className='job-btn'>
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
