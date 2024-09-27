import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const SubMenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const handleMouseLeave = (event) => {
    setPageId(null);
  };
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a href={url} key={id}>
              {" "}
              {label}
              {icon}{" "}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
