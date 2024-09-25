import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

// value={
//         (closeModal,
//         openModal,
//         closeSideBar,
//         openSideBar,
//         isModalOpen,
//         isSideBarOpen)
//       }

const Modal = () => {
  const { isModalOpen, openModal, closeModal } = useGlobalContext();

  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <h3>Modal Content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
