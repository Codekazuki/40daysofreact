import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import sublinks from "./data";

const SideBar = () => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();
  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className='sidebar-container'>
        <h1>This is the SideBar</h1>
        <button onClick={closeSideBar} className='close-btn'>
          <IoMdClose />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item) => {
            const { page, pageId, links } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
      //{" "}
    </aside>
  );
};

export default SideBar;
