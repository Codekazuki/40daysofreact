import React from "react";
import { useGlobalContext } from "./context";

const Strapi = () => {
  const { isSideBarOpen, openSideBar, closeSideBar } = useGlobalContext();
  console.log(isSideBarOpen);
  return <div>Strapi</div>;
};

export default Strapi;
