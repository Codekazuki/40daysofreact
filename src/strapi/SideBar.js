import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import sublinks from "./data";

const SideBar = () => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();
  return (
    // <aside className='sidebar'>
    <div className={isSideBarOpen ? "sidebar-wrapper.show" : "sidebar-wrapper"}>
      {isSideBarOpen && (
        <div className='sidebar-wrapper.show'>
          <h1>This is the SideBar</h1>
          <button onClick={closeSideBar} className='close-btn'>
            <IoMdClose />
          </button>
          <div className='sidebar-links'>
            {sublinks.map((item) => {
              console.log(item);
              return <h1>item</h1>;
            })}
          </div>
        </div>
      )}
    </div>
    // </aside>
  );
};

export default SideBar;
