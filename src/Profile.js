import React from "react";
import "./Testing/test.css";

const Profile = (props) => {
  return (
    <section className='profile'>
      <div>
        <h1>{props.title}</h1>
        <img src={props.profileimage} alt={props.title} height='92px' />
        <h1>{props.about}</h1>
      </div>
    </section>
  );
};

export default Profile;
