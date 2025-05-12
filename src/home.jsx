import { useState } from 'react';
import { FiBox } from 'react-icons/fi';
import BannerSlider from './components/bannerSlider';
import SectionHeader from './components/sectionHeader';
import ProductCarousel from './components/productCarusal';
import HorizontalProductCard from './components/horizontalProductCard';
import ContactPage from './contactPage';
import { useShop } from './providers/shopProvider';
import { storeMap } from './components/storedata';

function Home() {

  const {selectedShop} = useShop();
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
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const [navbarHeight, setNavbarHeight] = useState(0); // State to store navbar height

  // Function to update navbar height from Navbar component
  const handleNavbarHeightChange = (height) => {
    setNavbarHeight(height);
  };
  return (
    <>
      <div>
          <BannerSlider/>
          <section className='p-2.5'></section>
          <section className='px-6'>
            <SectionHeader
                  title="Featured Products"
                    icon={FiBox}
                    linkText="Browse All"
                    linkHref="/products"
            />
          </section>
          <ProductCarousel products={storeMap[`${selectedShop.shopName}`].products.slice(0,9)}/>

          {/* all products */}
          <section className="w-full p-6 mt-4 bg-gray-50">
          <SectionHeader
                  title="All Products"
                  icon={FiBox}
                  linkText="Browse All"
                  linkHref="/products"
            />
          {/* Grid Layout: 1 column on mobile, 2 on large screens */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {storeMap[`${selectedShop.shopName}`].products.slice(0,3).map((product) => (
              <HorizontalProductCard
                key={product.id}
                product={product}
                onAddToCart={(product) => console.log("Added to cart:", product)}
              />
            ))}
          </div>
          </section>
      </div>
    </>
  );
}

export default Home;
