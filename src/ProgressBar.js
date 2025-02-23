import React from "react";
import "./index.css";

const percents = [0, 5, 20];

const ProgressBar = ({ progress }) => {
  return (
    <section className='cont'>
      <div className='outer'>
        <div
          style={{
            width: `${progress}%`,
            color: `${progress > 3 ? "white" : "black"}`,
          }}
          className='inner'
        >
          {progress}%
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
