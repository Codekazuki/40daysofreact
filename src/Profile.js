import React from "react";
import "./Testing/test.css";

const Profile = ({ title, profileimage, about }) => {
  return (
    <section className='profile'>
      <div>
        <h1>{title}</h1>
        <img src={profileimage} alt={title} height='92px' />
        <h1>{about}</h1>
      </div>
    </section>
  );
};

export default Profile;
