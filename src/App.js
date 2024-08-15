import "./App.css";
import Card from "./Testing/Card";
import Test from "./Testing/Test";

function App() {
  return (
    <div className='App'>
      <section className='cards'>
        <Card />
        <Card />
        <Card />
      </section>

      <Test />
    </div>
  );
}

export default App;
