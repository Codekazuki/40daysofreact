import BirthdayState from "./Testing/BirthdayState";
import CardList from "./Testing/card/CardList";
import Disciple2 from "./Testing/list/Disciple2";
import Disciples from "./Testing/list/Disciples";
import EuropeanTeams from "./Testing/list/EuropeanTeams";
import RenderedBirthday from "./Testing/RenderedBirthday";

import RenderedTours from "./tours/RenderedTours";
import "../src/questions/questions.css";
import "../src/tours/tour.css";
import "../src/reviews/review.css";
import "../src/menu/menu.css";
import "../src/tabs/tabs.css";

import RenderedReviews from "./reviews/RenderedReviews";
import RenderedQuestion from "./questions/RenderedQuestion";
import RenderedMenu from "./menu/RenderedMenu";
import { SiRender } from "react-icons/si";
import RenderedTabs from "./tabs/RenderedTabs";

function App() {
  return (
    <div className='App'>
      <RenderedTabs />
      <RenderedMenu />
      {/* <RenderedQuestion /> */}
      {/* <RenderedReviews /> */}
      {/* <RenderedTours /> */}
      {/* <BirthdayState /> */}
      {/* <Disciple2 /> */}
      {/* <Disciples /> */}
      {/* <EuropeanTeams /> */}
      {/* <CardList /> */}
      {/* <RenderedBirthday /> */}
    </div>
  );
}

export default App;
