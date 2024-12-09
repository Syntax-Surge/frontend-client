import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiPottedPlantLight } from "react-icons/pi";
import { useState } from "react";
import SearchBar from "../searchbar/seachbar";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <nav className="bg-white p-4 flex justify-between items-center h-20">
      <div className="flex items-center ml-7">
        <a href="/">
          <img
            src={require("../../images/Planty's Logo.png")}
            alt=""
            className="mb-2"
          />
        </a>
        {/* <PiPottedPlantLight /> */}
        {/* <img src="/logo.svg" alt="PlantyX Logo" className="w-8 h-8 mr-2" /> */}
        {/* <span className="text-lg font-thin">Planty'x</span> */}
      </div>

      <ul className="flex space-x-8 text-gray-700">
        <li>
          <a href="/" className="hover:text-green-500">
            Home
          </a>
        </li>
        <li>
          <a href="/shop" className="hover:text-green-500">
            Shop
          </a>
        </li>
        <li>
          <a href="#plant-care" className="hover:text-green-500">
            Categories
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-green-500">
            Reviews
          </a>
        </li>
      </ul>

      <div className="flex space-x-6 text-gray-700 items-center mr-7">
        {searchActive ? (
          <SearchBar setSearchActive={setSearchActive} />
        ) : (
          <button
            onClick={() => setSearchActive(true)}
            className="hover:text-green-500"
          >
            <IoIosSearch />
          </button>
        )}
        {/* <a href="#search" className="hover:text-green-500"><IoIosSearch /></a> */}

        {isLoggedIn ? (
          <>
            <a href="/myaccount" className="hover:text-green-500">
              <CgProfile />
            </a>
            <a href="/cart/:userId" className="hover:text-green-500">
              <PiShoppingCartThin />
            </a>
          </>
        ) : (
          <Button>Sign In</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
