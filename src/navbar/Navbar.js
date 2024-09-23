import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { social, links } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  // const linkStyles = {
  //   height: showLinks
  //     ? `${linksRef.current.getBoundingClientRect().height}px`
  //     : "0px",
  // };
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button className='nav-toggle'>
            <FaBars onClick={toggleLinks} />
          </button>
        </div>
        {showLinks && (
          <div
            className='links-container'
            ref={linksContainerRef}
            // style={linkStyles}
          >
            <ul className='links' ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <ul>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <div className='' key={id}>
                <a href={url}>{icon}</a>
              </div>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
