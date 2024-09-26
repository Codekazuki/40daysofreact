import React from "react";
import { useGlobalContext } from "./context";

const NavBar = () => {
  const { openSideBar } = useGlobalContext();

  return (
    <nav>
      <h3>The Nav</h3>
      <button className='btn' onClick={openSideBar}>
        open
      </button>
    </nav>
  );
};

export default NavBar;
