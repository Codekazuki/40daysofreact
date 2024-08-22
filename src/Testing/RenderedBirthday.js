import React from "react";

import { january } from "./birthdayData";
import Birthday from "./Birthday";

const RenderedBirthday = () => {
  const birthdayList = january.map((celebrant, index) => {
    <Birthday
      key={index}
      name={celebrant.name}
      date={celebrant.date}
      departmant={celebrant.department}
      contact={celebrant.contact}
      img={celebrant.img}
    />;
    return <div>{birthdayList};</div>;
  });
};

export default RenderedBirthday;
