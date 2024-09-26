import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SideBar = () => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();
  return (
    <section
      className={isSideBarOpen ? "sidebar-wrapper.show" : "sidebar-wrapper"}
    >
      {isSideBarOpen && (
        <div className='sidebar-wrapper.show'>
          <h1>This is the SideBar</h1>
          <button onClick={closeSideBar} className='close-btn'>
            <IoMdClose />
          </button>
        </div>
      )}
    </section>
  );
};

export default SideBar;
