import React from "react";
import { useGlobalContext } from "./context";
import Hero from "./Hero";
import NavBar from "./NavBar";
import SubMenu from "./SubMenu";
import SideBar from "./SideBar";
import "./strapi.css";

const Strapi = () => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();
  console.log(isSideBarOpen);
  return (
    <div>
      <NavBar />
      <Hero />
      <SubMenu />
      <SideBar />
    </div>
  );
};

export default Strapi;
