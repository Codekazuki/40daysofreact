import React from "react";
import "./test.css";

const Test = () => {
  return (
    <div className='grid-class'>
      <BigTeam />
      <BigTeam />
      <BigTeam />
    </div>
  );
};

const date = new Date();
const time = date.getHours();
let greetingTime;
let attach;
if (time < 12) {
  greetingTime = "good morning";
  attach = "am";
} else if (time > 12 && time < 17) {
  greetingTime = "good evening";
  attach = "pm";
} else {
  greetingTime = "goodnigt";
  attach = "pm";
}

const Club = () => {
  return (
    <h1>
      {greetingTime} its {time === 12 ? 12 : time}
      {attach} already
    </h1>
  );
};
const Slogan = () => <h2>We are back </h2>;

const BigTeam = () => {
  return (
    <>
      <Club />
      <Slogan />
    </>
  );
};

export default Test;
