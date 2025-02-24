import React, { useEffect, useState } from "react";
import "./index.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);
  return (
    <section className='cont'>
      <div className='outer'>
        <div
          style={{
            transform: `translateX(${animatedProgress - 100}%)`,
            color: `${animatedProgress > 3 ? "white" : "black"}`,
          }}
          className='inner'
          role='progressbar'
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-valuemin={0}
        >
          {animatedProgress}%
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
