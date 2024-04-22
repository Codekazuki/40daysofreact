import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function incr() {
    setCount(count + 1);
  }
  function dcr() {
    setCount(count - 1);
  }
  return (
    <div className='App'>
      <button onClick={incr}>increment</button>
      <h1>{count}</h1>
      <button onClick={dcr}>decrement</button>
      <h1>The number is now {count}</h1>
    </div>
  );
}

export default App;
