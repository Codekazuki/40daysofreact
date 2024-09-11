import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  //   const toggleShow = () => {
  //     const toggle = showInfo ? true : false;
  //     setShowInfo(toggle);
  //   };
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <span>
          {showInfo ? (
            <AiOutlineMinus onClick={() => setShowInfo(!showInfo)} />
          ) : (
            <AiOutlinePlus onClick={() => setShowInfo(!showInfo)} />
          )}
        </span>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
