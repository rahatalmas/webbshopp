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

function App() {

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
      <Router>
          <Navbar onNavbarHeightChange={handleNavbarHeightChange}/>
          <BottomNav/>
          <section style={{ marginTop: `${navbarHeight}px`}}></section>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/product-details/:id' element={<ProductDetailsPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>
          <SiteMap/>
      </Router>
    </>
  );
}

export default App;
