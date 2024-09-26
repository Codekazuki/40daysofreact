import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const { openSideBar } = useGlobalContext();

  return (
    <nav>
      <div className='nav-center'>
        <h3 className='logo'>The Nav</h3>
        <button className='btn' onClick={openSideBar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
