import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi"; 
import Logo from "../../assets/logo.png"; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-lightBlue text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {/* Logo and Description */}
        <div>
          <img src={Logo} alt="Logo" className="w-24 mb-4" />
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
       
          </ul>
        </div>

        {/* Shop Now */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Shop Now</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Trending Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                New Arrivals Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Featured Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sitemaps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">
           İstanbul/Turkey
          </p>
          <p className="text-sm mt-2 flex items-center">
            <FiPhone className="mr-2" /> +90 539 240 25 09
          </p>
          <p className="text-sm mt-2 flex items-center">
            <FiMail className="mr-2" /> onurcangonul@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-center text-white py-4 mt-10">
        <p className="text-sm">
          &copy; 2024 - Onurcan Gönül - Ecommerce. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <FaFacebook className="hover:text-blue-500 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaYoutube className="hover:text-red-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
