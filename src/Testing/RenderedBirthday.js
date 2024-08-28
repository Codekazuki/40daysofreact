import React from "react";

import Birthday from "./Birthday";
import { january } from "./birthdayData";

const RenderedBirthday = () => {
  console.log(january);
  const birthdayList = january.map((celebrant) => {
    return (
      <Birthday
        image={celebrant.image}
        name={celebrant.name}
        date={celebrant.birthday}
        department={celebrant.department}
        contact={celebrant.contact}
        img={celebrant.image}
      />
    );
  });
  return <div className='hello'>{birthdayList};</div>;
};

export default RenderedBirthday;
