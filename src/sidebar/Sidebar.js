import React from "react";
import logo from "../pix.png";
import { social, links } from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

// value={
//         (closeModal,
//         openModal,
//         closeSideBar,
//         openSideBar,
//         isModalOpen,
//         isSideBarOpen)
//       }
const Sidebar = () => {
  const { closeSideBar, openSideBar, isSideBarOpen } = useGlobalContext();

  return (
    <aside className='sidebarrrrrrrr'>
      <div className='sidebar-header'>
        <img
          src={logo}
          alt='behave'
          className='logo'
          style={{ width: "4rem", borderRadius: "50%" }}
        />
        <button onClick={closeSideBar} className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { text, id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
