import { useContext, createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  REMOVE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increaseQuantity = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increaseQuantity }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
