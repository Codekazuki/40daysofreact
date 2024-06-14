import { useState, useEffect } from "react";
import Axios from "axios";

const UseStateBasics = () => {
  const [excuse, setExcuse] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);
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
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <>
      <h1>useState basics</h1>
      <button onClick={fetchCatFact}>Generate CatFact</button>
      <h3>{catFact}</h3>
      <input
        type='text'
        placeholder='Input your first name here'
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={getDataPerson}>Predict Age</button>
      <h1>
        {name} is {age} years old after reviewing {count} data
      </h1>
      <section>Generate An Excuse</section>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <p>{excuse}</p>
    </>
  );
};

export default UseStateBasics;
