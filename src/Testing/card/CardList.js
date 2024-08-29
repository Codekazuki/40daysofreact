import React from "react";
import Card from "./Card";

const details = [
  {
    phrase: "halleluya",
    name: "ayo",
    date: "5TH October,19XX",
    num: "8",
  },
  {
    phrase: "Hossana",
    num: "8",
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
        <Card
          phrase={item.phrase}
          name={item.name}
          date={item.date}
          num={item.num}
        />
      </div>
    );
  });
  return <div className='cardlist'>{cardList}</div>;
};

export default CardList;
