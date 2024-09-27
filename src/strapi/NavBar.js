import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const { openSideBar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>The Nav</h3>
        <button className='btn toggle-btn' onClick={openSideBar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
