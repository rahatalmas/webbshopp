import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import BottomNav from './components/bottombar';
import SiteMap from './components/siteMap';
import ProductDetailsPage from './productDetailsPage';
import CartPage from './cartPage';
import Home from './home';
import Shop from './shop';
import AboutPage from './about';
import LoginPage from './pages/LoginPage';
import { useShop } from './providers/shopProvider';
import WebbShopp from './pages/webbshopp';

function App() {

  const {selectedShop} = useShop()
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
    {
     selectedShop
     ?
      <Router>
          <Navbar onNavbarHeightChange={handleNavbarHeightChange}/>
          <BottomNav/>
          <section style={{ marginTop: `${navbarHeight}px`}}></section>          
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path={`/${selectedShop.shopName}/home`} element={<Home/>}/>
            <Route path={`/${selectedShop.shopName}/shop`} element={<Shop/>}/>
            <Route path={`/${selectedShop.shopName}/about`} element={<AboutPage/>}/>
            <Route path={`/${selectedShop.shopName}/product-details/:id`} element={<ProductDetailsPage/>}/>
            <Route path={`/${selectedShop.shopName}/cart`} element={<CartPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
          <SiteMap/>
      </Router>
      :
      <Router>
        <Routes>
           <Route path="/" element={<WebbShopp/>}/>
           <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Router>
    }
    </>
  );
}

export default App;
