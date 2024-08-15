import "./App.css";
import Card from "./Testing/Card";
import Test from "./Testing/Test";
import pix from "./images/pix.png";
import phoneicon from "./images/call.png";
import agent from "./images/agent.png";
import Profile from "./Profile";
function App() {
  return (
    <div className='App'>
      <section className='cards'>
        <Card
          profileimage={pix}
          name='Ayodele Agbowuro'
          phoneicon={phoneicon}
          phonenumber='08069477780'
          agenticon={agent}
          number='12345678910'
        />
        <Card
          profileimage={pix}
          name='Babafemi Agbowuro'
          phoneicon={phoneicon}
          phonenumber='08069477780'
          agenticon={agent}
          number='12345678910'
        />
        <Card
          profileimage={pix}
          name='Oluwatoyin Agbowuro'
          phoneicon={phoneicon}
          phonenumber='08069477780'
          agenticon={agent}
          number='12345678910'
        />
      </section>
      <section className='cards'>
        <Profile title='A new dawn' profileimage={pix} about='lorem ipsium ' />
        <Profile
          title='Greatness'
          profileimage={pix}
          about='its coming together'
        />
      </section>

      <Test />
    </div>
  );
}

export default App;
