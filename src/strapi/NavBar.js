import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const { openSideBar } = useGlobalContext();

  return (
    <nav>
      <div className='nav-center'>
        <h3 className='logo'>The Nav</h3>
        <button className='btn toggle-btn' onClick={openSideBar}>
          <FaBars />
        </button>
      </div>
      <NavLinks />
    </nav>
  );
};

export default NavBar;
