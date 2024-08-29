import React from "react";
import Card from "./Card";
import "./card.css";

const details = [
  {
    phrase: "halleluya",
    name: "ayo",
    date: "5TH October,19XX",
  },
  {
    name: "Adebayo",
    date: "7th july",
  },
];

// these are the props ==>
// name, phrase, num, date
const CardList = () => {
  const cardList = details.map((item) => {
    return (
      <div>
        <Card phrase={item.phrase} name={item.name} date={item.date} />
      </div>
    );
  });
  return <div className='card'>{cardList}</div>;
};

export default CardList;
