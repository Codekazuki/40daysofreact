import React from "react";
import { useGlobalContext } from "./context";
// value={
//         (closeModal,
//         openModal,
//         closeSideBar,
//         openSideBar,
//         isModalOpen,
//         isSideBarOpen)
//       }
const Home = () => {
  const { openSideBar, closeSideBar } = useGlobalContext();
  console.log(openSideBar);
  console.log(closeSideBar);
  return <div>Home</div>;
};

export default Home;
