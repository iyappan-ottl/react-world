// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
          <span className="text-2xl font-bold">Boston</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-full font-medium">HOME</button>
          <button className="px-4 py-2 text-gray-800 hover:text-yellow-500 font-medium">SERVICES</button>
          <button className="px-4 py-2 text-gray-800 hover:text-yellow-500 font-medium">SKILLS</button>
          <button className="px-4 py-2 text-gray-800 hover:text-yellow-500 font-medium">PORTFOLIO</button>
          <button className="px-4 py-2 text-gray-800 hover:text-yellow-500 font-medium">CONTACT</button>
        </div>
      </div>
      <button className="px-6 py-2 bg-yellow-500 text-white rounded-md font-medium">Contact Now</button>
    </nav>
  );
};

export default Navbar;