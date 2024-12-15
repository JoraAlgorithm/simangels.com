import React, { useState } from "react";
import { IoIosArrowRoundForward, IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex fixed w-full h-[70px] px-10 sm:px-16 items-center justify-between text-white bg-opacity-70 backdrop-blur-lg z-50">
      <h1 className="text-2xl font-bold">Logo</h1>

      {/* Desktop Menu */}
      <ul className="sm:flex hidden items-center gap-6 text-[17px] font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <button className="flex items-center gap-2 bg-yellow-500 text-black rounded py-2 px-4">
          Let's Go
          <IoIosArrowRoundForward size={25} className="animation" />
        </button>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="block sm:hidden">
        <IoIosMenu
          className="cursor-pointer"
          size={30}
          onClick={() => setToggleMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white bg-[#13160F] z-50">
          <IoIosClose
            className="absolute top-5 right-10 cursor-pointer"
            size={35}
            onClick={() => setToggleMenu(false)}
          />
          <ul className="flex flex-col items-center gap-8 text-[20px] font-semibold">
            <li onClick={() => setToggleMenu(false)}>Home</li>
            <li onClick={() => setToggleMenu(false)}>About</li>
            <li onClick={() => setToggleMenu(false)}>Services</li>
            <li onClick={() => setToggleMenu(false)}>Contact</li>
            <button className="flex items-center gap-2 bg-yellow-500 text-black rounded py-2 px-4">
              Let's Go
              <IoIosArrowRoundForward size={25} className="animation" />
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
