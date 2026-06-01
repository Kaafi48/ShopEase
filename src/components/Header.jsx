import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bg-white bg-opacity-50 backdrop-blur-sm z-10 border-b border-gray-200">
      <div className="container max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-red-600">
          <Link to="/">ShopEase</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-800 mx-4">
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-gray-800 mx-4"
            >
              Products
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800 mx-4">
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-800 mx-4"
            >
              Contact
            </Link>
            {/* cart */}
            <Link to="/cart" className="text-gray-600 hover:text-gray-800 mx-4">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
