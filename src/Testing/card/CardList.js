import React from "react";
import Card from "./Card";

const details = {
  phrase: "halleluya",
};

const CardList = () => {
  const cardList = details.map((item) => {
    return (
      <div>
        <Card phrase={item.phrase} />
      </div>
    );
  });
  return <div>{cardList}</div>;
};

export default CardList;
