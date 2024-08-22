import Card from "./Testing/Card";
import pix from "./images/pix.png";
import phoneicon from "./images/call.png";
import agent from "./images/agent.png";
import Profile from "./Profile";
import Joke from "./Testing/Joke";
import Athlete from "./Testing/Athlete";

import RenderedBirthday from "./Testing/RenderedBirthday";
function App() {
  return (
    <div className='App'>
      <RenderedBirthday />
      <Athlete
        img={pix}
        rating='5.0'
        reviewcount='6'
        country='Nigeria'
        title='Greatness is brewing'
        price='180'
      />
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
        <Profile
          title='Greatness'
          profileimage={pix}
          about='its coming together'
        />
        <Profile
          title='Greatness'
          profileimage={pix}
          about='its coming together'
        />
      </section>
      <section className='cards'>
        <Joke
          joke='lorem is a good joke'
          punchline='I dont know what they mean by punchline'
          isPun={true}
        />

        <Joke
          punchline='ali is a boy....simbi is a girl'
          joke='This is just a random joke'
          isPun={false}
        />
        <Joke
          punchline='ali is a boy....simbi is a girl'
          joke='This is just a random joke'
          isPun={true}
        />
        <Joke
          punchline='ali is a boy....simbi is a girl'
          joke='This is just a random joke'
          isPun={true}
        />
        <Joke
          punchline='ali is a boy....simbi is a girl'
          joke='This is just a random joke'
          isPun={false}
        />
        <Joke
          punchline='ali is a boy....simbi is a girl'
          joke='This is just a random joke'
          isPun={true}
        />
      </section>

      {/* <Test /> */}
    </div>
  );
}

export default App;
