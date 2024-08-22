import React from "react";

const Birthday = ({ img, name, date, department, contact }) => {
  return (
    <section>
      <div>
        <h1>{name}</h1>
        <h2>{date}</h2>
        <h2>{department}</h2>
        <h3>{contact}</h3>
        {name ? <h1>{name}</h1> : <h1>No name for this member</h1>}
      </div>
    </section>
  );
};

export default Birthday;
