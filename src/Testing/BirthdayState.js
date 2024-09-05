import React from "react";
import { january } from "./birthdayData";
import Birthday from "./Birthday";
import { useState } from "react";
import "./birthday.css";

const BirthdayState = () => {
  const [people, setPeople] = useState(january);
  const handleDelete = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const handleClearList = () => {
    setPeople([]);
  };

  return (
    <div className='list'>
      {people.map((person) => {
        const { id, name, birthday, department, image, contact } = person;
        return (
          <>
            <Birthday
              image={image}
              name={name}
              date={birthday}
              department={department}
              contact={contact}
            />
            <button onClick={() => handleDelete(id)}>Delete</button>
          </>
        );
      })}
      <button onClick={handleClearList}>Clear List</button>
    </div>
  );
};

export default BirthdayState;
