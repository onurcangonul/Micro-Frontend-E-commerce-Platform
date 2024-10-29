import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    setProfileDropdownOpen(false);
    navigate("/login")

    toast.info("Çıkış yapıldı.");
  };

  return (
    <header className="flex items-center justify-between px-4 py-4 border-b bg-white relative">
      {/* Logo */}
      <Link to={"/"}>
        <div className="text-2xl font-bold text-darkBlue font-cursive">
          <img src={Logo} alt="logo" className="w-20 h-auto object-cover" />
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex space-x-8 text-lg">
        <a href="#" className="text-primary font-semibold hover:text-secondary">
          Home
        </a>
        <a href="#" className="text-darkBlue hover:text-secondary">
          About Us
        </a>
        <a href="#" className="text-darkBlue hover:text-secondary">
          Contact
        </a>
        <a href="#" className="text-darkBlue hover:text-secondary">
          New Collection
        </a>
      </nav>

      {/* Icons */}
      <div className="hidden lg:flex items-center space-x-6 text-2xl text-gray-600 relative">
        <Link to={"/cart"}>
          <FaShoppingCart className="text-darkBlue hover:text-secondary cursor-pointer" />
        </Link>
        <div className="h-6 border-l border-gray-400"></div>

        {/* Profile Icon and Dropdown */}
        <div className="relative">
          <FaUser
            className="text-darkBlue hover:text-secondary cursor-pointer"
            onClick={toggleProfileDropdown}
          />
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <Link
                to="/orders"
                className="block px-4 py-2 text-darkBlue hover:bg-gray-100"
                onClick={() => setProfileDropdownOpen(false)}
              >
                My Orders
              </Link>
              <button
                className="w-full text-left px-4 py-2 text-darkBlue hover:bg-gray-100"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-2xl text-gray-600" onClick={toggleMenu}>
        <FaBars />
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-8 text-lg z-50">
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-3xl text-gray-600"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>

          <a
            href="#"
            className="text-darkBlue font-semibold"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a href="#" className="text-gray-600" onClick={toggleMenu}>
            About Us
          </a>
          <a href="#" className="text-gray-600" onClick={toggleMenu}>
            Contact
          </a>
          <a href="#" className="text-gray-600" onClick={toggleMenu}>
            New Collection
          </a>

          <div className="flex space-x-6 text-2xl text-gray-600">
            <Link to={"/cart"} onClick={ ()=>toggleMenu()}>
              <FaShoppingCart className="text-darkBlue hover:text-secondary cursor-pointer" />
            </Link>

            {/* Mobile Profile Dropdown */}
            <div className="relative">
              <FaUser
                className="hover:text-darkBlue cursor-pointer"
                onClick={toggleProfileDropdown}
              />
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-darkBlue hover:bg-gray-100"
                    onClick={() => {
                      toggleProfileDropdown();
                      toggleMenu();
                    }}
                  >
                    My Orders
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-darkBlue hover:bg-gray-100"
                    onClick={() => {
                      // Çıkış yapma işlemi burada yapılabilir
                      console.log("Logged out");
                      toggleProfileDropdown();
                      toggleMenu();
                    }}
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
