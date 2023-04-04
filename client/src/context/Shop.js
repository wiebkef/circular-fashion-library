import { createContext, useContext, useState } from "react";
export const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);

const ShopStates = ({ children }) => {
  const [currWardrobe, setCurrWardrobe] = useState([]);
  const [newWardrobe, setNewWardrobe] = useState([]);
  const handleAddToWardrobe = (item) => {
    console.log("Adding item to wardrobe:", item);
    setNewWardrobe([...newWardrobe, item]);
  };
  return (
    <ShopContext.Provider
      value={{ currWardrobe, setCurrWardrobe, newWardrobe, handleAddToWardrobe }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopStates;
