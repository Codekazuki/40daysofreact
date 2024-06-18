import { useState, useEffect } from "react";
import Axios from "axios";

const UseStateBasics = () => {
  const [excuse, setExcuse] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [count, setCount] = useState(null);
  const [catFact, setCatFact] = useState("");
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    fetchCatFact();
  }, []);

  const getDataPerson = () => {
    Axios.get(`https://api.agify.io?name=${name}`).then((res) => {
      setName(res.data.name);
      setAge(res.data.age);
      setCount(res.data.count);
    });
  };
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
        console.log(res.data);
      }
    );
  };
  let countt = 0;
  const handleClick = (name) => {
    countt++;
    if (countt < 2) {
      console.log(`na 1`);
    } else if (countt > 1 && countt < 3) {
      console.log(`i have been clicked by ${name} ${countt} times`);
    } else {
      console.log(`stop clicking me ${name}`);
    }
  };

  return (
    <>
      <h1>useState basics</h1>
      <button onClick={fetchCatFact}>Generate CatFact</button>
      <h3>{catFact}</h3>
      <input
        type='text'
        placeholder='Input your FIRST name here'
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Data Reviewed: {count}</h1>
      </div>
      <button onClick={getDataPerson}>Predict Age</button>

      <section>Generate An Excuse</section>
      <h1 className='excuse'> {excuse} </h1>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <button onClick={() => fetchExcuse("developers")}>Developers</button>
      <button onClick={() => handleClick("Coach")}>click me </button>
    </>
  );
};

export default UseStateBasics;
