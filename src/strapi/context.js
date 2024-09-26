import { useContext, createContext, useState } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { info, SetInfo } = useState(false);
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
