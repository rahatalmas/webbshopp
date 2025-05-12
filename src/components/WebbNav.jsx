import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const WebbNav = ({ onWebbNavHeightChange }) => {
  const WebbNavRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Set nav height on mount
  useEffect(() => {
    if (WebbNavRef.current) {
      const height = WebbNavRef.current.offsetHeight;
      onWebbNavHeightChange(height);
    }
  }, [onWebbNavHeightChange]);

  const navItems = ["Home", "stores", "About", "Contact"];

  return (
    <nav
      ref={WebbNavRef}
      role="navigation"
      aria-label="Main navigation"
      className="bg-[var(--primary)] text-white px-6 py-4 fixed top-0 left-0 right-0 z-50"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          WebbShopp
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `hover:text-gray-200 ${isActive ? 'text-gray-200 font-semibold' : ''}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Right side: Login/Profile and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
              <FiUser />
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-1 rounded-lg shadow transition-all duration-200"
            >
              Login
            </NavLink>
          )}

          <button onClick={toggleMenu} className="md:hidden">
            <FiMenu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `block py-2 ${isActive ? 'text-gray-200 font-semibold' : ''}`
              }
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default WebbNav;
