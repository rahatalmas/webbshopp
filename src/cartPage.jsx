import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 129.99,
      quantity: 1,
      image: 'https://i.pinimg.com/736x/3d/8a/2f/3d8a2fdd8cd19cc1ef65aa8993085a7b.jpg'
    },
    {
      id: 2,
      name: 'Smartwatch',
      price: 99.99,
      quantity: 2,
      image: 'https://images-platform.99static.com//VArxVzYHdIiNcLp_auBaoqRtQ9g=/256x207:756x707/fit-in/500x500/99designs-contests-attachments/71/71434/attachment_71434832'
    }
  ]);

  const onUpdateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const onRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const onCheckout = () => {
    alert('Proceeding to checkout with ' + cartItems.length + ' items.');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is currently empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow p-4 gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded md:w-24 md:h-24"
                />
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>

                  <div className="mt-3 flex items-center space-x-3">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <span className="ml-auto font-medium text-gray-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            <ul className="space-y-2">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between text-sm text-gray-700">
                  <span>{item.name} ({item.quantity} x ${item.price.toFixed(2)})</span>
                  <span>${(item.quantity * item.price).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold text-gray-800">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
            <button
              onClick={onCheckout}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
