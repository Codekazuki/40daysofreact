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
    name: "Adedayo",
    date: "17th june",
  },
  {
    phrase: "Rejoice",
    num: "4",
    name: "Stephen",
    date: "4th may",
  },
  {
    phrase: "Divine",
    num: "10",
    name: "Adeola",
    date: "27th august",
  },
  {
    phrase: "Peace",
    num: "5",
    name: "Temitops",
    date: "5th May",
  },
];

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
