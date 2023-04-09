import { createContext, useContext, useReducer } from "react";

/* ---------- context setup ------------ */
export const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);
const cartReducer = (state, action) => {
  console.log("Hello from the reducer function!");
  console.log(state);

  const { type, payload } = action;
  switch (type) {
    case "addToCart":
      if (state.length < 3) {
        if (!state.some((e) => e.id === payload.item.id)) {
          state = [...state, payload.item];
          localStorage.setItem("cart", JSON.stringify(state));
          return state;
        } else {
          alert("You cannot add the same item twice.");
        }
      } else {
        alert("You cannot add more than 3 items to the cart.");
      }
    case "removeFromCart":
      const copyCart = [...state];
      const findItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state.splice(findItemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(copyCart));
      return copyCart;
    case "clearCart":
      localStorage.removeItem("cart");
      return [];

    default:
      throw new Error("Invalid action type for cart reducer");
  }
};

/* ---------- cart reducer ------------ */

const ShopStates = ({ children }) => {
  const [cart, cartDispatch] = useReducer(
    cartReducer,
    JSON.parse(localStorage.getItem("cart")) || []
  );

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
