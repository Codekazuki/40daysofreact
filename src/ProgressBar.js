import React from "react";
import "./index.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className='outer'>
      <div style={{ width: `${progress}%` }} className='inner'>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
