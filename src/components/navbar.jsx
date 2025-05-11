import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Navbar = ({ onNavbarHeightChange }) => {
  const navbarRef = useRef(null); // Reference to the navbar
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Dynamically set the navbar height
  useEffect(() => {
    if (navbarRef.current) {
      const height = navbarRef.current.offsetHeight;
      onNavbarHeightChange(height); // Pass the height to the parent component
    }
  }, [onNavbarHeightChange]);

  return (
    <nav
      ref={navbarRef}
      className="bg-[#7C9070] text-white px-6 py-4 fixed top-0 left-0 right-0 z-50"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">webbshopp</NavLink>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Shop", "About", "Contact", "cart"].map(item => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`} // Use `to` for routing
              className="hover:text-gray-200"
              activeClassName="text-gray-200" // Optional: add custom active class
            >
            {item}
            </NavLink>
          ))}
        </div>

        {/* Right Side: Search, Login/Profile */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleSearch} className="md:hidden">
            <FiSearch size={20} />
          </button>
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded bg-white text-black"
            />
          )}
          {isLoggedIn ? (
            <div className="w-8 h-8 rounded-full bg-gray-400">P</div> // Placeholder for profile avatar
          ) : (
            <NavLink to="/login" className='bg-orange-500 px-5 py-1 rounded'>Login</NavLink>
          )}
          <button onClick={toggleMenu} className="md:hidden">
            <FiMenu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4">
          {["Home", "Shop", "About", "Contact", "cart"].map(item => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block py-2"
              activeClassName="text-gray-200"
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
