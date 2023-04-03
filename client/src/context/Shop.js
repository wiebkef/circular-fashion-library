import { createContext, useContext, useState } from "react";

export const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);

const ShopStates = ({ children }) => {
  const [currWardrobe, setCurrWardrobe] = useState([]);
  const [newWardrobe, setNewWardrobe] = useState([]);

  return (
    <ShopContext.Provider
      value={{ currWardrobe, setCurrWardrobe, newWardrobe, setNewWardrobe }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopStates;
