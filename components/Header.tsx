
import React from 'react';
import { BuildingStorefrontIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <BuildingStorefrontIcon className="h-8 w-8 text-amber-800" />
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Madhuri Plywood
          </h1>
        </div>
        <a 
          href="#contact"
          className="hidden md:inline-block bg-amber-700 text-white font-semibold px-5 py-2 rounded-lg hover:bg-amber-800 transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
