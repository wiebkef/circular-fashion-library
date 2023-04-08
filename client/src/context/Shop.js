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
        if (!state.includes(payload.item)) {
          return [...state, payload.item];
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
