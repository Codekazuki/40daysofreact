import { useState, useEffect } from "react";
import Axios from "axios";

const UseStateBasics = () => {
  const [catFact, setCatFact] = useState("");
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <>
      <h1>useState basics</h1>
      <button onClick={fetchCatFact}>Generate CatFact</button>
      <h3>{catFact}</h3>
    </>
  );
};

export default UseStateBasics;
