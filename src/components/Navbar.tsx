"use client"
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };


  return (
    <div id="navbar" className="fixed w-full top-0 left-0 z-10 bg-[#2e0d0d] bg-opacity-100 border-b border-[#232323]">
      <div className="container relative flex items-center justify-between px-4 py-2 mx-auto">
        <div className="text-2xl font-extrabold text-white">TopTea</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex-col items-center" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {/* Navigation Links */}
        <ul className={`flex gap-10 lg:gap-16 ${menuOpen ? 'flex-col flex items-center justify-center top-14 w-full absolute left-0 p-4 opacity-80 bg-[#2e0d0d] ' : 'flex max-[786px]:hidden'} pt-0`}>
          <li className="menulink">
            <a href="#hero" className="text-white hover:text-orange-400 hover:underline">Home</a>
          </li>
          <li className="menulink ">
            <a href="#about" className="text-white hover:text-orange-400  hover:underline">About</a>
          </li>
          <li className="menulink">
            <a href="#menu" className="text-white hover:text-orange-400  hover:underline">Menu</a>
          </li>
          <li className="menulink">
            <a href="#gallery" className="text-white hover:text-orange-400 hover:underline">Gallery</a>
          </li>
          <li className="menulink">
            <a href="#contact" className="text-white hover:text-orange-400 hover:underline">Contact</a>
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
