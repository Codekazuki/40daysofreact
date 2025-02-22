import BirthdayState from "./Testing/BirthdayState";
import CardList from "./Testing/card/CardList";
import Disciple2 from "./Testing/list/Disciple2";
import Disciples from "./Testing/list/Disciples";
import EuropeanTeams from "./Testing/list/EuropeanTeams";
import RenderedBirthday from "./Testing/RenderedBirthday";

import RenderedTours from "./tours/RenderedTours";
// import "../src/questions/questions.css";
// import "../src/tours/tour.css";
// import "../src/reviews/review.css";
// import "../src/menu/menu.css";
// import "../src/tabs/tabs.css";
// import "../src/colorGenerator/colorGenerator.css";
// import "react-toastify/dist/ReactToastify.css";

import RenderedReviews from "./reviews/RenderedReviews";
import RenderedQuestion from "./questions/RenderedQuestion";
import RenderedMenu from "./menu/RenderedMenu";
import RenderedTabs from "./tabs/RenderedTabs";
import Slider from "./slider/Slider";
import Lorem from "./lorem/Lorem";
import ColorGenerator from "./colorGenerator/ColorGenerator";
import GroceryBud from "./grocerybud/GroceryBud";
import RenderedNavbar from "./navbar/RenderedNavbar";
import RenderedSidebar from "./sidebar/RenderedSidebar";
// import { AppProvider } from "./sidebar/context";
// import Strapi from "./strapi/Strapi";
// import { AppProvider } from "./strapi/context";
// import Cart from "./cart/Cart";
import { AppProvider } from "./cart/context";
import ProgressBar from "./ProgressBar";

function App() {
  return (
    <div className='App'>
      <ProgressBar />
      {/* <AppProvider>
        <Cart />
      </AppProvider> */}
      {/* <AppProvider>
        <Strapi />
      </AppProvider> */}

      {/* <AppProvider>
        <RenderedSidebar />
      </AppProvider> */}
      {/* <RenderedNavbar /> */}
      <GroceryBud />
      {/* <ColorGenerator /> */}
      {/* <Lorem /> */}
      {/* <Slider /> */}
      {/* <RenderedTabs /> */}
      {/* <RenderedMenu /> */}
      {/* <RenderedQuestion /> */}
      {/* <RenderedReviews /> */}
      {/* <RenderedTours /> */}
      {/* <BirthdayState /> */}
      {/* <Disciple2 /> */}
      {/* <Disciples /> */}
      {/* <EuropeanTeams /> */}
      <CardList />
      {/* <RenderedBirthday /> */}
    </div>
  );
}

export default App;
