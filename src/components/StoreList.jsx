import React from 'react';
import { Link } from 'react-router-dom';
import { stores } from './storedata';
import StoreCard from './StoreCard';

const StoreGrid = () => {

  return (
    <div className="max-w-full mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Store List</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stores.map(store => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default StoreGrid; 