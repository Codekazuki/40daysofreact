import React from "react";
import { useGlobalContext } from "./context";

const SideBar = () => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();
  return (
    <section
      className={isSideBarOpen ? "sidebar-wrapper.show" : "sidebar-wrapper"}
    >
      {isSideBarOpen && (
        <div>
          <h1>This is the SideBar</h1>
          <button onClick={closeSideBar} className='close-btn'>
            close sidebar
          </button>
        </div>
      )}
    </section>
  );
};

export default SideBar;
