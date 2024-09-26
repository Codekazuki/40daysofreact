import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const { openSideBar } = useGlobalContext();

  return (
    <nav>
      <h3>The Nav</h3>
      <button className='btn' onClick={openSideBar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default NavBar;
