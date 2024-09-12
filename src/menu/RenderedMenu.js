import React, { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";

const RenderedMenu = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main>
      <Title text='Our Menu' />
      <Menu items={menuItems} />
    </main>
  );
};

export default RenderedMenu;
