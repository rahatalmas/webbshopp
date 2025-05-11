import React, { useState, useEffect } from 'react';
import { FiPlus, FiMinus, FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const product = {
    name: 'Wireless Headphones',
    price: 129.99,
    shortDescription: 'High-quality wireless headphones with active noise cancellation.',
    description: 'These wireless headphones offer premium sound, comfort, and a long-lasting battery. They feature active noise cancellation and a sleek, foldable design. Perfect for travel, work, or relaxation.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      'https://i.pinimg.com/736x/3d/8a/2f/3d8a2fdd8cd19cc1ef65aa8993085a7b.jpg',
      'https://images-platform.99static.com//VArxVzYHdIiNcLp_auBaoqRtQ9g=/256x207:756x707/fit-in/500x500/99designs-contests-attachments/71/71434/attachment_71434832',
    ]
  };
  
  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Custom Image Slider */}
        <div className="relative">
          <img
            src={product.images[currentImageIndex]}
            alt={`Product ${currentImageIndex}`}
            className="w-full h-96 object-cover rounded-lg shadow"
          />
          <button
            onClick={handlePrevImage}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <FaChevronRight />
          </button>
          <div className="flex justify-center space-x-2 mt-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-lg text-green-600 font-semibold">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">{product.shortDescription}</p>
          </div>

          <div className="flex items-center space-x-4 mt-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <FiMinus />
            </button>
            <span className="px-4 text-lg font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <FiPlus />
            </button>
          </div>

          <div className="text-gray-700 font-medium">
            Total: <span className="text-green-700 font-bold text-lg">${(product.price * quantity).toFixed(2)}</span>
          </div>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center px-6 py-2 bg-[#F97B22] text-white rounded hover:bg-[#9CA777] transition"
            >
              <AiOutlineShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
              <FiHeart />
            </button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product Details</h2>
        <p className="text-gray-700 leading-relaxed text-base">
          {product.description}
        </p>
      </div>

      {/* Video Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Watch the Product in Action</h2>
        <div className="w-full aspect-w-16 aspect-h-9 max-h-[600px]">
          <iframe
            src={product.videoUrl}
            title="Product Video"
            className="w-full h-full rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

// Example Usage:
// const sampleProduct = {
//   name: 'Wireless Headphones',
//   price: 129.99,
//   shortDescription: 'High-quality wireless headphones with active noise cancellation.',
//   description: 'These wireless headphones offer premium sound, comfort, and a long-lasting battery. They feature active noise cancellation and a sleek, foldable design. Perfect for travel, work, or relaxation.',
//   videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//   images: [
//     'https://i.pinimg.com/736x/3d/8a/2f/3d8a2fdd8cd19cc1ef65aa8993085a7b.jpg',
//     'https://images-platform.99static.com//VArxVzYHdIiNcLp_auBaoqRtQ9g=/256x207:756x707/fit-in/500x500/99designs-contests-attachments/71/71434/attachment_71434832'
//   ]
// };
