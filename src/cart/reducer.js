import {
  CLEAR_CART,
  INCREASE,
  DECREASE,
  REMOVE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  throw new Error(`no matching type:${action.type}`);
};
export default reducer;
