import { useContext, createContext, useState } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };
  return (
    <AppContext.Provider value={{ isSideBarOpen, openSideBar, closeSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

//the hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
