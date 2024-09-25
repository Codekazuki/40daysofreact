import React from "react";
import { FaBars } from "react-icons/fa";
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
  const { openSideBar, closeSideBar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSideBar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
