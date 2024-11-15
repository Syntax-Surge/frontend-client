import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiPottedPlantLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="bg-white border-b-4 border-green-500 p-4 flex justify-between items-center">
      <div className="flex items-center ml-7">
      <PiPottedPlantLight />
        {/* <img src="/logo.svg" alt="PlantyX Logo" className="w-8 h-8 mr-2" /> */}
        <span className="text-lg font-thin">Planty'x</span>
      </div>

      <ul className="flex space-x-8 text-gray-700">
        <li><a href="#plants" className="hover:text-green-500">Plants</a></li>
        <li><a href="#for-offices" className="hover:text-green-500">For Offices</a></li>
        <li><a href="#plant-care" className="hover:text-green-500">Plant Care</a></li>
        <li><a href="#about" className="hover:text-green-500">About</a></li>
      </ul>

      <div className="flex space-x-6 text-gray-700 mr-7">
        <a href="#search" className="hover:text-green-500"><IoIosSearch /></a>
        <a href="#user" className="hover:text-green-500"><CgProfile /></a>
        <a href="#cart" className="hover:text-green-500"><PiShoppingCartThin /></a>
      </div>
      
    </nav>
  );
};

export default Navbar;