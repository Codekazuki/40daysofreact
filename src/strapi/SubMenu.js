import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const SubMenu = () => {
  const { pageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  return (
    <div className='submenu'>
      <h5>{currentPage?.page}</h5>
      <div
        className='sub-menu-links'
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
