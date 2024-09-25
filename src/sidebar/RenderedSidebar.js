import React from "react";
import "./sidebar.css";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

const RenderedSidebar = () => {
  return (
    <div>
      <Home />
      <Modal />
      <Sidebar />
    </div>
  );
};

export default RenderedSidebar;
