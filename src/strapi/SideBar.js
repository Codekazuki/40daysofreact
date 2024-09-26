import React from "react";
import { useGlobalContext } from "./context";

const SideBar = () => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();
  return (
    <>{isSideBarOpen ? <div>This is the SideBar </div> : <h1>hello</h1>}</>
  );
};

export default SideBar;
