import { useContext, createContext, useEffect, useReducer } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const greet = "good morning sir";
  return (
    <AppContext.Provider value={{ greet }}>{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
