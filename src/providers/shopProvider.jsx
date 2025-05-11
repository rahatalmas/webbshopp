import React, { createContext, useContext, useEffect, useState } from 'react';

// Create context
const ShopContext = createContext();

// Custom hook
export const useShop = () => useContext(ShopContext);

// Provider
export const ShopProvider = ({ children }) => {
  const [selectedShop, setSelectedShop] = useState(null);

  // Load from localStorage on first load
  useEffect(() => {
    const savedShop = localStorage.getItem('selectedShop');
    if (savedShop) {
      setSelectedShop(JSON.parse(savedShop));
    }
  }, []);

  // Store to localStorage whenever it changes
  useEffect(() => {
    if (selectedShop) {
      localStorage.setItem('selectedShop', JSON.stringify(selectedShop));
    } else {
      localStorage.removeItem('selectedShop');
    }
  }, [selectedShop]);

  // Methods
  const selectShop = (shop) => setSelectedShop(shop);
  const exitShop = () => setSelectedShop(null);

  return (
    <ShopContext.Provider value={{ selectedShop, selectShop, exitShop }}>
      {children}
    </ShopContext.Provider>
  );
};
