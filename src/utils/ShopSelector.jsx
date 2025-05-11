import React from 'react';
import { useShop } from '../providers/shopProvider';

export const ShopSelector = ({ shop }) => {
  const {selectShop} = useShop()

  const handleSelect = () => {
    if (shop) {
      selectShop(shop);
    
    } else {
      console.warn('No shop passed to ShopSelector');
    }
  };

  return (
    <button
      onClick={handleSelect}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Select "{shop?.name || 'Shop'}"
    </button>
  );
};

export const ExitButton = () => {
  const { exitShop } = useShop();

  return (
    <button
      onClick={exitShop}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Exit Shop
    </button>
  );
};
