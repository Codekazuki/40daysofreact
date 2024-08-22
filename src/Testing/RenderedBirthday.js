import React from "react";
import "./birthday.css";

import Birthday from "./Birthday";
import { january } from "./birthdayData";

const RenderedBirthday = () => {
  const birthdayList = january.map((celebrant) => {
    return (
      <Birthday
        image={celebrant.image}
        name={celebrant.name}
        date={celebrant.birthday}
        departmant={celebrant.department}
        contact={celebrant.contact}
        img={celebrant.image}
      />
    );
  });
  return <div className='hello'>{birthdayList};</div>;
};

export default RenderedBirthday;
