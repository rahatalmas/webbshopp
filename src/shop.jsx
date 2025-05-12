import React, { useState } from 'react';
import { FiBox } from 'react-icons/fi';
import SectionHeader from './components/sectionHeader';
import HorizontalProductCard from './components/horizontalProductCard';
import { storeMap } from './components/storedata';
import { useShop } from './providers/shopProvider';
const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones with abcd",
      price: 129.99,
      image: "https://i.pinimg.com/736x/3d/8a/2f/3d8a2fdd8cd19cc1ef65aa8993085a7b.jpg",
    },
    {
      id: 2,
      name: "Smartwatch",
      description: "Fitness tracking smartwatch with heart rate monitor.",
      price: 99.99,
      image: "https://images-platform.99static.com//VArxVzYHdIiNcLp_auBaoqRtQ9g=/256x207:756x707/fit-in/500x500/99designs-contests-attachments/71/71434/attachment_71434832",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and waterproof design.",
      price: 59.99,
      image: "https://img.pikbest.com/png-images/20241027/anime-t-shirt-design_11011948.png!w700wp",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and waterproof design.",
      price: 9.99,
      image: "https://www.shutterstock.com/image-vector/vector-illustration-japan-comic-book-600nw-2331476417.jpg",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and waterproof design.",
      price: 5.99,
      image: "https://wallpapercat.com/w/full/7/1/4/1198692-3840x2160-desktop-4k-studio-ghibli-background-photo.jpg",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and waterproof design.",
      price: 0.99,
      image: "https://www.shutterstock.com/image-vector/vector-illustration-japan-comic-book-600nw-2331476417.jpg",
    },
    // Add more items for pagination
    // ...
  ];
  const {selectedShop} = useShop();
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Calculate the index of the first and last item on the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  // Get the current page's products
  const currentProducts = storeMap[selectedShop.shopName].products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const totalPages = Math.ceil(storeMap[selectedShop.shopName].products.length / itemsPerPage);

  return (
    <section className="w-full p-6 bg-gray-50">
      {/* Banner Section */}
      <div
        className="w-full min-h-[200px] bg-cover bg-center bg-no-repeat text-white flex justify-center items-center mb-8 rounded-lg relative overflow-hidden"
        style={{
          backgroundImage: `url(${storeMap[selectedShop.shopName].shopPoster})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-green-700 opacity-60 rounded"></div>

        <h1 className="text-4xl font-bold relative z-10">Welcome to Our Shop</h1>
      </div>

      {/* Section Header */}
      <SectionHeader
        title="All Products"
        icon={FiBox}
        linkText="Browse All"
        linkHref="/products"
      />
      
      {/* Grid Layout: 1 column on mobile, 2 on medium, and 3 on large screens */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {currentProducts.map((product) => (
          <HorizontalProductCard
            key={product.id}
            product={product}
            onAddToCart={(product) => console.log("Added to cart:", product)}
          />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`px-4 py-2 rounded-md border ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {/* Page Number Buttons */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white border text-blue-500'}`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            className={`px-4 py-2 rounded-md border ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Shop;
