import React from "react";
import "./sidebar.css";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

const RenderedSidebar = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};

export default RenderedSidebar;
