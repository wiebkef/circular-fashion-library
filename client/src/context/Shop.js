import { createContext, useContext, useState, useReducer, useEffect} from "react";
import {ItemCards} from "../components/ItemCards"

/* ---------- context setup ------------ */
export const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);

/* ---------- cart reducer ------------ */

const ShopStates = ({ children }) => {
  const [currWardrobe, setCurrWardrobe] = useState([]);
  const [newWardrobe, setNewWardrobe] = useState([]);

  const handleAddToWardrobe = (item) => {
    console.log("Adding item to wardrobe:", item);
    setNewWardrobe([...newWardrobe, item]);
  };
  const addToCart = 'addToCart', removeFromCart = 'removeFromCart'
  /* ---------- cart reducer ------------ */
  const cartReducer = (state, action) => {
    const { type, payload } = action 
    switch (type) {
      case addToCart:
        return [...state, payload];
      case "removeFromCart":
        return state.filter((item) => item.id !== action.payload.id);
      case "clearCart":
        return [];
      case "updateQuantity":
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        );
      default:
        throw new Error("Invalid action type for cart reducer");
    }
  };
  const [cartState, dispatch] = useReducer(cartReducer, []);

  const handleRemoveFromCart = (item) => {
    console.log("Removing item from cart:", item);
    dispatch({
      type: "removeFromCart",
      payload: { id: item.id },
    });
  };

  const handleClearCart = () => {
    console.log("Clearing cart");
    dispatch({ type: "clearCart" });
  };


  return (
    <ShopContext.Provider
      value={{
        currWardrobe,
        setCurrWardrobe,
        newWardrobe,
        setNewWardrobe,
        cartState,
        dispatch,
        handleAddToWardrobe,
        handleRemoveFromCart,
        handleClearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopStates;
