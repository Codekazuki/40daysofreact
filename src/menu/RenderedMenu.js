import React, { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const RenderedMenu = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  return (
    <main>
      <Title text='Our Menu' />
      <Categories categories={categories} />
      <Menu items={menuItems} />
    </main>
  );
};

export default RenderedMenu;
