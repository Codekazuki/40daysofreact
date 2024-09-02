import React from "react";

import Birthday from "./Birthday";
import { january } from "./birthdayData";

const RenderedBirthday = () => {
  const birthdayList = january.map((celebrant) => {
    const { image, name, birthday, department, contact } = celebrant;
    return (
      <Birthday
        image={image}
        name={name}
        date={birthday}
        department={department}
        contact={contact}
      />
    );
  });
  return <div className='hello'>{birthdayList};</div>;
};

export default RenderedBirthday;
