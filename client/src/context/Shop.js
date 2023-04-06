import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import ItemCards from "../components/ItemCards";

/* ---------- context setup ------------ */
export const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);
const cartReducer = (state, action) => {
  console.log("Hello from the reducer function!");
  const { type, payload } = action;
  switch (type) {
    case "addToCart":
      return [...state, payload.item];
    case "removeFromCart":
      const copyCart = [...state];
      const findItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state.splice(findItemIndex, 1);
      return copyCart;
    case "clearCart":
      return [];

    default:
      throw new Error("Invalid action type for cart reducer");
  }
};

/* ---------- cart reducer ------------ */

const ShopStates = ({ children }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  const handleClearCart = () => {
    console.log("Clearing cart");
    cartDispatch({ type: "clearCart" });
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartDispatch,
        handleClearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopStates;
