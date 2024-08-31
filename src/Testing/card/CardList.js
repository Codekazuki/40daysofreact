import React from "react";
import Card from "./Card";
import { arrayOfObjects } from "./birthdayData";

const CardList = () => {
  const cardList = arrayOfObjects.map((item) => {
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
