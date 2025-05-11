import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
     <NavLink to="/product-details">
      <div className="max-w bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#F97B22] text-white px-4 py-2 rounded hover:bg-[#9CA777] transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
     </NavLink>
  );
};

export default ProductCard;
