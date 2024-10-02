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
import { getTotals } from "./utils";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const initialState = {
  loading: true,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increaseQuantity = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decreaseQuantity = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  const fetchData = async () => {
    const resp = await fetch(url);
    const cart = await resp.json();
    console.log(cart);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
